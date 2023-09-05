import React, { useEffect, useState } from "react";
import { get_booking_package } from "../backend/api";
import { Link } from "react-router-dom";
import LoadingSkeleton from "../mycomponents/LoadingSkeleton";
export default function PackageBookings() {
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await get_booking_package();
      console.log(data);
      setBookings(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      setError(true);
    }
  };
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div>
      <h3 className="fw-bold">package booking</h3>
      <hr />
      <div className="pt-3">
        {!loading ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th>Package</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((book) => (
                <tr>
                  <td>{book.name}</td>
                  <td>{book.package_title}</td>
                  <td>
                    <Link
                      to={`/package/${book.booking_id}`}
                      className="btn btn-primary"
                    >
                      View
                    </Link>{" "}
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
