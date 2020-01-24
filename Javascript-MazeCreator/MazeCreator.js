function PrintMap(height, width, maze) {
  //Print Map Solved Map
  for (let i = 0; i < height; i++) {
    let rowCells = "";

    rowCells += maze[i][0].toString();

    for (let j = 1; j < width; j++) {
      rowCells += maze[i][j].toString();
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
    twoDimensionalArray[i][0] = 0;

    for (let j = 1; j < width; j++) {
        twoDimensionalArray[i][j] = 0;
    }
  }

  return twoDimensionalArray;
}

function MazeCreation(height = 10, width = 10) {
  let maze = create2DArray(height, width);

  //let startingPoint = [Math.random(0, width), Math.random(0, height)];

  //TODO create algorithm

  PrintMap(height, width, maze);
}

MazeCreation(30, 10);
