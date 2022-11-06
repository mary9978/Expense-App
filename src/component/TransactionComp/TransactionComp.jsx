import React from "react";

function TransactionComp({ transactions, setTransactions }) {
  console.log(transactions);
  return (
    <div>
      <h1>transactions</h1>
      {transactions.map((item) => {
        return (
          <div key={item.id}>
            <p>Type: {item.type}</p>
            <p>Amount : {item.amount}</p>
            <p>Descriptions : {item.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TransactionComp;
