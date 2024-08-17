import config from "./config.js";

const { cellWidth, cellHeight, arrowHeight, padding } = config;

export function drawArray(ctx, array, target) {
  array.forEach((value, index) => {
    ctx.strokeStyle = "black";

    // Draw the array cells

    // draws a cell
    // ctx.strokeRect(initialPosX, initialPosY, height, width,)
    ctx.strokeRect(
      index * cellWidth,
      arrowHeight + padding,
      cellWidth,
      cellHeight,
    );

    // write the arra[index] context
    // ctx.fillText(text, posX, posY)
    // I do add cellWidth/2 to centralize the text horizontally
    // a similar code is also done to centralize the text vertically
    ctx.fillText(
      value,
      index * cellWidth + cellWidth / 2,
      arrowHeight + padding + cellHeight / 2,
    );

    ctx.fillText(
      index.toString(),
      index * cellWidth + cellWidth / 2, // cell horizontal center
      arrowHeight + cellHeight + padding*4,
    );

    // draw a small rectangle to highlight the target
    if (value === target) {
      ctx.strokeStyle = "red";

      ctx.strokeRect(
        index * cellWidth + cellWidth / 4,
        arrowHeight + padding + cellHeight / 4,
        35,
        30,
      );
    }
  });
}
