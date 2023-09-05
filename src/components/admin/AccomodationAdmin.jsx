import React, { useEffect, useState } from "react";
import { get_accomodation } from "../backend/api";
import { Link } from "react-router-dom";
import LoadingSkeleton from "../mycomponents/LoadingSkeleton";

export default function AccomodationAdmin() {
  useEffect(() => {
    getAcc();
  }, []);
  const getAcc = async () => {
    try {
      setLoading(true);
      const { data } = await get_accomodation();
      console.log(data);
      setAccomodation(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  const [accomodation, setAccomodation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div>
      <h1 className="fs-1">Accomodation Booking</h1>
      <hr />
      {!loading ? (
        <div className="pt-3">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {accomodation.map((book) => (
                <tr>
                  <td>{book.name}</td>
                  <td>{book.phone}</td>
                  <td>
                    {" "}
                    <Link
                      to={`/accomodation/${book.acc_id} `}
                      className="btn btn-primary"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <LoadingSkeleton />
      )}
    </div>
  );
}
