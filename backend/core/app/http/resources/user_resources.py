from rest_framework.serializers import ModelSerializer

from core.models import User


class UserResource(ModelSerializer):
    class Meta:
        model = User
        fields = [
            "first_name",
            "last_name",
            "email",
            "about",
            "avatar",
        ]
