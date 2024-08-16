import React from "react";
import Variable from "./Variable";

const LocalVariables = (props) => {
  const { variables } = props;
  return (
    <div style={styles.container}>
      <h3>Local Variables</h3>
      <div>
        {variables.map(([name, value]) => (
          <Variable key={name} name={name} value={value} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    margin: "20px 0",
    backgroundColor: "#FFEEEE",
  },
};

export default LocalVariables;
