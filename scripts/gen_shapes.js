function createCircle(cx, cy, r, fill, opacity) {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", cx);
  circle.setAttribute("cy", cy);
  circle.setAttribute("r", r);
  circle.setAttribute("fill", fill);
  circle.setAttribute("opacity", opacity);
  return circle;
}

function createRectangle(x, y, width, height, fill, opacity) {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  rect.setAttribute("width", width);
  rect.setAttribute("height", height);
  rect.setAttribute("rx", "2");
  rect.setAttribute("fill", fill);
  rect.setAttribute("opacity", opacity);
  return rect;
}

function createTriangle(cx, cy, size, fill, opacity) {
  const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  const x1 = cx;
  const y1 = cy - size;
  const x2 = cx - size * 0.866;
  const y2 = cy + size * 0.5;
  const x3 = cx + size * 0.866;
  const y3 = cy + size * 0.5;
  polygon.setAttribute("points", `${x1},${y1} ${x2},${y2} ${x3},${y3}`);
  polygon.setAttribute("fill", fill);
  polygon.setAttribute("opacity", opacity);
  return polygon;
}

function generateShapes() {
  const svg = document.querySelector(".background-shapes");
  if (!svg) return;

  const shapeCount = 8;

  for (let i = 0; i < shapeCount; i++) {
    const x = Math.random() * 120 - 10;
    const y = Math.random() * 90 + 5;

    // Green palette: HSL hue 120-150 (green range)
    const hue = 120 + Math.random() * 30;
    const saturation = 40 + Math.random() * 30;
    const lightness = 40 + Math.random() * 25;
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    const opacity = 0.08 + Math.random() * 0.14;
    const shapeType = Math.random();

    let shape;
    if (shapeType < 0.33) {
      const r = 2 + Math.random() * 6;
      shape = createCircle(x, y, r, color, opacity);
    } else if (shapeType < 0.66) {
      const w = 3 + Math.random() * 8;
      const h = 3 + Math.random() * 8;
      shape = createRectangle(x, y, w, h, color, opacity);
    } else {
      const size = 2 + Math.random() * 5;
      shape = createTriangle(x, y, size, color, opacity);
    }

    svg.appendChild(shape);
  }
}
