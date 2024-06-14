from rest_framework import permissions
from rest_framework.generics import ListAPIView

from .models import About
from .serializers import AboutSerializer


class AboutListView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = About.objects.all()
    serializer_class = AboutSerializer
    pagination_class = None
