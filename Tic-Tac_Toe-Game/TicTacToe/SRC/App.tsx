import React, { useState } from 'react';
import Icons from './Icons';
import Snackbar from 'react-native-snackbar';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


function App(): JSX.Element {

  const [isCross, setisCross] = useState<boolean>(false)
  const [GameWinner, setGameWinner] = useState<string>('')
  const [GameState, setGameState] = useState(new Array(9).fill('Default', 0, 9))

  const ReloadGame = () => {
    setisCross(false)
    setGameWinner('')
    setGameState(new Array(9).fill('Default', 0, 9))
  }

  const CheckTheWinner = () => {
    // Checking the Winner.....
    if(GameState[0] === GameState[1] && 
      GameState[0] === GameState[2] &&
      GameState[0] !== 'Default' 
    ) {
      setGameWinner(`${GameState[0]} won the Game 🍾`)
    }
    else if(GameState[3] === GameState[4] && 
      GameState[3] === GameState[5] &&
      GameState[3] !== 'Default' 
    ) {
      setGameWinner(`${GameState[3]} won the Game 🍾`)
    }
    else if(GameState[6] === GameState[7] && 
      GameState[6] === GameState[8] &&
      GameState[6] !== 'Default' 
    ) {
      setGameWinner(`${GameState[6]} won the Game 🍾`)
    }
    else if(GameState[0] === GameState[3] && 
      GameState[0] === GameState[6] &&
      GameState[0] !== 'Default' 
    ) {
      setGameWinner(`${GameState[0]} won the Game 🍾`)
    }
    else if(GameState[1] === GameState[4] && 
      GameState[1] === GameState[7] &&
      GameState[1] !== 'Default' 
    ) {
      setGameWinner(`${GameState[1]} won the Game 🍾`)
    }
    else if(GameState[2] === GameState[5] && 
      GameState[2] === GameState[8] &&
      GameState[2] !== 'Default' 
    ) {
      setGameWinner(`${GameState[2]} won the Game 🍾`)
    }
    else if(GameState[0] === GameState[4] && 
      GameState[0] === GameState[8] &&
      GameState[0] !== 'Default' 
    ) {
      setGameWinner(`${GameState[0]} won the Game 🍾`)
    }
    else if(GameState[2] === GameState[4] && 
      GameState[2] === GameState[6] &&
      GameState[2] !== 'Default' 
    ) {
      setGameWinner(`${GameState[2]} won the Game 🍾`)
    }
    else  {
      let ans = true
      for(let i=0; i<9; i++) {
        if(GameState[i] === 'Default') {
          ans = false;
        }
      }
      if(ans) {
        setGameWinner('Draw Match ... ⌛️')
      }
    }

  }

  const OnpressingTheBtn = (num: number) => {
    if(GameWinner) {
      return Snackbar.show({
        text: `${GameWinner}`,
        backgroundColor: '#000',
        textColor: '#fff',
        marginBottom: 70
      })
    }

    if(GameState[num] === 'Default') {
      GameState[num] = isCross ? 'cross' : 'circle'
      setisCross(!isCross)
    }
    else {
      return Snackbar.show({
         text: 'Position is Already Filled',
         backgroundColor: '#4a5759',
         textColor: '#f7e1d7',
         marginBottom: 70
      })
    }
    CheckTheWinner()
  }

  return (
    <SafeAreaView style={styles.container}>
        {GameWinner ? (
          <View style={[styles.PlayerInfo, styles.PlayerWon]}>
            <Text style={styles.WinnerText}>{GameWinner}</Text>
          </View>
        ) : (
          <View style={[
            styles.PlayerInfo, 
            isCross ? styles.PlayerX : styles.PlayerO
          ]}>
            <Text style={styles.PlayerTurnText}>
              Player {isCross ? 'X' : 'O'} 's Turn
            </Text>
          </View>
        )}

        <FlatList 
          numColumns={3}
          data={GameState}
          style={styles.FlatListStyle}
          renderItem={({item, index}) => (
            <Pressable
              key={index}
              style={styles.PressStyles}
              onPress={() => (OnpressingTheBtn(index))}
            >
              <Icons name={item} />
            </Pressable>
          )}
        />

        <Pressable
          style={styles.GameBtn}
          onPress={ReloadGame}
        >
          <Text style={styles.ReloadBtn}>
            {GameWinner ? 'Start New Game' : 'Reload the Game'}
          </Text>
        </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#343a40'
  },
  PlayerInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    margin: 30,
    marginLeft: 90,
    marginRight: 90,
    borderRadius: 12,
    marginTop: 100
  },
  PlayerWon: {
    backgroundColor: '#94d2bd'
  },
  PlayerX: {
    backgroundColor: '#38CC77'
  },
  PlayerO: {
    backgroundColor: '#F7CD2E'
  },
  WinnerText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0d1b2a',
    textTransform: 'capitalize'
  },
  PlayerTurnText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#012a4a'
  },
  FlatListStyle: {
    margin: 12,
    backgroundColor: '#343a40'
  },
  PressStyles: {
    height: 130,
    width: '31%',
    backgroundColor: '#434a40',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 4
  },
  GameBtn: {
    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8D3DAF',
    marginHorizontal: 90,
    marginBottom: '70%',
    marginTop: 40,
    height: 70,
    borderRadius: 12
  },
  ReloadBtn: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

export default App;
