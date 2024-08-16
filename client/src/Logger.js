import React from "react";

const Logger = (props) => {
  const { logger } = props;
  return (
    <div style={styles.container}>
      <h3>Logger</h3>
      <div>
        {logger.map((item, idx) => (
          <p key={idx}>{item}</p>
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

export default Logger;
