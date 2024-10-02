from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Reservation
from .serializers import ReservationSerializer
from django.shortcuts import get_object_or_404

@api_view(['GET'])
def get_reservations(request):
    reservations = Reservation.objects.all()
    serializer = ReservationSerializer(reservations, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_reservation(request, pk):
    reservation = get_object_or_404(Reservation, pk=pk)
    serializer = ReservationSerializer(reservation)
    return Response(serializer.data)

@api_view(['POST'])
def create_reservation(request):
    serializer = ReservationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_reservation(request, pk):
    reservation = get_object_or_404(Reservation, pk=pk)
    serializer = ReservationSerializer(reservation, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_reservation(request, pk):
    reservation = get_object_or_404(Reservation, pk=pk)
    reservation.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
