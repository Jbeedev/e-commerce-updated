import React from "react";
import { Link } from "react-router-dom"
import "./ComingSoon.css";

export default function ComingSoon() {
  return (
    <div>
      <div class="Coming-soon-bg">
        <div class="middle">
          <hr />
          <p className="small">Please click the link below to visit the Portal</p>
          <Link class="portal-link" to='/tenpluslabs-portal'>Go to Portal Page</Link>
          <hr className="mt-3"/>
        </div>
      </div>
    </div>
  );
}
