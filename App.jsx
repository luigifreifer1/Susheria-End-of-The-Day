import { useState } from "react";

export default function App() {
  const [data, setData] = useState({
    date: "",
    byWho: "",
    sales: 0,
    kaslikSales: 0,
    miziaraSales: 0,
    kaslikOpening: 0,
    miziaraOpening: 0,
    kaslikExpenses: 0,
    miziaraExpenses: 0,
    kaslikUnpaid: 0,
    miziaraUnpaid: 0,
    toters: 0,
    omega: 0,
    tips: 0,
    luigi: 0,
    kaslikSurplus: 0,
    miziaraSurplus: 0,
    wishMoney: 0,
    wishExpenses: 0,
    omtMoney: 0,
    omtExpenses: 0,
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: name === "remarks" ? value : parseFloat(value) || 0 });
  };

  const calculateTotals = () => {
    const totalExpenses = data.kaslikExpenses + data.miziaraExpenses;
    const totalUnpaid = data.kaslikUnpaid + data.miziaraUnpaid;
    const totalSurplus = data.kaslikSurplus + data.miziaraSurplus;
    const totalInWish = data.wishMoney - data.wishExpenses;
    const totalInOMT = data.omtMoney - data.omtExpenses;
    const totalInBoxes = data.kaslikSurplus + data.miziaraSurplus + totalInWish + totalInOMT;

    return {
      totalExpenses,
      totalUnpaid,
      totalSurplus,
      totalInWish,
      totalInOMT,
      totalInBoxes,
    };
  };

  const handleSubmit = () => {
    const totals = calculateTotals();
    alert("Report submitted!\n" + JSON.stringify(totals, null, 2));
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
      <h1>Susheria End of Day Report</h1>
      {Object.entries(data).map(([key, value]) => (
        key !== "remarks" ? (
          <div key={key}>
            <label>{key}</label>
            <input
              name={key}
              type="number"
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
            />
          </div>
        ) : (
          <div key={key}>
            <label>{key}</label>
            <textarea
              name={key}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
            />
          </div>
        )
      ))}
      <button onClick={handleSubmit} style={{ padding: "0.75rem", width: "100%" }}>
        Submit Report
      </button>
    </div>
  );
}