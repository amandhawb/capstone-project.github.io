import React from "react";

const Variable = (props) => {
  const { name, value, maxSize = null } = props;

  let formatedValue = "";
  if (value === undefined) {
    formatedValue = "not defined yet";
  } else if (Array.isArray(value)) {
    const newValue = value.slice(0, maxSize != null ? maxSize : value.length);
    const suffix = newValue.length < value.length ? "..." : "";
    formatedValue = "[" + newValue.join(", ") + suffix + "]";
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
