import React,{useState} from "react";
import FormContainer from '../FormContainer/FormContainer';
function OverviewCom({expense,income,addTrasaction}) {
    const [showForm,setShowForm]=useState(false);
  return (
    <>
      <h1>Expense Tracker</h1>
      <div className="topSection">
        <p>Balance: {income - expense}</p>
        <button onClick={()=>setShowForm(!showForm)} className={"btn-add"}>{showForm ? 'Cancel' : 'Add'}</button>
      </div>
      {showForm && <FormContainer addTrasaction={addTrasaction}/>}
      <div className={"resultSection"}>
        <div className={"div-data"}>
          <p>Expense : {expense}</p>
        </div>
        <div className={"div-data"}>
          <p>Income : {income}</p>
        </div>
      </div>
    </>
  );
}

export default OverviewCom;
