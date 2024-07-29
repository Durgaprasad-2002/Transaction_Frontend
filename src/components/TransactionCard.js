import React, { useState } from "react";
const TransactionCard = React.memo(({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="Transaction-card">
      <div className="Transaction-card-1">
        <span className="product-category">{product.category}</span>
        <img src={product.image} className="product-image" alt="Product" />
      </div>
      <div className="Transaction-card-2">
        <h4 className="product-title">{product.title}</h4>
        <h3 className="product-price">₹{product.price}/-</h3>
        <p className={`product-description ${isExpanded ? "expanded" : ""}`}>
          {product.description}
        </p>
        <button onClick={toggleExpanded} className="toggle-description">
          {isExpanded ? "Read Less" : "Read More"}
        </button>

        <br />
        {product.sold ? (
          <span className="sold">Sold</span>
        ) : (
          <span className="not-sold">Not Sold</span>
        )}
        {product.sold && (
          <span className="product-date-sale">
            {new Date(product.dateOfSale).toDateString()}
          </span>
        )}
      </div>
    </div>
  );
});

export default TransactionCard;
