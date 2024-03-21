import "./productsPage.css";

import { useEffect, useState } from "react";

function ProductsPage() {
  const [requests, setRequests] = useState([]);

  async function loadLoanRequests() {
    fetch("http://64.227.69.202:7007/requests/")
      .then((res) => res.json())
      .then((json) => setRequests(json.data));
  }

  async function handleAddClick() {
    const newLoanRequest = {
      name: "Erick",
      email: "erick@mail.com",
      amount: 5000,
      currency: "TJS",
      term: 12,
    };

    fetch("http://64.227.69.202:7007/requests/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLoanRequest),
    })
      .then((res) => res.json())
      .then((json) => console.log("Ответ на добавление: ", json));
  }

  useEffect(() => {
    loadLoanRequests();
  }, []);

  return (
    <div>
      <h1>Заявки на кредит</h1>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={loadLoanRequests}
          style={{ padding: "10px", backgroundColor: "green", color: "white" }}
        >
          Обновить список заявок
        </button>
        <button
          onClick={handleAddClick}
          style={{ padding: "10px", backgroundColor: "green", color: "white" }}
        >
          Добавить заявку
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Email</th>
            <th>Сумма</th>
            <th>Валюта</th>
            <th>Срок</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request: any) => (
            <tr key={request.id}>
              <td>{request.name}</td>
              <td>{request.email}</td>
              <td>{request.amount}</td>
              <td>{request.currency}</td>
              <td>{request.term}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { ProductsPage };
