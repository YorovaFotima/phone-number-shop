import  { useState, FormEvent } from 'react';
import './AddNumber.css';

type PhoneCategory = 'Platinum' | 'Gold' | 'Silver';

interface AddPhoneDto {
  id: number;
  phoneNumber: string;
  price: string;
  ownerName: string;
  category: PhoneCategory;
  description: string;
}


function AddNumber() {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [ownerName, setOwnerName] = useState<string>('');
  const [category, setCategory] = useState<PhoneCategory>('Platinum');
  const [description, setDescription] = useState<string>('');

  const [successPopupVisible, setSuccessPopupVisible] = useState<boolean>(false);
  const [failPopupVisible, setFailPopupVisible] = useState<boolean>(false);

  const saveNumberToLocalStorage = (phoneData: AddPhoneDto) => {
    const existingNumbersJson = localStorage.getItem('phoneNumbers');
    const existingNumbers: AddPhoneDto[] = existingNumbersJson ? JSON.parse(existingNumbersJson) : [];
    const updatedNumbers = [...existingNumbers, phoneData];
    localStorage.setItem('phoneNumbers', JSON.stringify(updatedNumbers));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (phoneNumber && price && ownerName && category && description) {
      const newPhoneData: AddPhoneDto = {
        id: Date.now(),
        phoneNumber,
        price,
        ownerName,
        category,
        description,
      };

      saveNumberToLocalStorage(newPhoneData);
      setSuccessPopupVisible(true);

      setPhoneNumber('');
      setPrice('');
      setOwnerName('');
      setCategory('Platinum');
      setDescription('');

      setTimeout(() => {
        setSuccessPopupVisible(false);
      }, 7000);
    } else {
      setFailPopupVisible(true);
      setTimeout(() => {
        setFailPopupVisible(false);
      }, 7000);
    }
  };

  return (
    <div className="add-number-container">
      <h1 className="title">Add Phone Number</h1>
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

        <label className="label">Description:</label>
        <textarea
          className="textarea-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" className="button-submit">Add Number</button>
      </form>

      {successPopupVisible && <div className="popup-success">Number successfully added!</div>}
      {failPopupVisible && <div className="popup-fail">Failed to add number. Please check your inputs.</div>}
    </div>
  );
}

export { AddNumber };
