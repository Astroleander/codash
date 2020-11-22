import { Solution } from '@/pojo/Solution';

function spiralOrder(matrix: number[][]): number[] {
  const h = matrix.length;
  const w = h > 0 ? matrix[0].length : 0;
  
  if (h === 0 || w === 0) return [];
  const ret = [];
  
  let start = 0, top = 0, bottom = h - 1, end = w - 1;
  let x = start, y = top;
  let direction = 'r';
  
  while (start <= end && top <= bottom) {
    ret.push(matrix[y][x]);
    console.log(ret)

    if (direction === 'r' && x === end)         { direction = 'd'; top++;    }
    else if (direction === 'd' && y === bottom) { direction = 'l'; end--;    }
    else if (direction === 'l' && x === start)  { direction = 'u'; bottom--; }
    else if (direction === 'u' && y === top)    { direction = 'r'; start++;  }
    
    switch (direction) {
      case 'r': x++; break;
      case 'd': y++; break;
      case 'l': x--; break;
      case 'u': y--; break;
    }
  }
  
  return ret;
};

export default Solution.create(
  spiralOrder,
  [
    [[1,2,3],[4,5,6],[7,8,9]]
    // [[1, 2], [4,3]]
    // [[1,2],[3,4],[5,6],[7,8]]
    // [
    //   [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10],
    //   [11,12,13,14,15,16,17,18,19,20]
    // ]
    // [
    //   [ 1,  2,  3, 4],
    //   [ 5,  6,  7, 8],
    //   [ 9, 10, 11, 12]
    // ]
    // [
    //   [1, 2, 3, 4, 5],
    //   [16, 17, 18, 19, 6],
    //   [15, 24, 25, 20, 7],
    //   [14, 23, 22, 21, 8],
    //   [13, 12, 11, 10, 9],
    // ]
  ],
);