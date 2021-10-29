import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  const buttons = [
    'C',
    'DEL',
    '/',
    7,
    8,
    9,
    '*',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    0,
    '.',
    '=',
  ];

  function calculator() {
    let lastArr = currentNumber[currentNumber.length - 1];

    if (
      lastArr === '/' ||
      lastArr === '*' ||
      lastArr === '-' ||
      lastArr === '+' ||
      lastArr === '.'
    ) {
      setCurrentNumber(currentNumber);
      return;
    } else {
      let result = eval(currentNumber).toString();
      setCurrentNumber(result);
      return;
    }
  }

  function handleInput(buttonPressed) {
    if (
      buttonPressed === '+' ||
      buttonPressed === '-' ||
      buttonPressed === '*' ||
      buttonPressed === '/'
    ) {
      setCurrentNumber(currentNumber + buttonPressed);
      return;
    } else if (
      buttonPressed === 1 ||
      buttonPressed === 2 ||
      buttonPressed === 3 ||
      buttonPressed === 4 ||
      buttonPressed === 5 ||
      buttonPressed === 6 ||
      buttonPressed === 7 ||
      buttonPressed === 8 ||
      buttonPressed === 9 ||
      buttonPressed === 0 ||
      buttonPressed === '.'
    ) {
    }
    switch (buttonPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case 'C':
        setLastNumber('');
        setCurrentNumber('');
        return;
      case '=':
        setLastNumber(currentNumber + '=');
        calculator();
        return;
    }
    setCurrentNumber(currentNumber + buttonPressed);
  }

  return (
    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButton}>
          <Text style={styles.titleText}>Josiele Mayara Ferreira da Silva</Text>
        </TouchableOpacity>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) =>
          button === '=' ||
          button === '/' ||
          button === '*' ||
          button === '-' ||
          button === '+' ? (
            <TouchableOpacity
              key={button}
              style={[styles.button, { backgroundColor: '#8e7cc3' }]}
              onPress={() => handleInput(button)}
            >
              <Text
                style={[styles.textButton, { color: 'white', fontSize: 28 }]}
              >
                {button}
              </Text>
            </TouchableOpacity>
          ) : button === 0 ? (
            <TouchableOpacity
              key={button}
              style={[
                styles.button,
                {
                  backgroundColor:
                    typeof button === 'number' ? '#fff' : '#ededed',
                  minWidth: '36%',
                },
              ]}
              onPress={() => handleInput(button)}
            >
              <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>
          ) : button === '.' || button === 'DEL' ? (
            <TouchableOpacity
              key={button}
              style={[
                styles.button,
                {
                  backgroundColor: button === '.' ? '#fff' : '#ededed',
                  minWidth: '37%',
                },
              ]}
              onPress={() => handleInput(button)}
            >
              <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>
          ) : button === 'C' ? (
            <TouchableOpacity
              key={button}
              style={[
                styles.button,
                {
                  backgroundColor:
                    typeof button === 'number' ? '#fff' : '#ededed',
                  minWidth: '36%',
                },
              ]}
              onPress={() => handleInput(button)}
            >
              <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              key={button}
              style={[
                styles.button,
                {
                  backgroundColor:
                    typeof button === 'number' ? '#fff' : '#ededed',
                },
              ]}
              onPress={() => handleInput(button)}
            >
              <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  results: {
    backgroundColor: '#f5f5f5',
    maxWidth: '100%',
    minHeight: '35%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  resultText: {
    maxHeight: 45,
    color: '#8e7cc3',
    margin: 15,
    fontSize: 35,
  },
  historyText: {
    color: '#7c7c7c',
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  themeButton: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 25,
  },
  titleText: {
    color: '#8e7cc3',
    fontSize: 14,
  },
  buttons: {
    width: '100%',
    height: '35%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    borderColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '24%',
    minHeight: '54%',
    flex: 2,
  },
  textButton: {
    color: '#7c7c7c',
    fontSize: 28,
  },
});
