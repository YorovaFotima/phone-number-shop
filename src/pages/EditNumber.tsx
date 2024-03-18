import { useState, useEffect, FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './EditNumber.css'; 
import { PhoneDto } from "./types/types";

type PhoneCategory = 'Platinum' | 'Gold' | 'Silver';

function EditNumber() {
  const location = useLocation();
  const navigate = useNavigate();
  const phoneNumberId = location.state?.phoneNumberId;
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [ownerName, setOwnerName] = useState<string>('');
  const [category, setCategory] = useState<PhoneCategory>('Platinum');
  const [description, setDescription] = useState<string>('');

  const [successPopupVisible, setSuccessPopupVisible] = useState<boolean>(false);
  const [failPopupVisible, setFailPopupVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!phoneNumberId) {
      navigate('/');
      return;
    }

    const existingNumbersJson = localStorage.getItem('phoneNumbers');
    const existingNumbers: PhoneDto[] = existingNumbersJson ? JSON.parse(existingNumbersJson) : [];
    const numberToEdit = existingNumbers.find(n => n.id === phoneNumberId);

    if (numberToEdit) {
      setPhoneNumber(numberToEdit.phoneNumber);
      setPrice(numberToEdit.price);
      setOwnerName(numberToEdit.ownerName);
      setDescription(numberToEdit.description);
    }
  }, [phoneNumberId, navigate]);

  const updateNumberInLocalStorage = (updatedPhoneData: PhoneDto) => {
    const existingNumbersJson = localStorage.getItem('phoneNumbers');
    const existingNumbers: PhoneDto[] = existingNumbersJson ? JSON.parse(existingNumbersJson) : [];
    const updatedNumbers = existingNumbers.map(n => n.id === phoneNumberId ? updatedPhoneData : n);
    localStorage.setItem('phoneNumbers', JSON.stringify(updatedNumbers));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (phoneNumber && price && ownerName && category && description) {
      const updatedPhoneData: PhoneDto = {
        id: phoneNumberId, 
        phoneNumber,
        price,
        ownerName,
        category,
        description,
      };

      updateNumberInLocalStorage(updatedPhoneData);
      setSuccessPopupVisible(true);
      setTimeout(() => {
        navigate('/'); 
      }, 3000); 
    } else {
      setFailPopupVisible(true);
      setTimeout(() => {
        setFailPopupVisible(false);
      }, 7000); 
    }
  };

  return (
    <div className="edit-number-container ">
      <h1 className="title">Edit Phone Number</h1>
      <form onSubmit={handleSubmit}>
        <label className="label">Phone Number:</label>
        <input
          type="text"
          className="text-input"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label className="label">Price:</label>
        <input
          type="text"
          className="text-input"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label className="label">Owner Name:</label>
        <input
          type="text"
          className="text-input"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
        />

        <label className="label">Category:</label>
        <select
          className="select-input"
          value={category}
          onChange={(e) => setCategory(e.target.value as PhoneCategory)}
        >
          <option value="Platinum">Platinum</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
        </select>

        <label
       className="label">Description:</label>
       <textarea
         className="textarea-input"
         value={description}
         onChange={(e) => setDescription(e.target.value)}
       />

       <button type="submit" className="button-submit">Update Number</button>
     </form>

     {successPopupVisible && <div className="popup-success">Number successfully updated!</div>}
     {failPopupVisible && <div className="popup-fail">Failed to update number. Please check your inputs.</div>}
   </div>
 );
}

export { EditNumber };