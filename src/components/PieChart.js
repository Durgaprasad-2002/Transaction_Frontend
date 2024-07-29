import React, {
  useState,
  useContext,
  useCallback,
  useLayoutEffect,
} from "react";
import ReactApexChart from "react-apexcharts";
import { AppContext } from "../Context/Context";
import axios from "axios";
import { PieChartOptions } from "../Data/dataforComponents";

const PieChart = () => {
  const { month } = useContext(AppContext);
  const [PieChartData, setPieChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [chartState, setChartState] = useState(PieChartOptions);

  const fetchTransactions = useCallback(async (selectedMonth) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8000/api/PieChart?month=${selectedMonth}`
      );

      const data = response.data;
      const keys = Object.keys(data);
      const values = Object.values(data);

      setPieChartData(data);

      setChartState((prev) => ({
        ...prev,
        series: values,
        options: {
          ...prev.options,
          labels: keys,
        },
      }));

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
        <div id="chart">
          <ReactApexChart
            options={chartState.options}
            series={chartState.series}
            type="polarArea"
            height={380}
          />
        </div>
      )}
      <div id="html-dist"></div>
    </div>
  );
};

export default PieChart;
