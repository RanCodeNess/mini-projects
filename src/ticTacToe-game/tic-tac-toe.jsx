import Square from "./Square";
import ResultBoard from "./resultBoard.jsx";

import { useState, useEffect } from "react";


function Board() {
    // State to keep track of whose turn it is (true for X's turn, false for O's turn)
    const [isXTurn, setIsXTurn] = useState(true);
    
    // State to keep track of the board state, initialized with an array of 9 null values
    const [boardState, setBoardState] = useState(new Array(9).fill(null));
    
    // State to keep track of the game outcome (winner or tie)
    const [winner, setWinner] = useState(null);

    // useEffect hook to check for a win whenever the boardState changes
    useEffect(() => {
        const winResult = checkWin(boardState);
        if (winResult) {
            setWinner(winResult); // Set the winner message if there is a result
        }
    }, [boardState]); // Runs when boardState changes

    // Function to check for a win or a tie
    function checkWin(board) {
        // Array of winning combinations
        const winningMoves = [
            [0, 1, 2], // top row
            [3, 4, 5], // middle row
            [6, 7, 8], // bottom row
            [0, 3, 6], // left column
            [1, 4, 7], // middle column
            [2, 5, 8], // right column
            [0, 4, 8], // diagonal (top-left to bottom-right)
            [2, 4, 6]  // diagonal (top-right to bottom-left)
        ];
        
        // Check each winning combination
        for (const combo of winningMoves) {
            let [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return `${board[a]} has won`; // Return the winner if a combination is met
            }
        }
        
        // Check for a tie (if there are no null values left)
        if (!board.includes(null)) {
            return "Tie";
        }
        
        return null; // Return null if no win or tie
    }

    // Function to handle a click on a square
    function handleClick(id) {
        // Prevent clicking if there is already a move at the id or if there is a winner
        if (boardState[id] || winner) return;
        
        // Determine the current move ('X' or 'O')
        const currentMove = isXTurn ? 'X' : 'O';
        
        // Update the board state
        setBoardState((b) => {
            const newBoard = [...b];
            newBoard[id] = currentMove;
            return newBoard;
        });
        
        // Switch to the next player's turn
        setIsXTurn((turn) => !turn);
    }

    // Create an array of Square components based on boardState
    const myBoard = boardState.map((value, id) => (
        <Square key={id} id={id} value={value} handleClick={handleClick} />
    ));

    return (
        <>
        <div className="board-container">
            {myBoard}
        </div>
        {winner && <div className="winner-message">{winner}</div>} {/* Display the winner message if there is one */}
        <ResultBoard gameResult = {winner}/> 
        </>
    );
}

export default Board;
