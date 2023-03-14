import { StyleSheet } from "react-native";

export const LoginStyles =StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingTop: 100
    },

    logoText: {
        fontSize: 27,
        marginBottom: 10,
        letterSpacing: 2,
        fontWeight: "bold",
        color: '#4C0309'
    },
     
    loginText: {
       alignSelf: 'flex-start',
       fontSize: 17,
       fontWeight: '500',
       marginBottom: 10,
    },

    buttonText: {
        alignSelf: 'flex-end',
        marginBottom: 15,
        color: '#238BAF',
        marginEnd: 10
    },

    resendButtonText: {
        marginBottom: 15,
        color: '#238BAF',
        marginTop: 10
    },

    input: {
        height: 50,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        marginBottom: 15,
    },

    buttonBody: {
        width: '100%',
    },

    errorText: {
        alignSelf: 'flex-start',
        marginTop: 3,
        color: '#D33149'
    },

    footFill: {
        flex: 1
    }
})