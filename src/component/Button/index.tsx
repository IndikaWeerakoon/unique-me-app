import { StyleSheet, Text, TouchableHighlight } from "react-native";

interface ButtonProps {
    text: string,
    onPress: () => void,
    disabled?: boolean,
    style?: Record<string, any>,
    
}   

export default function Button(props: ButtonProps) {
    return (
        <TouchableHighlight 
            style={[ styles.container, props?.style?.body]} 
            onPress={props.onPress} 
            disabled={props.disabled}>
            <Text style={[styles.text, props?.style?.text]}>{props.text}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: 13,
        backgroundColor: '#2E4C53',
        alignItems: 'center'
    },
    
    text: {
        color: '#fff'
    }
});