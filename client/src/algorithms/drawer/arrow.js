import config from "./config.js";
const { cellWidth, arrowHeight } = config;

const padding = 10;
const color = {
  i: "red",
  left: "black",
  middle: "blue",
  right: "green",
};

export function drawArrow(ctx, idx, name) {
  ctx.strokeStyle = color[name];

  // draw the arrow
  ctx.beginPath();
  ctx.moveTo(idx * cellWidth + cellWidth / 2 - padding, 0);
  ctx.lineTo(idx * cellWidth + cellWidth / 2 - padding, arrowHeight);
  ctx.lineTo(idx * cellWidth + cellWidth / 2 - padding - 5, arrowHeight - 5);
  ctx.moveTo(idx * cellWidth + cellWidth / 2 - padding, arrowHeight);
  ctx.lineTo(idx * cellWidth + cellWidth / 2 - padding + 5, arrowHeight - 5);
  ctx.stroke();

  // draw the text
  ctx.textAlign = "left";

  ctx.fillText(
    `${name}=${idx}`,
    idx * cellWidth + cellWidth / 2,
    arrowHeight - 5,
  );
}
