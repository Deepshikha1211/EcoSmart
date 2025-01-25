import React, { useState } from "react"
import { Trophy, User, Search } from "lucide-react"
import  {useEffect } from "react"; // Add useEffect here

import "../styles/EcoRewards.css"

const RecycleRewards = () => {
  const [filterValues, setFilterValues] = useState({
    type: "",
    points: "",
    status: "",
  });

  const [rewardData, setRewardData] = useState({
    currentBalance: 50.0,
    expiryDate: "Jan 22, 2025",
    metrics: {
      earned: 50.0,
      spent: 0,
      expired: 0,
    },
  });

  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [transactions, setTransactions] = useState([
    { id: 1, type: "earned", points: 10, status: "active", date: "2024-01-15" },
    { id: 2, type: "spent", points: 5, status: "active", date: "2024-01-10" },
    { id: 3, type: "earned", points: 15, status: "pending", date: "2024-01-20" },
    { id: 4, type: "expired", points: 20, status: "expired", date: "2023-12-31" },
  ]);

  const rewardInfo = [
    {
      title: "Earn Points and Tokens",
      description:
        "Gain points for recycling and trading green energy, which can be redeemed for rewards like eco-friendly products, discounts, or exclusive NFTs.",
    },
    {
      title: "Leaderboard Incentives",
      description:
        "Climb the ranks on the leaderboard to win special prizes, bonus tokens, and recognition for your contributions to sustainability.",
    },
    {
      title: "Carbon Offset Contributions",
      description:
        "Use your earned tokens to offset your carbon footprint or contribute to community-based environmental initiatives.",
    },
  ];

  useEffect(() => {
    filterTransactions();
  }, [filterValues, transactions]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filterTransactions = () => {
    let filtered = transactions;

    if (filterValues.type) {
      filtered = filtered.filter(transaction => transaction.type === filterValues.type);
    }

    if (filterValues.points) {
      filtered = filtered.filter(transaction => 
        transaction.points === Number(filterValues.points)
      );
    }

    if (filterValues.status) {
      filtered = filtered.filter(transaction => transaction.status === filterValues.status);
    }

    setFilteredTransactions(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterTransactions();
  };

  const handleMoreInfo = () => {
    alert("Redirecting to detailed reward information page...");
    // In a real app, this would navigate to a detailed rewards page
  };

  return (
    <div className="ecosmart-container">
      <main className="main-content">
        <div className="rewards-container">
          <section className="reward-summary">
            <h2>My Reward</h2>

            <div className="balance-card">
              <div className="trophy-icon">
                <Trophy size={40} color="#FFD700" />
              </div>
              <div className="balance-info">
                <h3>{rewardData.currentBalance.toFixed(2)} Token Points</h3>
                <p>Current Balance</p>
              </div>
            </div>

            <p className="expiry-notice">
              {rewardData.currentBalance} Token points from your balance is expiring on {rewardData.expiryDate}
            </p>

            <div className="metrics-container">
              <div className="metric earned">
                <h4>Total Earned</h4>
                <p>{rewardData.metrics.earned.toFixed(2)}</p>
              </div>
              <div className="metric spent">
                <h4>Total Spent</h4>
                <p>{rewardData.metrics.spent}</p>
              </div>
              <div className="metric expired">
                <h4>Expired</h4>
                <p>{rewardData.metrics.expired}</p>
              </div>
            </div>

            <form className="filter-form" onSubmit={handleSubmit}>
              <div className="filter-group">
                <label>Type</label>
                <select name="type" value={filterValues.type} onChange={handleFilterChange}>
                  <option value="">Select Type</option>
                  <option value="earned">Earned</option>
                  <option value="spent">Spent</option>
                  <option value="expired">Expired</option>
                </select>
              </div>

              <div className="filter-group">
                <label>Points</label>
                <input
                  type="number"
                  name="points"
                  placeholder="Search by Point"
                  value={filterValues.points}
                  onChange={handleFilterChange}
                />
              </div>

              <div className="filter-group">
                <label>Status</label>
                <select name="status" value={filterValues.status} onChange={handleFilterChange}>
                  <option value="">Select Status</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="expired">Expired</option>
                </select>
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>

            <div className="transactions-table">
              <h3>Transactions</h3>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Points</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map(transaction => (
                    <tr key={transaction.id}>
                      <td>{transaction.date}</td>
                      <td>{transaction.type}</td>
                      <td>{transaction.points}</td>
                      <td>{transaction.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <aside className="reward-info">
            <h3>Reward Information</h3>
            <ul>
              {rewardInfo.map((info, index) => (
                <li key={index}>
                  <strong>
                    {index + 1}. {info.title}
                  </strong>
                  <p>{info.description}</p>
                </li>
              ))}
            </ul>
            <button className="info-btn" onClick={handleMoreInfo}>
              Click here for more information
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default RecycleRewards;