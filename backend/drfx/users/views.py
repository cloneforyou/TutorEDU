# users/views.py
from rest_framework import generics
from rest_framework.response import Response
from . import models
from . import serializers
from users.models import CustomUser
from users.models import Appointment
from users.models import Subject

class UserListView(generics.ListCreateAPIView):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer

class SubjectListView(generics.ListCreateAPIView):
    queryset = models.Subject.objects.all()
    serializer_class = serializers.SubjectSerializer

class AppointmentListView(generics.ListCreateAPIView):
    queryset = models.Appointment.objects.all()
    serializer_class = serializers.AppointmentSerializer

class UpdateUserID(generics.RetrieveUpdateAPIView):
    serializer_class = serializers.UserSerializer

    def get_queryset(self):
        return CustomUser.objects.filter(id = self.kwargs['pk'])
