import React from "react";
import Variable from "./Variable";

const Variables = (props) => {
  const { variables, title } = props;
  return (
    <div style={styles.container}>
      {title}
      <div>
        {variables.map((item) => (
          <Variable value={item.value} name={item.name} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    margin: "20px",
    backgroundColor: "#FFEEEE",
  },
};

export default Variables;
