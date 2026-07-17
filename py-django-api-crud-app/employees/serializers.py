from rest_framework import serializers

from .models import Employee


class EmployeeSerializer(serializers.ModelSerializer):   #Automatically maps model fields.
    class Meta:
        model = Employee
        fields = [vie
            'id',
            'name',
            'role',
            'salary',
        ]
        
        # fields ='__all__'
        read_only_fields = ['id']



# serializers.py -> Converts: => Python Object -> JSON