import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useLayoutEffect,
} from "react";
import "../styles/index.css";

import { AppContext } from "../Context/Context";
import axios from "axios";
import { monthsonly } from "../Data/dataforComponents";

const Statics = () => {
  const Images = {
    Stat: "https://cdn-icons-png.flaticon.com/512/10496/10496611.png",
    SoldImage: "https://cdn-icons-png.flaticon.com/512/289/289725.png",
    NotSold: "https://cdn-icons-png.flaticon.com/512/12610/12610593.png",
    Sales: "https://cdn-icons-png.flaticon.com/512/7298/7298311.png",
  };
  const { month } = useContext(AppContext);
  const [StatisticsData, setStatisticsData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTransactions = useCallback(async (selectedMonth) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8000/api/Statistics?month=${selectedMonth}`
      );

      const data = response.data;

      setStatisticsData(data);

      setLoading(false);
    } catch (err) {
      console.log("Error: ", err);
      setError("Failed to fetch transactions");
      setLoading(false);
    }
  }, []);

  useLayoutEffect(() => {
    fetchTransactions(month);
  }, [month, fetchTransactions]);

  return (
    <div>
      {loading ? (
        <p className="loading-indicator">Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="Statistics-conatiner">
          <div className="statistics-card">
            <img className="stat-img" src={Images.Stat} />
            <div className="stat-info">
              <h2>{monthsonly[month - 1]}</h2>
              <h5>Statistics of this Month</h5>
            </div>
          </div>
          <div className="statistics-card">
            <img className="stat-img" src={Images.Sales} />
            <div className="stat-info">
              <h2>₹{Math.round(StatisticsData.SaleAmount)}</h2>
              <h5>Total Sales Revenue</h5>
            </div>
          </div>
          <div className="statistics-card">
            <img className="stat-img" src={Images.SoldImage} />
            <div className="stat-info">
              <h2>{StatisticsData.SoldItems}</h2>
              <h5>Sold Items</h5>
            </div>
          </div>
          <div className="statistics-card">
            <img className="stat-img" src={Images.NotSold} />
            <div className="stat-info">
              <h2>{StatisticsData.NotSoldItems}</h2>
              <h5>Not Sold Items</h5>
            </div>
          </div>
        </div>
      )}
      <div id="html-dist"></div>
    </div>
  );
};

export default Statics;
