import axios from "axios";
const endpoint = "http://localhost:2331/api/bookings"
const booking_country = (data) => {

    const {
        email,
        name,
        phone,
        residing_country,
        visit_country,
        safari_experience,
        hear_about,
        message,
        arrival_date,
        depart_date,
    } = data;
    return axios.post(`${endpoint}/country_book`, {
        email,
        name,
        phone,
        residing_country,
        visit_country,
        safari_experience,
        hear_about,
        message,
        arrival_date,
        depart_date,
    })
}
const message = (data) => {
    const {
        email,
        name,
        message
    } = data;
    return axios.post(`${endpoint}/message`, {
        email,
        name,
        message
    })
}
const accomodation = data => {
    const {
        email,
        name,
        phone,
        mode,
        checkin,
        checkout,
        adults,
        kids,
        price,
        location
    } = data;
    return axios.post(`${endpoint}/accomodation`, {
        email,
        name,
        phone,
        mode,
        checkin,
        checkout,
        adults,
        kids,
        price,
        location
    })
}
const airport = data => {
    const {
        email,
        name,
        phone,
        arrival_port,
        depart_port,
        flight_arrival_number,
        flight_depart_number,
        pass,
        one_way,
        vehicle,
        special_needs,
        pick_up
    } = data;
    return axios.post(`${endpoint}/airport`, {
        email,
        name,
        phone,
        arrival_port,
        depart_port,
        flight_arrival_number,
        flight_depart_number,
        pass,
        one_way,
        vehicle,
        special_needs,
        pick_up
    })
}
const booking_package = async (data) => {
    const {
        email,
        name,
        phone,
        residing_country,
        package_no,
        hear_about,
        message,
        arrival_date
    } = data;
    return axios.post(`${endpoint}/book_package`, {
        email,
        name,
        phone,
        residing_country,
        package_no,
        hear_about,
        message,
        arrival_date
    })
}
export {
    booking_country,
    message,
    accomodation,
    airport,
    booking_package
}