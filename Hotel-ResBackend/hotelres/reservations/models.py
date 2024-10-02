from django.db import models

class Reservation(models.Model):
    guest_name = models.CharField(max_length=100)
    # check_in_date = models.CharField(max_length=100)
    # check_out_date = models.CharField(max_length=100)
    guest_email = models.EmailField()
    room_number = models.IntegerField()

    def __str__(self):
        return f"{self.guest_name} - Room {self.room_number}"
