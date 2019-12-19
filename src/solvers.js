/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



// window.findNRooksSolution = function(n) {
//   var solution = undefined; //fixme

//   console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
//   return solution;
// };

// // return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// window.countNRooksSolutions = function(n) {
//   var solutionCount = undefined; //fixme

//   console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
//   return solutionCount;
// };

// // return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
// window.findNQueensSolution = function(n) {
//   var solution = undefined; //fixme

//   console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
//   return solution;
// };

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutions = runN(n, 'queen')

  console.log('Number of solutions for ' + n + ' queens:', solutions.length);
  return solutions.length;
};


const runN = function(n, type = 'queen') {
  const board = new Board({n:n});
  const successes = [];
  const traverse = function(board, row){
    debugger;
    if (row === n){
      successes.push(board)
    } else {
      for (let col = 0; col < board.attributes.n; col++ ){
        board.togglePiece(row, col);

        if (type === 'queen'){
          if (board.hasAnyQueensConflicts()){
            board.togglePiece(row, col);
          } else {
            traverse(board, col + 1)
          }
        } else {
          if (board.hasAnyRooksConflicts()){
            board.togglePiece(row, col);
          } else {
            traverse(board, col + 1)
          }
        }
      }
    }
  }
  traverse(board, 0)
  return successes;
}