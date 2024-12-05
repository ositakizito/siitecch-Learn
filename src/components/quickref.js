import React from "react";
import { FaCableCar } from "react-icons/fa6";

export default function Quickref() {
  const openInNewTab = () => {
    const url = "https://quickref.me"; // Replace with your desired URL
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      {/* Floating Button */}
      <button className="float-button quick" onClick={openInNewTab}>
        <FaCableCar />
      </button>
    </div>
  );
}
