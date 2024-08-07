import React, { useRef, useEffect } from "react";
import { drawArray } from "./drawer/array";
import { drawArrow } from "./drawer/arrow";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  const draw = (canvas, ctx, frameCount, variables) => {
    if (variables.length === 0) {
      return;
    }

    let array = null;
    let idxs = [];

    variables.forEach((item) => {
      if (item.name === "array") {
        array = item.value;
      } else if (["i", "l", "m", "r"].includes(item.name)) {
        idxs.push(item.value);
      }
    });

    if (array === null) return;
    if (array.length > 10) return;

    // clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw the whole array
    drawArray(ctx, array);

    // draw the arrows
    idxs.forEach((idx) => {
      console.log(idx);
      drawArrow(ctx, "black", idx);
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    //Our draw came here
    const render = () => {
      frameCount++;
      draw(canvas, context, frameCount, props.variables);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return (
    <div style={styles.canvas}>
      <canvas ref={canvasRef} />
    </div>
  );
};

const styles = {
  canvas: {
    padding: "20px",
    margin: "20px",
    border: "1px solid grey",
    backgroundColor: "#FFFFFF",
  },
};

export default Canvas;
