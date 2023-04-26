import React from "react";

import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      Patryk Biegański
      <span className="text-sm"> Frontend Developer</span>
    </Link>
  );
}
