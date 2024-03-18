import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { PhoneDto } from "./types/types";
import "./DetailedInformation.css";

function DetailedInformation() {
  const [phoneDetails, setPhoneDetails] = useState<PhoneDto | null>(null);
  const navigate = useNavigate();

  useEffect(() => {  const currentPhoneId = JSON.parse(localStorage.getItem("currentPhoneId") || "null");
  const phoneNumbers = JSON.parse(localStorage.getItem("phoneNumbers") || "[]");
  
  const phoneDetail = phoneNumbers.find((phone: PhoneDto) => phone.id === currentPhoneId);
  if (phoneDetail) {
    setPhoneDetails(phoneDetail);
  } else {
    navigate('/');
  }
}, [navigate]);

if (!phoneDetails) {
  return <div>Loading...</div>;
  }

  const handleEditClick = () => {
    navigate(`/edit-number`, { state: { phoneNumberId: phoneDetails.id } });
  };

  return (
    <div className="main_container">
      <h2>Phone Number Details</h2>
      <span>Number: {phoneDetails.phoneNumber}</span>
      <span>Price: {phoneDetails.price}</span>
      <span>Owner: {phoneDetails.ownerName}</span>
      <span>Category: {phoneDetails.category}</span>
      <span>Description: {phoneDetails.description}</span>
      <button className="edit-button" onClick={handleEditClick}>Edit</button>
    </div>
  );
}
export { DetailedInformation };
