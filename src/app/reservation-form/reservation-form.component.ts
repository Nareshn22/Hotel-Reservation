import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { AddOrUpdateReservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      check_in_date: ['', Validators.required],
      check_out_date: ['', Validators.required],
      guest_name: ['', Validators.required],
      guest_email: ['', [Validators.required, Validators.email]],
      room_number: ['', Validators.required]
    })

    let id = this.activatedRoute.snapshot.paramMap.get('id')

    if (id) {
      let reservation = this.reservationService.getReservation(id)

      if (reservation)
        this.reservationForm.patchValue(reservation)
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
const a = 10;
      let reservation: AddOrUpdateReservation = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id')

      if (id) {
        // Update
        this.reservationService.updateReservation(id, reservation).subscribe(res => {

        }, err => {

        });
      } else {
        // New
        this.reservationService.addReservation(reservation).subscribe(res => {
          console.log(res);
          this.router.navigate(['/list']);
        }, err => {
          console.log(err);
        });

      }

      
    }
  }

}