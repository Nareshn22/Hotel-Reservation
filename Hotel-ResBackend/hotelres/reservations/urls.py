from django.urls import path
from . import views

urlpatterns = [
    path('reservations/', views.get_reservations, name='reservation-list'),
    path('reservations/<int:pk>/', views.get_reservation, name='reservation-detail'),
    path('reservations/create/', views.create_reservation, name='reservation-create'),
    path('reservations/<int:pk>/update/', views.update_reservation, name='reservation-update'),
    path('reservations/<int:pk>/delete/', views.delete_reservation, name='reservation-delete'),
]
