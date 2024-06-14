from rest_framework import permissions
from rest_framework.generics import ListAPIView

from .models import Hero
from .serializers import HeroSerializer


class HeroListView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Hero.objects.all()
    serializer_class = HeroSerializer
    pagination_class = None
