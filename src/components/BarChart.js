import React, { useState, useEffect, useContext } from "react";
import ReactApexChart from "react-apexcharts";
import { AppContext } from "../Context/Context";
import { BarChartOptions } from "../Data/dataforComponents";
import axios from "axios";

export default function BarChart() {
  const { month } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  const [chartState, setChartState] = useState(BarChartOptions);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8000/api/BarChart?month=${month}`
        );
        const data = response.data;

        const Values = Object.values(data);

        setChartState((prev) => ({
          ...prev,
          series: [
            {
              data: [...Values],
            },
          ],
        }));
      } catch (error) {
        console.error("Error fetching bar chart data", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [month]);

  return (
    <div>
      {loading ? (
        <p className="loading-indicator">Loading...</p>
      ) : (
        <div id="chart">
          <ReactApexChart
            options={chartState.options}
            series={chartState.series}
            type="bar"
            height={350}
          />
        </div>
      )}
      <div id="html-dist"></div>
    </div>
  );
}
