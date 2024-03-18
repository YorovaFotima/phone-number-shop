import { useEffect, useState } from "react";
import { PhoneDto } from "./types/types";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { Link } from 'react-router-dom'; // Импортируйте Link, если используете react-router-dom
import "./ListNumbers.css";

function ListNumbers() {
  const [phoneNumbers, setPhoneNumbers] = useState<PhoneDto[]>([]);

  useEffect(() => {
    const existingNumbersJson = localStorage.getItem("phoneNumbers");
    const existingNumbers: PhoneDto[] = existingNumbersJson ? JSON.parse(existingNumbersJson) : [];
    setPhoneNumbers(existingNumbers);
  }, []);

  const deletePhoneNumber = (id: number) => {
    const updatedPhoneNumbers = phoneNumbers.filter(phone => phone.id !== id);
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
              <Link to="/DetailedInformation" className="edit-button"> {/* Используйте Link для навигации */}
                <FiEye size={20} color="blue" />
              </Link>
              <button className="delete-button" onClick={() => deletePhoneNumber(phone.id)}>
                <FiTrash2 size={20} color="red"/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export { ListNumbers };