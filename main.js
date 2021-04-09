var carNav = {
  direction: 'east',
  x: 0,
  y: 0,
  isStarted: false
};
var $car = document.querySelector('#car');
var intervalId = null;
window.addEventListener('keydown', keyEvent);

function drive() {
  var moving = null;
  if (carNav.direction === 'east') {
    carNav.x += 10;
    moving = carNav.x + 'px';
    $car.style.left = moving;
  }
  if (carNav.direction === 'west') {
    carNav.x -= 10;
    moving = carNav.x + 'px';
    $car.style.left = moving;
  }
  if (carNav.direction === 'north') {
    carNav.y -= 10;
    moving = carNav.y + 'px';
    $car.style.top = moving;
  }
  if (carNav.direction === 'south') {
    carNav.y += 10;
    moving = carNav.y + 'px';
    $car.style.top = moving;
  }
}

function keyEvent(event) {
  if (event.keyCode === 37) {
    $car.className = 'left';
    carNav.direction = 'west';
  } else if (event.keyCode === 38) {
    $car.className = 'up';
    carNav.direction = 'north';
  } else if (event.keyCode === 39) {
    $car.className = '';
    carNav.direction = 'east';
  } else if (event.keyCode === 40) {
    $car.className = 'down';
    carNav.direction = 'south';
  } else if (event.keyCode === 32) {
    if (carNav.isStarted === false) {
      intervalId = setInterval(drive, 16);
      carNav.isStarted = true;
    } else {
      clearInterval(intervalId);
      carNav.isStarted = false;
    }
  }
}
