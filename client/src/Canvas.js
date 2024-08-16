import React, { useRef, useEffect } from "react";
import { drawArray } from "./drawer/array";
import { drawArrow } from "./drawer/arrow";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  const draw = (canvas, ctx, variables) => {
    if (variables.length === 0) {
      return;
    }

    let array = null;
    let target = null;

    let idxs = [];
    variables.forEach(([name, value]) => {
      if (name === "array") {
        array = value;
      } else if (name === "target") {
        target = value;
      } else if (
        ["i", "left", "middle", "right"].includes(name) &&
        value != undefined
      ) {
        idxs.push({ idx: value, name });
      }
    });

    if (array === null) return;
    if (array.length > 10) return;

    // clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = "14px sans-serif";
    ctx.letterSpacing = "1px";
    ctx.textAlign = "center";

    // draw the whole array
    drawArray(ctx, array, target);

    // draw the arrows
    idxs.forEach(({ idx, name }) => {
      drawArrow(ctx, idx, name);
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let animationFrameId;

    //Our draw came here
    const render = () => {
      draw(canvas, context, props.variables);
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [props.variables]);

  return (
    <div style={styles.canvas}>
      <canvas ref={canvasRef} width="715" height="100" />
    </div>
  );
};

const styles = {
  canvas: {
    padding: "20px",
    margin: "20px 0",
    border: "1px solid grey",
    backgroundColor: "#FFFFFF",
  },
};

export default Canvas;
