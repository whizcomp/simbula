import React, { useEffect, useState } from "react";
import { get_booking_country_id } from "../backend/api";
import { useParams } from "react-router-dom";
export default function CountryBookDetails() {
  const { id } = useParams();
  useEffect(() => {
    getBook();
  }, []);
  const getBook = async () => {
    try {
      setLoading(true);
      const { data } = await get_booking_country_id(id);
      setBookings(data[0]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  const [bookDetails, setBookings] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div>
      {bookDetails && (
        <div>
          <h3>Country Bookings Details</h3>
          {!loading && (
            <table className="table pt-4">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{bookDetails.name}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{bookDetails.email}</td>
                </tr>
                <tr>
                  <th>phone</th>
                  <td>{bookDetails.phone}</td>
                </tr>
                <tr>
                  <th>Safari experience</th>
                  <td>{bookDetails.experience}</td>
                </tr>
                <tr>
                  <th>Residing Country</th>
                  <td>{bookDetails.residing_country}</td>
                </tr>
                <tr>
                  <th>Visiting Country</th>
                  <td>{bookDetails.visiting_country}</td>
                </tr>
                <tr>
                  <th>How did you hear about us</th>
                  <td>{bookDetails.hear_about}</td>
                </tr>
                <tr>
                  <th>Arrival Date</th>
                  <td>{bookDetails.arrival_date}</td>
                </tr>
                <tr>
                  <th>Depart Date</th>
                  <td>{bookDetails.depart_date}</td>
                </tr>
                <tr>
                  <td>
                    <p className="fw-bold">Message</p>
                    {bookDetails.message}
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}
