import React, { useEffect, useState } from "react";
import { get_booking_country } from "../backend/api";
import { Link } from "react-router-dom";
import LoadingSkeleton from "../mycomponents/LoadingSkeleton";

export default function CountryBooking() {
  useEffect(() => {
    getBook();
  }, []);
  const getBook = async () => {
    try {
      setLoading(true);
      const { data } = await get_booking_country();
      console.log(data);
      setBooking(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div>
      <h1 className="fw-bold text-center">country Booking</h1>
      <hr />
      <div className="">
        {!loading ? (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Safari Experience</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {booking.map((book) => (
                <tr>
                  <td>{book.name}</td>
                  <td>{book.experience}</td>
                  <td>
                    {" "}
                    <Link
                      to={`/country_book/${book.book_id} `}
                      className="btn btn-primary"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <LoadingSkeleton />
        )}
      </div>
    </div>
  );
}
