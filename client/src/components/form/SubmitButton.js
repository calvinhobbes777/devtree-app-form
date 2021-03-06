import React from "react";

const SubmitButton = props => {
  return (
    <button style={styles} type={"submit"}>
      {props.label || "Submit"}
    </button>
  );
};

export default SubmitButton;

const styles = {
  outline: 0,
  color: "white",
  padding: "10px",
  margin: "5px 0px",
  border: "1px solid #fff",
  backgroundColor: "rgba(0,120,120,.8)",
  fontFamily: "Verdana, Geneva, sans-serif",
  boxShadow: "0px 0px 5px 2px rgb(240, 240, 240)"
};
