var carNav = {
  direction: 'east'
};

var $car = document.querySelector('#car');
window.addEventListener('keydown', keyEvent);

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
  }
}
