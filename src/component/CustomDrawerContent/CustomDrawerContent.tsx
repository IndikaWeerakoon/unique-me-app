import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { authAction } from "../../redux/slices/auth.slice";

export function CustomDrawerContent(props: DrawerContentComponentProps) {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(authAction.logout())
    }
    return (
      <DrawerContentScrollView {...props}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
           
            label="Home"
            onPress={() => {}}
          />
          <DrawerItem
            
            label="Edit Profile"
            onPress={() => {}}
          />
          <DrawerItem
            
            label="Logout"
            onPress={() => {}}
          />
        </Drawer.Section>
        <DrawerItemList {...props} />
        <DrawerItem label="Logout" onPress={logout} />
      </DrawerContentScrollView>
    );
  }

  const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      marginTop: 20,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });