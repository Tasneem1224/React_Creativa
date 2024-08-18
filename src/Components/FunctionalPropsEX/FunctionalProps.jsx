import React from "react";

const FunctionalProps = ({ fname, lname, age, phone, children }) => {
  return (
    <div>
      <h3>
        First Name: {fname}
        <br />
        Last Name: {lname} <br />
        Age: {age} <br />
        Phone: {phone}
      </h3>
      <div>{children}</div>
    </div>
  );
};

export default FunctionalProps;
