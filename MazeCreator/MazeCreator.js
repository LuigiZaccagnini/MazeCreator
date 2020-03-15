function PrintMap(height, width, maze) {
  //Print Map Solved Map
  for (let i = 0; i < height; i++) {
    let rowCells = "";

    rowCells += maze[i][0];

    for (let j = 1; j < width; j++) {
      rowCells += maze[i][j];
    }

    console.log(rowCells);
  }
}

function create2DArray(height, width) {
  //Create 2D Array
  let twoDimensionalArray = new Array(height);

  for (let i = 0; i < height; i++) {
    twoDimensionalArray[i] = new Array(width);
  }

  //Fill array with values
  for (let i = 0; i < height; i++) {
    twoDimensionalArray[i][0] = '=';

    for (let j = 1; j < width; j++) {
        twoDimensionalArray[i][j] = '=';
    }
  }

  return twoDimensionalArray;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function checkSymbol(symbol)
{
  if(symbol != '>' && symbol != '<' && symbol != '^' && symbol != 'v')
  return true;

  return false;
}

let lastPoints = [];

function Main() {
  let startTime = new Date();
  let height = 20, width = 40;
  let maze = create2DArray(height, width);
  let startingPoint = [getRandomInt(0, height), getRandomInt(0, width)];
  let finishedMaze = MazeCreation(startingPoint, maze, height, width);
  PrintMap(height, width, finishedMaze);
  console.log("Time: " + ((new Date() - startTime) / 1000).toString() + "ms");
}

function MazeCreation(point, maze, height, width)
{
  let nextPoints = [];
  PrintMap(height, width, maze);
  console.log();
  //sleep(1);

  if(point[0] + 1 < height && maze[point[0] + 1][point[1]] === '=' && checkSymbol(maze[point[0] + 1][point[1]]))
  {
    nextPoints.push([point[0] + 1,point[1], 'v']);
  }

  if(maze[point[0]][point[1] + 1] === '=' && point[1] + 1 < width + 1 && checkSymbol(maze[point[0]][point[1] + 1] != 'X'))
  {
    nextPoints.push([point[0],point[1] + 1, '>']);
  }

  if(point[0] - 1 > -1 && maze[point[0] - 1][point[1]] === '=' && checkSymbol(maze[point[0] - 1][point[1]] != 'X'))
  {
    nextPoints.push([point[0] - 1,point[1], '^']);
  }

  if(point[1] - 1 > -1 && maze[point[0]][point[1] - 1] === '=' && checkSymbol(maze[point[0]][point[1] - 1] != 'X'))
  {
    nextPoints.push([point[0],point[1] - 1, '<']);
  }

  if(nextPoints.length > 0)
  {
    let nextPoint = nextPoints[getRandomInt(0, nextPoints.length)];
    maze[nextPoint[0]][nextPoint[1]] = nextPoint[2];
    lastPoints.push([nextPoint[0], nextPoint[1]]);
    MazeCreation([nextPoint[0],nextPoint[1]], maze, height, width);
  }

  else if(lastPoints.length >! 0)
  {
    let lastPoint = lastPoints[lastPoints.length - 1];
    //maze[lastPoint[0]][lastPoint[1]] = 'B';
    lastPoints.length = lastPoints.length - 1;
    MazeCreation([lastPoint[0], lastPoint[1]], maze, height, width);
  }

  return maze;
}

Main();
