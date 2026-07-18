from .serializers import TaskSeri
from rest_framework import viewsets
from .models import Task


class ViewTask(viewsets.ModelViewSet):
    
    queryset = Task.objects.all()
    serializer_class = TaskSeri
    