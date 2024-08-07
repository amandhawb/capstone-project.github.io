import config from "./config.js";
const { cellWidth, arrowHeight } = config;

export function drawArrow(ctx, color, idx) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(idx * cellWidth + cellWidth / 2, 0);
  ctx.lineTo(idx * cellWidth + cellWidth / 2, arrowHeight);
  ctx.lineTo(idx * cellWidth + cellWidth / 2 - 5, arrowHeight - 5);
  ctx.moveTo(idx * cellWidth + cellWidth / 2, arrowHeight);
  ctx.lineTo(idx * cellWidth + cellWidth / 2 + 5, arrowHeight - 5);
  ctx.stroke();
}
