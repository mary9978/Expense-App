import React, { useState } from "react";
import TransactionComp from "../TransactionComp/TransactionComp";
import OverviewCom from "../OverviewCom/OverviewCom";
function ExpenseApp() {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTrasaction = (formValue) => {

    // console.log('fist',{formValue:formValue,transactions:transactions});
    const data = { ...formValue, id: Date.now() };
    // console.log('data',data);
     const t=[...transactions,data];
    setTransactions(t);
    // console.log('transactions',t);
  };

  return (
    <section className={"wrapper"}>
      <OverviewCom
        expense={expense}
        income={income}
        addTrasaction={addTrasaction}
      />
      <TransactionComp
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </section>
  );
}

export default ExpenseApp;
