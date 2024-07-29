import React, { useState } from "react";
import MonthSelection from "./MonthSelection";
import SearchInput from "./SearchInput";
import TransactionsTable from "./TransactionsTable";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import Statistics from "./Statistics";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const HandleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="header">
        <h2>Transactions Dashboard</h2>
      </div>
      <div className="month-select-conatiner">
        <SearchInput searchTerm={searchTerm} HandleSearch={HandleSearch} />
        <MonthSelection />
      </div>
      <div>
        <TransactionsTable search={searchTerm} />
      </div>
      <div className="ContainerOfStatistics">
        <Statistics />
        <div className="ContainerOfCharts">
          <div className="charts-Conatiner">
            <h3 className="head-line">Product Categories</h3>
            <PieChart />
          </div>

          <div className="charts-Conatiner">
            <h3 className="head-line">Products In Prices</h3>
            <BarChart />
          </div>
        </div>
      </div>
    </>
  );
}
