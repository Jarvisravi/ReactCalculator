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

const INITIAL_STATE = {
  result: ''
}

const statusResultArray = []
const evaluate = (value) => {
    statusResultArray.push(value);
    return evaluateArray();
}

const evaluateArray = () => {
  let finalResult = ''
  for(let i = 0 ; i < statusResultArray.length ; i++) {
    finalResult += `${statusResultArray[i]}`;
  }
  return finalResult;
}

const getValue = (value1String, operator, value2String) => {
  let value1 = parseInt(value1String);
  let value2 = parseInt(value2String);
  let result = 0
  switch (operator) {
    case '+':
        result = value1 + value2;
      break;

    case '-':
        result = value1 - value2;
      break;

    case '*':
        result = value1 * value2;
      break;

    case '/':
          result = value1 / value2;
      break;

    default:

  }

  return result;
}

const getResult = () => {
  let finalResult = '';
  console.log(`getResult statusResultArray.length = ${statusResultArray.length}`);
  switch (statusResultArray.length) {
    case 1:
        finalResult = statusResultArray[0];
      break;

    case 2:
        finalResult = 'Invalid';
      break;

    case 3:
        let finalValue = getValue(...statusResultArray);
        finalResult = `${finalValue}`;
        break;

    default:

  }
  return finalResult;
}

const back = () => {
  if(statusResultArray.length === 0){
    return '';
  }
   let index = statusResultArray.length - 1;
   statusResultArray.splice(index, 1);
   let result = evaluateArray();
   return result;
}

const getLastItemFromArray = () => {
    let index = statusResultArray.length - 1;
    let item = statusResultArray[index];
    return item;
}

export default (state = INITIAL_STATE, action) => {
  console.log(`action = ${action.type}`);
  switch (action.type) {
     case ZERO: case ONE: case TWO: case THREE: case FOUR: case FIVE: case SIX: case SEVEN:  case EIGHT:  case NINE:
      {
        if(statusResultArray.length == 1 || statusResultArray.length > 2){
          statusResultArray = []
        }
        let finalResult = evaluate(action.payLoad);
        return {...state, result: finalResult};
      }
      break;

      case ADDITION: case SUBTRACTION: case MULTIPLICATION: case DIVISION:
      {
        if(statusResultArray.length == 0) {
          return {...state, result: 'Invalid'};
        }
        if(statusResultArray.length > 2){
          statusResultArray = []
          return {};
        }

        let item = getLastItemFromArray();
        if(item === '+' || item === '-' || item === '*' || item === '/') {
          return state;
        }

        let finalResult = evaluate(action.payLoad);
        return {...state, result: finalResult};
      }
      break;

      case EQUALTO:
      {
        let finalResult = getResult();
        return {...state, result: finalResult};
      }
      break;

      case CLEAR:
        return {};
      break;

      case BACK:
      {
        let finalResult = back();
        return {...state, result: finalResult};
      }
      break;

    default:
      return state;
  }
}
