const carousel = document.getElementById("carousel");
const items = document.querySelectorAll(".carousel-item");
const itemCount = items.length;
const radius = 500;
let angle = 0;

// Position all items in a circular layout
items.forEach((item, i) => {
  const theta = (360 / itemCount) * i;
  const transform = `rotateY(${theta}deg) translateZ(${radius}px)`;
  item.style.transform = transform;
});

// Make carousel draggable
let startX = 0;
let currentAngle = 0;

Draggable.create(carousel, {
  type: "x",
  inertia: true,
  onDrag: function () {
    const delta = this.x - startX;
    angle = currentAngle + delta * 0.3;
    carousel.style.transform = `translateZ(-300px) rotateY(${angle}deg)`;
  },
  onDragEnd: function () {
    currentAngle = angle;
  }
});
