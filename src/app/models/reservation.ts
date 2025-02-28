export interface Reservation {
    id: string,
    guest_name: string,
    guest_email: string,
    room_number: number
}

export interface AddOrUpdateReservation {
    guest_name: string,
    guest_email: string,
    room_number: number
}