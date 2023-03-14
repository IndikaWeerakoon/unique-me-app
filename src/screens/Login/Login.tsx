import { useState, useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {StackPageType} from '../page.type';
import { useDispatch, useSelector } from 'react-redux';
import { LoginStyles as styles } from './style';
import Button from '../../component/Button/index'
import { authAction } from '../../redux/slices/auth.slice';
import { RootState } from '../../redux/store';
import TextButton from '../../component/TextButton/index';


export type LoginProps = NativeStackScreenProps<StackPageType, 'Login'>

export default function Login (prop: LoginProps) {
    const dispatch = useDispatch();

    const {isIntermediate, phoneNumber, errorMessage, loading} = useSelector((state: RootState) => state.auth)

    const [number, onChangeNumber] = useState('');
    const [otp, onChangeOtp] = useState('');
    const logedin = () => {
        // dispatch(login());
        dispatch(authAction.setErrorMessage({})); //clear error
        if(number && number.length === 12) {
            dispatch(authAction.login({phoneNumber: number.toString()}));
        } else {
            dispatch(authAction.setErrorMessage({message: 'Invalid phone number format.'}))
        }
        
    }

    const submitAccessCode = () => {
        dispatch(authAction.setErrorMessage({}));//clear error
        if(otp && otp.length === 4) {
            dispatch(authAction.confirmLogin({phoneNumber: number.toString(), shortCode: otp.toString()}));
        } else {
            dispatch(authAction.setErrorMessage({message: 'Invalid OTP'}))
        }
    }

    const clearIntermediateLogin = () => {
        dispatch(authAction.clearIntermedeateState());
    }

    useEffect(() => {
        onChangeNumber(phoneNumber);
        onChangeOtp('');
    }, [phoneNumber])

    return (
        <View style={[styles.mainView,{backgroundColor: 'white'}]}>
            <Text style={[styles.logoText]}>Unique MiE</Text>
            <Text style={[styles.loginText]}>Login</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="insert mobile number"
                keyboardType="numeric"
            />
            {isIntermediate && <TextInput
                style={styles.input}
                onChangeText={onChangeOtp}
                value={otp}
                placeholder="Insert OTP"
                keyboardType="numeric"
            />}
            {isIntermediate &&
                <TextButton style={{body: styles.buttonText}} text='Change Number' onPress={clearIntermediateLogin} />}
            <Button 
                text={isIntermediate ? 'Submit OTP' : 'Sign up'} 
                style={{body: styles.buttonBody}} 
                onPress={isIntermediate ? submitAccessCode : logedin}
                disabled={loading}/>
            {errorMessage && <Text style={[styles.errorText]}>{errorMessage}</Text>}
            {isIntermediate &&
                <TextButton style={{body: styles.resendButtonText}} text='Resend OTP' onPress={clearIntermediateLogin} />}
            <View style={styles.footFill}/>
        </View>
    );
}