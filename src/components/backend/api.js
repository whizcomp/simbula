import axios from "axios";
const endpoint = "https://api.simbulasafaris.com/api/bookings"
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
const get_booking_package = () => {
    return axios.get(`${endpoint}/book_package`)
}
const get_booking_package_id = (id) => {
    return axios.get(`${endpoint}/book_package/${id}`)
}
const get_booking_country = () => {
    return axios.get(`${endpoint}/book_country`)
}
const get_booking_country_id = (id) => {
    return axios.get(`${endpoint}/book_country/${id}`)
}
const get_accomodation_id = (id) => {
    return axios.get(`${endpoint}/accomodation/${id}`)
}
const get_accomodation = () => {
    return axios.get(`${endpoint}/accomodation`)
}
const get_messages = () => {
    return axios.get(`${endpoint}/messages`)
}
const get_message_id = (id) => {
    return axios.get(`${endpoint}/message/${id}`)
}
const get_airport_transfer = () => {
    return axios.get(`${endpoint}/airport`)
}
const get_airport_transfer_id = (id) => {
    return axios.get(`${endpoint}/airport/${id}`)
}
const login = (email, password) => {
    return axios.post(`${endpoint}/login`, {
        email,
        password
    })
}
const apiPostBlog = (data) => {
    const {
        title,
        image,
        description,
        content
    } = data;
    return axios.post(`${endpoint}/blog`, {
        title,
        image,
        description,
        content
    })
}
const apiGetBlog = (title) => {
    return axios.get(`${endpoint}/blog/${title}`)
}
const apiGetAllBlogs = () => {
    return axios.get(`${endpoint}/blog`)
}
export {
    booking_country,
    message,
    accomodation,
    airport,
    booking_package,
    get_booking_package,
    get_booking_package_id,
    get_booking_country,
    get_booking_country_id,
    get_accomodation,
    get_accomodation_id,
    get_messages,
    get_message_id,
    login,
    get_airport_transfer,
    get_airport_transfer_id,
    apiPostBlog,
    apiGetBlog,
    apiGetAllBlogs
}