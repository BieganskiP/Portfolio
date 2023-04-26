import React from "react";

import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="font-bold text-2xl max-w-[16ch] leading-4">
      Patryk Biegański
      <span className="text-sm"> Frontend Developer</span>
    </Link>
  );
}
