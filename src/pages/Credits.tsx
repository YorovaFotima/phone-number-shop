import "./productsPage.css";

import { useEffect, useState } from "react";

function CreditsPage() {
  const [credits, setCredits] = useState([]);

  // const userId = "5faf6bee-6a29-47f2-a3d3-6aa019e99f98";
  const userId = "b1631bfe-6698-4104-9a47-cf2c25e61575";
  
  async function loadCredits() {
    fetch("http://64.227.69.202:7007/credits/", {
      headers: {
        // для клиента
        // authorization: `user_${userId}`,
        // для админа
        authorization: "admin",
      },
    })
      .then((res) => res.json())
      .then((json) => setCredits(json.data));
  }

  useEffect(() => {
    loadCredits();
  }, []);

  async function handleAddTransaction(creditId: string) {
    const amount = 100;

    fetch(`http://64.227.69.202:7007/credits/${creditId}/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log("Ответ на добавление транзакции: ", json));
  }

  return (
    <div>
      <h1>Кредиты</h1>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={loadCredits}
          style={{ padding: "10px", backgroundColor: "green", color: "white" }}
        >
          Обновить список кредитов
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Сумма кредита</th>
            <th>Валюта</th>
            <th>Срок кредита</th>
            <th>Статус</th>
            <th>Остаток</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {credits.map((credit: any) => (
            <tr key={credit.id}>
              <td>{credit.amount}</td>
              <td>{credit.currency}</td>
              <td>{credit.term}</td>
              <td>{credit.status}</td>
              <td>{credit.balanceAmount}</td>
              <td>
                <button onClick={() => handleAddTransaction(credit.id)}>
                  Добавить платеж
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { CreditsPage };
