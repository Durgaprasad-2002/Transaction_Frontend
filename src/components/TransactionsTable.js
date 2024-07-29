import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from "react";

import "../styles/index.css";
import { AppContext } from "../Context/Context";
import axios from "axios";
import debounce from "lodash.debounce";
import TransactionCard from "./TransactionCard";

const TransactionsTable = ({ search }) => {
  const { month } = useContext(AppContext);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setpage] = useState(0);

  const fetchTransactions = useCallback(async (searchTerm, selectedMonth) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8000/api/ListAllProducts?month=${selectedMonth}&search=${searchTerm}`
      );
      setTransactions(response.data.products);
      setpage(response.data.Pages);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch transactions");
      setLoading(false);
    }
  }, []);

  const debouncedFetchTransactions = useMemo(
    () => debounce(fetchTransactions, 300),
    [fetchTransactions]
  );

  useEffect(() => {
    const trimmedSearch = search?.trim();
    debouncedFetchTransactions(trimmedSearch, month);

    return () => {
      debouncedFetchTransactions.cancel();
    };
  }, [search, month, debouncedFetchTransactions]);

  return (
    <>
      <div className="Transactions-container">
        {loading ? (
          <div className="loading-indicator">Loading...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : transactions.length === 0 ? (
          <div className="no-search">Oops Search Not Found!</div>
        ) : (
          transactions.map((product, index) => (
            <TransactionCard product={product} key={index} />
          ))
        )}
      </div>
      <div className="Page-number">Page 1 of {page}</div>
    </>
  );
};

export default TransactionsTable;
