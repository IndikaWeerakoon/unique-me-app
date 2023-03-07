import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface TextButtonProps {
    text: string,
    onPress: () => void,
    style?: Record<string, any>
}   

export default function TextButton(props: TextButtonProps) {
    return (
        <TouchableOpacity style={[props?.style?.body]} onPress={props.onPress}>
            <Text style={[styles.text, props?.style?.text]}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({    
    text: {
        color: '#238BAF'
    }
})