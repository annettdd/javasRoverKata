// Rover object goes here:
let roverGrid = [
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
];
const rover = {
  direction: 'N',
  x:0,
  y:0,
  travelLog: [{x: 0, y: 0}],
};
                             
// command function
function command(theRover, moveAllds){
for ( let i = 0; i < moveAllds.length; i++) {
  let moveAlld = moveAllds[i];
    switch(moveAlld) {
      case 'l': turnLeft(theRover, moveAlld);
          break;
      case 'r': turnRight(theRover, moveAlld);
          break;
      case 'u': moveUpDown(theRover, moveAlld);
          break;
      case 'd': moveUpDown(theRover, moveAlld);
          break;  
      case 'n': moveLeftRight(theRover, moveAlld);
          break;  
      case 'p': moveLeftRight(theRover, moveAlld);
          break;  
  }
  }
}
command(rover, 'dppppnnud');

function roverPosition(rover) {
 roverGrid[rover.x][rover.y] = 'R'; 
 roverGrid[rover.x][rover.y] != ' ';
  /*if (roverGrid[rover.x][rover.y] === 'O') {
   rover.x++;
 console.log(`there is an obstakle`)
 }*/
 
console.log(roverGrid.join('\n')); 
}
roverPosition(rover);
// rover goes only left on y axe
function moveLeftRight(theRover, move) {
  if (theRover.y >= 0 && theRover.y < 10) {
    if (move === 'n') {
    theRover.y--;
  }
    if (move === 'p') {
    theRover.y++;
  }
  console.log('the function moveLeftRight was called!');
  console.log(`Rover has position x=${theRover.x}, y=${theRover.y}`);
let newPosition = { 
  x: theRover.x, 
  y: theRover.y 
};

for (let i = 0; i < rover.travelLog.length; i++) {
console.log(`travelLog ${i} --- x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`);
}   
theRover.travelLog.push(newPosition);
 } else {
  console.log(`Rover can not go out of y axe`);
  }
}
// rover goes only up on x axe
function moveUpDown(theRover, move) {
  if (theRover.x >= 0 && theRover.x < 10) {
  if (move === 'u') {
    theRover.x--;
    }
  if (move === 'd') {
    theRover.x++;
}
 console.log('the function moveUpDown was called!');
 console.log(`Rover has position x=${theRover.x}, y=${theRover.y}`);
let newPosition = { 
  x: theRover.x, 
  y: theRover.y 
};
for (let i = 0; i < rover.travelLog.length; i++) {
console.log(`travelLog ${i} --- x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`);
}   
theRover.travelLog.push(newPosition);
  } else {
    console.log(`Rover can not out of x axe`);
  }
}

function turnRight(rover) {
console.log('turnRight was called!');
  switch(rover.direction) { 
   case 'N': rover.direction = 'E';
      break;
   case 'E': rover.direction = 'S';
      break;
   case 'S': rover.direction = 'W';
      break;
   case 'W': rover.direction = 'N';
      break;
   }
console.log(`Rover right direction is ${rover.direction}`)
}

function turnLeft(rover) { 
console.log('turnLeft was called!');  
 switch(rover.direction) { 
  case 'N': rover.direction =  'W';
      break;
  case 'W': rover.direction =  'S';
      break;
  case 'S': rover.direction =  'E';
      break;
  case 'E': rover.direction =  'N'; 
      break;
   }
console.log(`Rover left direction is ${rover.direction}`)
}

 
 