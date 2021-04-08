var carNav = {
  direction: 'east'
};

var $car = document.querySelector('#car');
document.addEventListener('keydown', keyEvent);

function keyEvent(event) {
  if (event.keyCode === 37) {
    $car.className = 'rotate-180-left';
    carNav.direction = 'west';
  } else if (event.keyCode === 38) {
    $car.className = 'rotate-90-left';
    carNav.direction = 'north';
  } else if (event.keyCode === 39) {
    $car.className = '';
    carNav.direction = 'east';
  } else if (event.keyCode === 40) {
    $car.className = 'rotate-90-right';
    carNav.direction = 'south';
  }

}
