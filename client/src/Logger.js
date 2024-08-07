import React from "react";

const Logger = (props) => {
  const { logger } = props;
  return (
    <div style={styles.container}>
      Logger
      <div>
        {logger.map((item) => (
          <p>{item}</p>
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
