from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Employee
from .serializers import EmployeeSerializer


class EmployeeViewSet(viewsets.ModelViewSet): #Provides CRUD automatically.
    
    queryset = Employee.objects.all() #Fetch all employees.
    serializer_class = EmployeeSerializer  #Use serializer.

    @action(detail=False, methods=['post'], url_path='bulk-create')  #Creates custom endpoint:
    
    # @action(detail=False, methods=['post'])  #Creates custom endpoint:
    def studentdata(self, request):    #Receives multiple employees.
        serializer = self.get_serializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


# # ModelViewSet automatically provides:   -> Create  POST /employees/  or List GET /employees/ or DELETE or PUT

