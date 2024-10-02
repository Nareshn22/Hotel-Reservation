import { Injectable } from '@angular/core';
import { AddOrUpdateReservation, Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];
  private baseApiUrl = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) {
  }

  // CRUD

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseApiUrl}/reservations/`);
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }

  addReservation(reservation: AddOrUpdateReservation): Observable<any> {

    // reservation.id = Date.now().toString();
    // this.reservations.push(reservation);
    return this.http.post(`${this.baseApiUrl}/reservations/create/`, reservation);
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index, 1)
  }

  updateReservation(id: string, updatedReservation: AddOrUpdateReservation) : Observable<any> {
    // let index = this.reservations.findIndex(res => res.id === id);
    // this.reservations[index] = updatedReservation;
    return this.http.put(`${this.baseApiUrl}/reservations/${id}/update/`, updatedReservation);
  }

}