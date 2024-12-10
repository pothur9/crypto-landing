import React from "react";

const dashboardData = {
  withdrawnWuf: 224108432.0,
  remainingWuf: 32366564.6889,
  earnings: {
    daily: 3889890.0632,
    monthly: 116699701.8958,
    yearly: 1400360422.7496,
  },
  miners: [
    { qty: 35, wuf: "WUF", type: "Common", hash: "1KWH", total: "35000WH" },
    { qty: 8, wuf: "WUF", type: "Rare", hash: "2KWH", total: "16000WH" },
    { qty: 1, wuf: "WUF", type: "Epic", hash: "3KWH", total: "30000WH" },
    { qty: 6, wuf: "WUF", type: "Genesis", hash: "10KWH", total: "60000WH" },
    { qty: 213, wuf: "WUF", type: "Mini L1", hash: "100KWH", total: "21300WH" },
    { qty: 49, wuf: "WUF", type: "Mini L2", hash: "210KWH", total: "10290WH" },
    { qty: 6, wuf: "WUF", type: "Mini L3", hash: "450KWH", total: "2700WH" },
  ],
  totalMiningPower: "148290WH",
};

const MiningDashboard = () => {
  const { withdrawnWuf, remainingWuf, earnings, miners, totalMiningPower } = dashboardData;

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        color: "#E6E6E6",
        backgroundColor: "#193047",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ color: "#4cafef", fontSize: "2.8rem", fontWeight: "600" }}>
          Mining Dashboard
        </h1>
        <h2 style={{ color: "#FFCC29", fontSize: "1.8rem", marginTop: "10px" }}>
          {withdrawnWuf.toLocaleString()} WUF
        </h2>
      </header>

    {/* Stats Cards */}
    <section
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",  // Use auto-fit to dynamically adjust the grid
    marginBottom: "30px",
    justifyItems: "center",  // Centers items horizontally
    alignItems: "center", 
    gap: "10px",  // Reduce the gap between the grid items
  }}
>
  <div
    style={{
      background: "linear-gradient(135deg, #2B2B3D, #4CAFFE)", // Updated background color
      borderRadius: "10px",
      padding: "18px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      width: "350px", // Reduced width to bring cards closer
    }}
  >
    <h3 style={{ fontSize: "1.1rem", marginBottom: "8px", color: "#FFF" }}>Withdrawn WUF</h3>
    <p style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#FFF" }}>
      {withdrawnWuf.toLocaleString()} WUF
    </p>
  </div>
  <div
    style={{
      background: "linear-gradient(135deg, #00F2FE, #4FACFE)", // Updated background color
      borderRadius: "10px",
      padding: "18px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      width: "350px", // Reduced width to bring cards closer
    }}
  >
    <h3 style={{ fontSize: "1.1rem", marginBottom: "8px", color: "#FFF" }}>Remaining WUF</h3>
    <p style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#FFF" }}>
      {remainingWuf.toLocaleString()} WUF
    </p>
  </div>
</section>


{/* Projected Earnings */}
<section
  style={{
    textAlign: "center",
    marginBottom: "30px",
    padding: "25px",
    backgroundColor: "#021E2E", // Darker background to match the page theme
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
  }}
>
  <h3
    style={{
      fontSize: "1.4rem",
      color: "#6254DC",
      fontWeight: "600",
      marginBottom: "18px",
    }}
  >
    Projected Earnings
  </h3>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "15px",
    }}
  >
    {/* Daily Earnings Text */}
    <div
      style={{
        color: "#FFF",
        padding: "12px",
      }}
    >
      <h4 style={{ fontSize: "1.1rem", marginBottom: "6px" }}>Daily</h4>
      <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
        {earnings.daily.toLocaleString()} WUF
      </p>
    </div>

    {/* Monthly Earnings Text */}
    <div
      style={{
        color: "#FFF",
        padding: "12px",
      }}
    >
      <h4 style={{ fontSize: "1.1rem", marginBottom: "6px" }}>Monthly</h4>
      <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
        {earnings.monthly.toLocaleString()} WUF
      </p>
    </div>

    {/* Yearly Earnings Text */}
    <div
      style={{
        color: "#FFF",
        padding: "12px",
      }}
    >
      <h4 style={{ fontSize: "1.1rem", marginBottom: "6px" }}>Yearly</h4>
      <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
        {earnings.yearly.toLocaleString()} WUF
      </p>
    </div>
  </div>
</section>


      {/* Miners Table */}
      <section>
        <h3 style={{ textAlign: "center", marginBottom: "20px", color: "#4cafef" }}>
          Active Miners & Their Hash Rates
        </h3>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              color: "#E6E6E6",
              backgroundColor: "#0A2239",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#745DB4" }}>
                <th style={{ padding: "15px", textAlign: "center" }}>Qty</th>
                <th style={{ padding: "15px", textAlign: "center" }}>WUF</th>
                <th style={{ padding: "15px", textAlign: "center" }}>Type</th>
                <th style={{ padding: "15px", textAlign: "center" }}>Hash</th>
                <th style={{ padding: "15px", textAlign: "left" }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {miners.map((miner, index) => (
                <tr key={index} style={{ transition: "background-color 0.3s ease" }}>
                  <td style={{ padding: "15px", textAlign: "center" }}>{miner.qty}</td>
                  <td style={{ padding: "10px", textAlign: "center" }}>{miner.wuf}</td>
                  <td style={{ padding: "10px", textAlign: "center" }}>{miner.type}</td>
                  <td style={{ padding: "10px", textAlign: "center" }}>{miner.hash}</td>
                  <td style={{ padding: "10px", textAlign: "center" }}>{miner.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", marginTop: "40px" }}>
        <h3 style={{ fontSize: "1.5rem", color: "#4cafef" }}>Total Mining Power</h3>
        <p style={{ fontSize: "1.8rem", color: "#FFCC29", fontWeight: "bold" , marginTop:"20px"}}>
          {totalMiningPower}
        </p>
      </footer>
    </div>
  );
};

export default MiningDashboard;
