import React, { useEffect, useState } from "react";
import { get_messages } from "../backend/api";
import { Link } from "react-router-dom";

export default function Messages() {
  useEffect(() => {
    getMessage();
  }, []);
  const getMessage = async () => {
    try {
      setLoading(true);
      const { data } = await get_messages();
      setMessages(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div>
      <h1 className="fs-1">Messages</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr>
              <td>{message.name}</td>
              <td>{message.email}</td>
              <td>
                <p className="text-truncate" style={{ width: "100px" }}>
                  {message.message}
                </p>
              </td>
              <td>
                {" "}
                <Link
                  to={`/message/${message.message_id}`}
                  className="btn btn-primary"
                >
                  Read
                </Link>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
