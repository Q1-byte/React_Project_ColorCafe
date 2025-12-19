import React from "react";

const Title = () => {
  let csst1 = {
    marginTop: "90px",
    marginBottom: "40px",
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    letterSpacing: "1.8px",
    color: "#b49264"
  };
  return (
    <>
      <h3 style={csst1}>Find Your Color, Find Your Cafe</h3>
      <p style={{ textAlign: "center", color: "#b49264", fontSize: "1.2rem", marginTop: "-12px", marginBottom: "30px"}}>
        “ Let your mood choose the color ”
      </p>
    </>
  );
};

export default Title;