import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Home = ({route, navigation}) => {
  const {firstName, secondName} = route.params;

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = checkWinner(board);
  const draw = board.every(cell => cell);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };
  const onCellPress = index => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderCell = (value, index) => (
    <TouchableOpacity style={styles.cell} onPress={() => onCellPress(index)}>
      <Text style={styles.cellText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {firstName} (X) vs {secondName} (O)
      </Text>
      <View style={styles.board}>{board.map(renderCell)}</View>
      <Text style={{fontSize: 30, marginTop: 40, color: 'green'}}>
        {winner
          ? `Winner: ${winner === 'X' ? firstName : secondName}`
          : draw
          ? "It's a Draw!"
          : `Next Player: ${isXNext ? firstName : secondName}`}
      </Text>
      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.resetText}>Reset Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const checkWinner = board => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'blue'
  },
  name: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    height: 300,
  },
  cell: {
    width: '33.33%',
    height: '33.33%',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    fontSize: 24,
    color: 'black',
  },
  resetButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'center',
  },
  resetText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Home;
