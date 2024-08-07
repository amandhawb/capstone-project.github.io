import config from "./config.js";

const { cellWidth, cellHeight, arrowHeight } = config;

export function drawArray(ctx, array) {
  // Draw the array cells
  ctx.strokeStyle = "black";
  array.forEach((value, index) => {
    // draws a cell
    // ctx.strokeRect(initialPosX, initialPosY, height, width,)
    ctx.strokeRect(index * cellWidth, arrowHeight, cellWidth, cellHeight);

    // write the arra[index] context
    // ctx.fillText(text, posX, posY)
    // we do add cellWidth/2 to centralize the text horizontally
    // a similar code is also done to centralize the text vertically
    ctx.fillText(
      value,
      index * cellWidth + cellWidth / 2,
      arrowHeight + cellHeight / 2,
    );
  });
}
