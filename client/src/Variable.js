import React from "react";

const Variable = (props) => {
  const { name, value } = props;
  let formatedValue = "";
  if (Array.isArray(value)) {
    formatedValue = "[" + value.join(", ") + "]";
  } else {
    formatedValue = value;
  }
  return (
    <p>
      {name}: {formatedValue}
    </p>
  );
};

export default Variable;
