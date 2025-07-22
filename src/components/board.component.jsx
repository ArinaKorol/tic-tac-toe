import { useState } from 'react'
import { Box } from './box.component'
import styled from '@emotion/styled';

const GameBoard = styled.div`
    display: grid;
    background-color: #ff9baa;
    border-radius: 3px;
    padding: 5px`

const GameStatus = styled.div`
    font-size: 35px;
    padding-block: 5px;
    margin-bottom: 15px;
    font-weight: 500;
    border-radius: 3px;
    border: 3px solid white;
    background-color: #ff9baa;
`

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[b] === squares[a] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function Board() {
  const [xIsNext, setXIsNext] = useState(true);

  const arr = Array(9).fill(null)
  const [squares, setSquares] = useState(arr);

  function handleClick(i) {

    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
     
    setSquares(nextSquares);
    setXIsNext(!xIsNext)
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if ((squares.filter(item => item === 'X').length + squares.filter(item => item === "O").length) === 9) {
    status= `Draw`
  } else {
    status = `Next Player: ${xIsNext ? 'X' : 'O'}`
  }
    return (
      <>
        <GameStatus>{status}</GameStatus>
        <GameBoard>
          <div>
            <Box
              value={squares[0]}
              onBoxClick={() => handleClick(0)}
              color="pink"
            />
            <Box
              value={squares[1]}
              onBoxClick={() => handleClick(1)}
              color="white"
            />
            <Box
              value={squares[2]}
              onBoxClick={() => handleClick(2)}
              color="pink"
            />
          </div>
          <div>
            <Box
              value={squares[3]}
              onBoxClick={() => handleClick(3)}
              color="white"
            />
            <Box
              value={squares[4]}
              onBoxClick={() => handleClick(4)}
              color="pink"
            />
            <Box
              value={squares[5]}
              onBoxClick={() => handleClick(5)}
              color="white"
            />
          </div>
          <div>
            <Box
              value={squares[6]}
              onBoxClick={() => handleClick(6)}
              color="pink"
            />
            <Box
              value={squares[7]}
              onBoxClick={() => handleClick(7)}
              color="white"
            />
            <Box
              value={squares[8]}
              onBoxClick={() => handleClick(8)}
              color="pink"
            />
          </div>
        </GameBoard>
      </>
    );
}