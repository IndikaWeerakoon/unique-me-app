import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EditProfile } from "./EditProfile";
import { Profile } from "./Profile";
import { Scanner } from './Scanner';
import { SharedContacts } from './SharedContacts';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SelectedContact } from './SelectedContact';
import { CustomDrawerContent } from '../component/CustomDrawerContent/CustomDrawerContent';

const Drawer = createDrawerNavigator();

export default function UserNavigation() {
    return (
        <Drawer.Navigator 
            initialRouteName='Home'
            drawerContent={(props) => <CustomDrawerContent {...props}/>}>
            <Drawer.Screen name="Home" options={{ headerShown: false }} component={HomeScreenNavigator} />
            <Drawer.Screen name="EditProfile" options={{ headerShown: false }} component={EditProfile} />
        </Drawer.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function HomeScreenNavigator() {
    return (
        <Tab.Navigator initialRouteName='Profile'>
            <Tab.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
            <Tab.Screen name="Scanner" options={{ headerShown: false }} component={Scanner} />
            <Tab.Screen name="Contacts" options={{ headerShown: false }} component={ContactListNavigator} />
        </Tab.Navigator>
    )
}


const Stack = createNativeStackNavigator();

function ContactListNavigator() {
    return (
        <Stack.Navigator initialRouteName='ContactList'>
            <Stack.Screen name="ContactList" options={{ headerShown: false }} component={SharedContacts} />
            <Stack.Screen name="SelectedContacts" options={{ headerShown: false }} component={SelectedContact} />
        </Stack.Navigator>
    )
}
