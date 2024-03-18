import { useEffect, useState } from "react";
import { PhoneDto } from "./types/types";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import "./ListNumbers.css";

function ListNumbers() {
  const navigate = useNavigate();
  const [phoneNumbers, setPhoneNumbers] = useState<PhoneDto[]>([]);

  // Fetch phone numbers from localStorage
  useEffect(() => {
    const existingNumbersJson = localStorage.getItem("phoneNumbers");
    const existingNumbers: PhoneDto[] = existingNumbersJson ? JSON.parse(existingNumbersJson) : [];
    setPhoneNumbers(existingNumbers);
  }, []);

  // Function to handle the viewing of phone details
  const viewDetails = (id: number) => {
    localStorage.setItem('currentPhoneId', JSON.stringify(id));
    navigate('/detailed-information');
  };

  // Function to handle phone number deletion
  const deletePhoneNumber = (id: number) => {
    const updatedPhoneNumbers = phoneNumbers.filter((phone) => phone.id !== id);
    setPhoneNumbers(updatedPhoneNumbers);
    localStorage.setItem("phoneNumbers", JSON.stringify(updatedPhoneNumbers));
  };

  return (
    <div className="phone-numbers-container">
      <div className="phone-numbers-list">
        {phoneNumbers.map((phone) => (
          <div className={`phone-card ${phone.category.toLowerCase()}`} key={phone.id}>
            <span className={`phone-category-badge ${phone.category.toLowerCase()}`}>
              {phone.category}
            </span>
            <div className="phone-number">{phone.phoneNumber}</div>
            <div className="phone-controls">
              <div className="phone-price">${phone.price}</div>
              <button className="view-details-button" onClick={() => viewDetails(phone.id)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <FiEye size={20} color="blue" />
              </button>
              <button className="delete-button" onClick={() => deletePhoneNumber(phone.id)}>
                <FiTrash2 size={20} color="red" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { ListNumbers };
