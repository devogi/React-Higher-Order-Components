import React from "react";
import { Link } from "react-router-dom";

export default function Contacts() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Contacts</h2>
      <ul>
        <li>Phone number: +1 99999 88888</li>
        <li>Email: john.doe@mail.com</li>
        <Link to="">Back</Link>
      </ul>
    </main>
  );
}
