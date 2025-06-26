// example output given an input of [10, 5, 3, 1, 4]:
//  ____ ........................ ^ 10
// |    |........................ | 9
// |    |........................ | 8
// |    |........................ | 7
// |    |........................ | 6
// |    | ____ .................. | 5
// |    ||    |............ ____  | 4
// |    ||    | ____ ......|    | | 3
// |    ||    ||    |......|    | | 2
// |    ||    ||    | ____ |    | | 1
// |    ||    ||    ||    ||    | | 0

let input = [10, 5, 3, 1, 4];

const components = {
  rowStart: "// ",
  negSpace: "......",
  graphTop: " ____ ",
  graphSide: "|    |",
  topRowEnd: " ^ ",
  otherRowEnd: " | ",
};

function chooseComponent(yPosition, currentArrayVal) {
  if (currentArrayVal < yPosition) {
    return components.negSpace;
  } else if (currentArrayVal > yPosition) {
    return components.graphSide;
  } else {
    return components.graphTop;
  }
}

function makeGraph(input) {
  let result = "";
  let currentRow = "";

  const yAxisMax = Math.max(...input);
  const xAxisMax = input.length - 1;

  for (let y = yAxisMax; y >= 0; y--) {
    for (let x = 0; x <= xAxisMax; x++) {
      if (x === 0) {
        currentRow += components.rowStart;
      }
      currentRow += chooseComponent(y, input[x]);
      if (x === xAxisMax) {
        if (y === yAxisMax) {
          currentRow += components.topRowEnd + y.toString() + "\n";
          result += currentRow;
          currentRow = "";
        } else {
          currentRow += components.otherRowEnd + y.toString() + "\n";
          result += currentRow;
          currentRow = "";
        }
      }
    }
  }
  console.log(result);
  return result;
}

makeGraph(input);
