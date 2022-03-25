import React from "react";
import { Link } from "react-router-dom"
import "./ComingSoon.css";

export default function ComingSoon() {
  return (
    <div>
      <div class="Coming-soon-bg">
        <div class="middle">
          <h1>COMING SOON</h1>
          <hr />
          <p>The Training App is under construction </p>
          <p>Please click the link below to take you to the portal page</p>
          <Link class="portal-link" to='/tenpluslabs-portal'>Go to Portal Page</Link>
        </div>
      </div>
    </div>
  );
}
