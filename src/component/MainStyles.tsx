import { StyleSheet } from "react-native";

export const Styles =StyleSheet.create({
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 14,
        backgroundColor:'#1AA597',
        opacity: 0.5,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 14,
        backgroundColor:'#C8C8C8',
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 50,
        backgroundColor:'#eee',
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGray: {
        width: 72,
        height: 72,
        borderRadius: 14,        
        backgroundColor:"#678983",
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    smallTextLight: {
        fontSize: 32,
        color: '#FFFFFF',
    },
    smallTextDark: {
        fontSize: 32,
        color:'#000000',
    },
    // Keyboard
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },
    screenFirstNumber: {
        fontSize: 96,
        color:'#747477',
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: '#747477',
        fontWeight: '200',
        alignSelf: "flex-end",
    },
});