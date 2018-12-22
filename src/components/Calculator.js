import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';

import { Header, Input, Button } from './common';
import { actionButtonPressed } from '../actions';
import {
  ZERO,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  PERIOD,
  ADDITION,
  SUBTRACTION,
  MULTIPLICATION,
  DIVISION,
  EQUALTO,
  CLEAR,
  BACK
} from '../actions/types';

class Calculator extends Component {

  constructor() {
    super()
  }

  componentDidMount() {
    console.log('hello world demo');
    console.log('hello world two 2 updated');
    console.log('hello world 3 updated');
    console.log('hello world 4')
    console.log('hello world 5')
  }

  onButtonPress(type, value) {
    console.log(`Calculator onButtonPress type = ${type}`);
    this.props.actionButtonPressed({type, value});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header headerText = "Calculator" />
        </View>

        <View style={styles.firstContainer}>
          <Input
            placeholder='Enter'
            value={this.props.result}
          >
          </Input>
        </View>

        <View style={styles.secondContainer}>

          <View style={styles.buttonParentContainer}>
            <Button onPress={this.onButtonPress.bind(this, CLEAR, 'C')}>
              C
            </Button>
            <Button onPress={this.onButtonPress.bind(this, DIVISION, '/')}>
              /
            </Button>
            <Button onPress={this.onButtonPress.bind(this, MULTIPLICATION, '*')}>
              *
            </Button>
            <Button onPress={this.onButtonPress.bind(this, BACK, 'Back')}>
              Back
            </Button>
          </View>

          <View style={styles.buttonParentContainer}>
            <Button onPress={this.onButtonPress.bind(this, SEVEN, '7')}>
              7
            </Button>
            <Button onPress={this.onButtonPress.bind(this, EIGHT, '8')}>
              8
            </Button>
            <Button onPress={this.onButtonPress.bind(this, NINE, '9')}>
              9
            </Button>
            <Button onPress={this.onButtonPress.bind(this, SUBTRACTION, '-')}>
              -
            </Button>
          </View>

          <View style={styles.buttonParentContainer}>
            <Button onPress={this.onButtonPress.bind(this, FOUR, '4')}>
              4
            </Button>
            <Button onPress={this.onButtonPress.bind(this, FIVE, '5')}>
              5
            </Button>
            <Button onPress={this.onButtonPress.bind(this, SIX, '6')}>
              6
            </Button>
            <Button onPress={this.onButtonPress.bind(this, ADDITION, '+')}>
              +
            </Button>
          </View>

          <View style={styles.buttonParentContainer}>
            <Button onPress={this.onButtonPress.bind(this, ONE, '1')}>
              1
            </Button>
            <Button onPress={this.onButtonPress.bind(this, TWO, '2')}>
              2
            </Button>
            <Button onPress={this.onButtonPress.bind(this, THREE, '3')}>
              3
            </Button>
            <Button onPress={this.onButtonPress.bind(this, PERIOD, '.')}>
              .
            </Button>
          </View>

          <View style={styles.buttonParentContainer}>
            <View style={{
              flex : 0.25
            }}>
            <Button>
              %
            </Button>
            </View>

            <View style={{
              flex : 0.25
            }}>
            <Button onPress={this.onButtonPress.bind(this, ZERO, '0')}>
              0
            </Button>
            </View>

            <View style={{
              flex : 0.5
            }}>
            <Button onPress={this.onButtonPress.bind(this, EQUALTO, '=')}>
              =
            </Button>
            </View>

          </View>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 5,
    marginBottom: 10
  },
  headerContainer: {
    flex: 0.1
  },
  firstContainer:{
    flex:0.15,
    marginLeft: 5,
    marginRight: 5
  },
  secondContainer:{
    flex: 0.75
  },
  buttonParentContainer: {
    flexDirection: 'row',
    marginTop: 10,
    flex: 0.20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
});

const mapStateToProps = state => {

  const { result } = state.calculate;
  console.log(`mapStateToProps result = ${result}`);
  return {result}
};

export default connect(mapStateToProps, {actionButtonPressed})(Calculator);
