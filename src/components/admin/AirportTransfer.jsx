import React, { useEffect, useState } from "react";
import { get_airport_transfer_id, get_message_id } from "../backend/api";
import { useParams } from "react-router-dom";
import LoadingSkeleton from "../mycomponents/LoadingSkeleton";

export default function AirportTransfer() {
  const { id } = useParams();
  useEffect(() => {
    getTransfer();
  }, []);
  const getTransfer = async () => {
    try {
      setLoading(true);
      const { data } = await get_airport_transfer_id(id);
      console.log(data);
      setTransfer(data[0]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  const [transfer, setTransfer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div>
      <h3 className="text-bright">Airport Transfer</h3>
      <hr />
      {!loading ? (
        <div>
          <h4 className="text-center py-3 fw-bold">Personal Info</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{transfer?.name}</td>
                <td>{transfer?.email}</td>
                <td>{transfer?.phone}</td>
              </tr>
            </tbody>
          </table>
          <h4 className="text-center py-3 fw-bold">Flight Details</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Arrival port</th>
                <th>Depart port</th>
                <th>Flight arrival number</th>
                <th>Flight depart number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{transfer?.arrival_port}</td>
                <td>{transfer?.depart_port}</td>
                <td>{transfer?.flight_arrival_number}</td>
                <td>{transfer?.flight_depart_number}</td>
              </tr>
            </tbody>
          </table>
          <h4 className="text-center py-3 fw-bold">Pick up Details</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Number of people</th>
                <th>Pick Up Option</th>
                <th>Special Needs</th>
                <th>One way/ return transfer</th>
                <th>Vehicle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{transfer?.pass}</td>
                <td>{transfer?.pick_up}</td>
                <td>{transfer?.special_needs}</td>
                <td>{transfer?.one_way}</td>
                <td>{transfer?.vehicle}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <LoadingSkeleton />
      )}
    </div>
  );
}
