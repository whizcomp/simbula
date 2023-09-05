import React, { useEffect, useState } from "react";
import { get_accomodation, get_booking_country_id } from "../backend/api";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import LoadingSkeleton from "../mycomponents/LoadingSkeleton";
export default function AccomodationDetails() {
  const { id } = useParams();
  useEffect(() => {
    getBook();
  }, []);
  const getBook = async () => {
    try {
      setLoading(true);
      const { data } = await get_accomodation(id);
      console.log(data);
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
          <h3 className="pb-4">Country Bookings Details</h3>
          {!loading ? (
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
                  <th>Check In</th>
                  <td>{bookDetails.checkin}</td>
                </tr>
                <tr>
                  <th>Check Out</th>
                  <td>{bookDetails.checkout}</td>
                </tr>
                <tr>
                  <th>Number of adults</th>
                  <td>{bookDetails.adults}</td>
                </tr>
                <tr>
                  <th>NUmber of kids</th>
                  <td>{bookDetails.kids}</td>
                </tr>
                <tr>
                  <th>Type of accommodation</th>
                  <td>{bookDetails.location}</td>
                </tr>
                <tr>
                  <th>Maximum budget per night</th>
                  <td>{bookDetails.price}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <LoadingSkeleton />
          )}
        </div>
      )}
    </div>
  );
}
