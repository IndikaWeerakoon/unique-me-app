import { CognitoUser } from 'amazon-cognito-identity-js';
import { Auth } from 'aws-amplify';

Auth.configure({
  authenticationFlowType: 'CUSTOM_AUTH'
})

export const handleSignUp = async (phoneNumber: string) => {
      await Auth.signUp({
        username: phoneNumber,
        password: 'dummyPassword123!',
        attributes: {
          phone_number: phoneNumber,
        },
      });
  };

export const handleSignIn = async (phoneNumber: string) => {
      return  Auth.signIn(phoneNumber);
  };

export const handleConfirmSignUp = async (user: CognitoUser, confirmationCode: string) => {
      return Auth.sendCustomChallengeAnswer(user, confirmationCode);
};

export const handleGetCurrentUser = async () => {
  return Auth.currentAuthenticatedUser({
      bypassCache: true,
  });
}

export const handleGetCurrentSession = async () => {
  return Auth.currentSession();
}

export const handleLogout = async () => {
  return Auth.signOut();
}