export interface Reservation {
    id: string,
    check_in_date: Date,
    check_out_date: Date,
    guest_name: string,
    guest_email: string,
    room_number: number
}

export interface AddOrUpdateReservation {
    guest_name: string,
    check_in_date: Date,
    check_out_date: Date,
    guest_email: string,
    room_number: number
}