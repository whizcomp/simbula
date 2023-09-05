import React, { useEffect, useState } from "react";
import { get_message_id } from "../backend/api";
import { useParams } from "react-router-dom";
export default function FullMessage() {
  const { id } = useParams();
  useEffect(() => {
    getMessage();
  }, []);
  const getMessage = async () => {
    try {
      setLoading(true);
      const { data } = await get_message_id(id);
      // console.log(data);
      setMessage(data[0]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div className="container">
      <h3 className="text-bright">Message</h3>
      <hr />
      <table className="table">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{message?.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <th>{message?.email}</th>
          </tr>
          <tr>
            <th>Message</th>
            <td>{message?.message}</td>
          </tr>
        </tbody>
      </table>
      <div className="my-3">
        <button className="btn btn-danger">Mark as Read</button>
      </div>
    </div>
  );
}
