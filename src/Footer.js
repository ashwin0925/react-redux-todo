import React from "react";
import { connect } from "react-redux";
import { changeTabAction } from "./store/action";
import "./style.css";


const Footer = (props) => {
  function handleActiveTab(tab) {
    props.dispatch(changeTabAction(tab));
  }
  return (
    <div className="buttons">
      <button
        className={props.activeTab === "all" ? "active" : ""}
        onClick={() => handleActiveTab("all")}
      >
        All
      </button>
      <button
        className={props.activeTab === "completed" ? "active" : ""}
        onClick={() => handleActiveTab("completed")}
      >
        Completed
      </button>
      <button
        className={props.activeTab === "active" ? "active" : ""}
        onClick={() => handleActiveTab("active")}
      >
        Active
      </button>
      <button
        className={props.activeTab === "clear" ? "active" : ""}
        onClick={() => handleActiveTab("clear")}
      >
        Clear Completed
      </button>
    </div>
  );
};
function mapState(state) {
  return { activeTab: state.activeTab };
}

export default connect(mapState)(Footer);
