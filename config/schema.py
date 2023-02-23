import graphene
from graphene_django import DjangoObjectType
from users.models import Users
from todo.models import TODO


class TODOType(DjangoObjectType):
    class Meta:
        model = TODO
        fields = '__all__'


class UserType(DjangoObjectType):
    class Meta:
        model = Users
        fields = '__all__'


class Query(graphene.ObjectType):
    all_todo = graphene.List(TODOType)
    all_users = graphene.List(UserType)
    user_by_id = graphene.Field(UserType, id=graphene.Int(required=True))
    todo_by_user_name = graphene.List(TODOType, name=graphene.String(required=False))

    def resolve_all_books(root, info):
        return TODO.objects.all()

    def resolve_all_users(root, info):
        return Users.objects.all()

    def resolve_user_by_id(self, info, id):
        try:
            return Users.objects.get(id=id)
        except Users.DoesNotExist:
            return None

    def resolve_todo_by_user_name(self, info, name=None):
        todo = TODO.objects.all()
        if name:
            todo = todo.filter(user_first_name=name)
        return todo


class UsersMutation(graphene.Mutation):
    class Arguments:
        user_name = graphene.Field(UserType)
        first_name = graphene.Field(UserType)
        last_name = graphene.Field(UserType)
        email = graphene.Field(UserType)

    @classmethod
    def mutate(cls, root, info, user_name, first_name, last_name, email):
        user = Users.objects.get(pk=id)
        user.user_name = user_name
        user.save()
        return UsersMutation(user=user)


class Mutation(graphene.ObjectType):
    update_user = UsersMutation.Field()


schema = graphene.Schema(query=Query)
