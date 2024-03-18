import { useEffect, useState } from "react";
import { PhoneDto } from "./types/types";
import { FiEye, FiTrash2 } from "react-icons/fi";
import "./ListNumbers.css"; 

function ListNumbers() {
  const [phoneNumbers, setPhoneNumbers] = useState<PhoneDto[]>([]);

  useEffect(() => {
    const existingNumbersJson = localStorage.getItem("phoneNumbers");
    const existingNumbers: PhoneDto[] = existingNumbersJson
      ? JSON.parse(existingNumbersJson)
      : [];
    setPhoneNumbers(existingNumbers);
  }, []);

  return (
    <div className="phone-numbers-container">
      <h2>Список всех номеров</h2>
      <div className="phone-numbers-list">
        {phoneNumbers.map((phone) => (
          <div className={`phone-card ${phone.category.toLowerCase()}`} key={phone.id}>
            <span className="phone-category-badge">{phone.category}</span>
            <div className="phone-number">{phone.phoneNumber}</div>
            <div className="phone-controls">
              <div className="phone-price">{phone.price}</div>
              <button className="edit-button">
                <FiEye size={20} />
              </button>
              <button className="delete-button">
                <FiTrash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export {ListNumbers}