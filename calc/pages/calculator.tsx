import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '../components/button';

enum ActionType{
  Initial,
  Digit,
  Operation,
  Comma,
  Error
}

enum OperationType {
  Add,
  Sub,
  Div,
  Mult,
  Equal,
}

const Calculator = () => {
  const [result, setResult] = React.useState('0');
  const [lastAction, setLastAction] = React.useState(ActionType.Initial);


  const ApplyDigit = (digit: string) => {
    if (lastAction == ActionType.Initial || lastAction == ActionType.Error){
      setResult(digit)
    } else {
      setResult(result+digit)
    }
    setLastAction(ActionType.Digit)
  }

  const ApplyClear = () => {
    setResult('0')
    setLastAction(ActionType.Initial)
  }

  const ApplyMathOperation = (operation: OperationType) => {
    if(lastAction == ActionType.Comma){
      setResult(result+'0')
    }

    if(lastAction == ActionType.Error){
      return
    }

    if(lastAction == ActionType.Operation){
      const currentString = result.split(' ');
      if (currentString.length == 3){
        switch (operation) {
          case OperationType.Add: {
            currentString[1] = '+'
            break
          }
          case OperationType.Sub: {
            currentString[1] = '-'
            break
          }
          case OperationType.Mult: {
            currentString[1] = '*'
            break
          }
          case OperationType.Div: {
            currentString[1] = '/'
            break
          }
        }
        setResult(currentString[0] + ` ${currentString[1]} `)
      }
      return
    }
    
    const currentResult = result.split(' ');
    if (currentResult.length == 3){
      switch (currentResult[1]) {
        case '+': {
          const res = (+currentResult[0] + +currentResult[2]).toString();
          setResult(res)
          AddOperationToResult(operation, res)
          break
        }
        case '-': {
          const res = (+currentResult[0] - +currentResult[2]).toString()
          setResult(res)
          AddOperationToResult(operation, res)
          break
        }
        case '*': {
          const res = (+currentResult[0] * +currentResult[2]).toString()
          setResult(res)
          AddOperationToResult(operation, res)
          break
        }
        case '/': {
          if(+currentResult[2] == 0){
            setResult('Деление на ноль')
            setLastAction(ActionType.Error)
            return
          }
          const res = (+currentResult[0] / +currentResult[2]).toString()
          setResult(res)
          AddOperationToResult(operation, res)
          break
        }
        default: {
          break
        }
      }
      setLastAction(ActionType.Digit)
      return
    }

    AddOperationToResult(operation)
    setLastAction(ActionType.Operation)
  }

  const AddOperationToResult = (operation: OperationType, setNewResult?: string) => {
    const newResult = setNewResult?? result;
    switch (operation) {
      case OperationType.Add: {
        setResult(newResult + ' + ')
        break
      }
      case OperationType.Sub: {
        setResult(newResult + ' - ')
        break
      }
      case OperationType.Mult: {
        setResult(newResult + ' * ')
        break
      }
      case OperationType.Div: {
        setResult(result + ' / ')
        break
      }
    }
  }

  const ApplyComma = () => {
    if (lastAction == ActionType.Initial || lastAction == ActionType.Digit){
      setResult(result+'.')
      setLastAction(ActionType.Comma)
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.resultWindow}>
          <Text numberOfLines={1} ellipsizeMode='head' style={styles.resultWindowText}>
            {result}
          </Text>
        </View>
        <View style={styles.line}>
            <Button onClick={()=>{ApplyDigit('1')}} buttonText='1'></Button>
            <Button onClick={()=>{ApplyDigit('2')}} buttonText='2'></Button>
            <Button onClick={()=>{ApplyDigit('3')}} buttonText='3'></Button>
            <Button onClick={()=>{ApplyMathOperation(OperationType.Add)}} buttonText='+'></Button>
        </View>
        <View style={styles.line}>
            <Button onClick={()=>{ApplyDigit('4')}} buttonText='4'></Button>
            <Button onClick={()=>{ApplyDigit('5')}} buttonText='5'></Button>
            <Button onClick={()=>{ApplyDigit('6')}} buttonText='6'></Button>
            <Button onClick={()=>{ApplyMathOperation(OperationType.Sub)}} buttonText='-'></Button>
        </View>
        <View style={styles.line}>
            <Button onClick={()=>{ApplyDigit('7')}} buttonText='7'></Button>
            <Button onClick={()=>{ApplyDigit('8')}} buttonText='8'></Button>
            <Button onClick={()=>{ApplyDigit('9')}} buttonText='9'></Button>
            <Button onClick={()=>{ApplyMathOperation(OperationType.Mult)}} buttonText='*'></Button>
        </View>
        <View style={styles.line}>
            <Button onClick={()=>{ApplyComma()}} buttonText='.'></Button>
            <Button onClick={()=>{ApplyDigit('0')}} buttonText='0'></Button>
            <Button onClick={()=>{ApplyMathOperation(OperationType.Equal)}} buttonText='='></Button>
            <Button onClick={()=>{ApplyMathOperation(OperationType.Div)}} buttonText='/'></Button>
        </View>
        <View style={styles.line}>
            <Button onClick={()=>{ApplyClear()}} buttonText='C' textColor='red'></Button>
        </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
  },
  line: {
    flexDirection: 'row'
  },
  resultWindow: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 60,
    flexDirection: 'row-reverse',
    width: 247
  },
  resultWindowText: {
    fontSize: 20,
    textAlignVertical: 'center',
  }
});

