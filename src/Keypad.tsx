import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "./MainStyles";
import { useDispatch } from "react-redux";
import { increment, initialize, trigger } from "./redux/slices/counter.slice";

export default function Keypad() {
    const [firstNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [operation, setOperation] = React.useState("");
    const [result, setResult] = React.useState<Number | null >(null);
    const dispatch = useDispatch()

    const handleNumberPress = (buttonValue: string) => {
        if (firstNumber.length < 10) {
          setFirstNumber(firstNumber + buttonValue);
          dispatch(trigger({type: "increase"}))
        }
    };

    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
    };

    const clear = (fullCrear: boolean = false) => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
        if(fullCrear) {
            dispatch(trigger({type: "zero"}))
        }
        
    };

    const firstNumberDisplay = () => {
        if (result !== null) {
            return <Text style={result < 99999 ? [Styles.screenFirstNumber, {color: '#46D5B2'}] : [Styles.screenFirstNumber, {fontSize: 50, color:'#46D5B2'}]}>{result?.toString()}</Text>; 
        }
        if (firstNumber && firstNumber.length < 6) {
          return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
        }
        if (firstNumber === "") {
          return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
        }
        if (firstNumber.length > 5 && firstNumber.length < 8) {
          return (
            <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
              {firstNumber}
            </Text>
          );
        }
        if (firstNumber.length > 7) {
          return (
            <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
              {firstNumber}
            </Text>
          );
        }
    };

    const getResult = () => {
        switch (operation) {
          case "+":
              clear();
              var result1=parseFloat(secondNumber) + parseFloat(firstNumber);
              setResult(result1);
              setFirstNumber(""+(result1));
              setResult(null);
              break;
          case "-":
              clear();
              var result=parseFloat(secondNumber) - parseFloat(firstNumber);
              setResult(result);
              setFirstNumber(""+(result));
              setResult(null);
              break;
          case "*":
              clear();
              var result=parseFloat(secondNumber) * parseFloat(firstNumber);
              setResult(result);
              setFirstNumber(""+(result));
              setResult(null);
              break;
          case "/":
              clear();
              var result=parseFloat(secondNumber) / parseFloat(firstNumber);
              setResult(result);
              setFirstNumber(""+(result));
              setResult(null);
              break;
        case "^":
              clear();
              var result=Math.pow(parseInt(secondNumber), parseInt(firstNumber));
              setResult(result);
              setFirstNumber(""+(result));
              setResult(null);
              break;

        case "%":
              clear();
              var result=((parseFloat(secondNumber)*parseFloat(firstNumber))/100);
              setResult(result);
              setFirstNumber(""+(result));
              setResult(null);
              break;
          }
    };


    return(
        <View style={Styles.viewBottom}>
            
        <View
          style={{
            height: 120,
            width: "90%",
            justifyContent: "flex-end",
            alignSelf: "center",
            marginBottom: 10
          }}>
          <Text style={Styles.screenSecondNumber}>
            {secondNumber}
            <Text style={{ color: "#39837C", fontSize: 40, fontWeight: '500' }}> {operation}</Text>
          </Text>
          {firstNumberDisplay()}
        </View>
        <View style={Styles.row}>
          <Button title="AC" isGray onPress={() => clear(true)} />
          <Button title="^" isGray onPress={() => handleOperationPress("^")} />
          <Button title="%" isGray onPress={() => handleOperationPress("%")} />
          <Button title="÷" isBlue onPress={() => handleOperationPress("/")} />
        </View>
        <View style={Styles.row}>
          <Button title="7" onPress={() => handleNumberPress("7")} />
          <Button title="8" onPress={() => handleNumberPress("8")} />
          <Button title="9" onPress={() => handleNumberPress("9")} />
          <Button title="x" isBlue onPress={() => handleOperationPress("*")} />
        </View>
        <View style={Styles.row}>
          <Button title="4" onPress={() => handleNumberPress("4")} />
          <Button title="5" onPress={() => handleNumberPress("5")} />
          <Button title="6" onPress={() => handleNumberPress("6")} />
          <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
        </View>
        <View style={Styles.row}>
          <Button title="1" onPress={() => handleNumberPress("1")} />
          <Button title="2" onPress={() => handleNumberPress("2")} />
          <Button title="3" onPress={() => handleNumberPress("3")} />
          <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
        </View>
        <View style={Styles.row}>
          <Button title="."  onPress={() => handleNumberPress(".")} />
          <Button title="0" onPress={() => handleNumberPress("0")} />
          <Button title="Del" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
          <Button title="=" isBlue onPress={() => getResult()} />
        </View>
      </View>
    );
}