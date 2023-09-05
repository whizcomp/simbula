import React, { useEffect, useState } from "react";
import { get_airport_transfer } from "../backend/api";
import LoadingSkeleton from "../mycomponents/LoadingSkeleton";
import { Link } from "react-router-dom";

export default function Airport() {
  useEffect(() => {
    getTransfers();
  }, []);
  const getTransfers = async () => {
    try {
      setLoading(true);
      const { data } = await get_airport_transfer();
      console.log(data);
      setTransfers(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  const [transfers, setTransfers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div>
      <h3 className="text-bright">Airport Transfer</h3>
      <hr />
      {!loading ? (
        <div className="pt-3">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {transfers.map((transfer) => (
                <tr>
                  <td>{transfer.name}</td>
                  <td>{transfer.email}</td>
                  <td>{transfer.phone}</td>
                  <td>
                    {" "}
                    <Link
                      className="btn btn-primary"
                      to={`/airport/${transfer.airport_id}`}
                    >
                      View Transfer
                    </Link>{" "}
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
