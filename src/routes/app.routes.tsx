import React, {ReactNode} from 'react';
import {DrawerActions} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {createStackNavigator} from '@react-navigation/stack';
//Styles and Components
import {PrimaryText} from '../styles';
import {
  LogoContainer,
  Container,
  DrawerHeader,
  DrawerBody,
  DrawerItem,
} from './styles';

//Pages
import Home from '../pages/Home';
import Details from '../pages/Details';
import Add from '../pages/Add';

//Assets
import logo from '../assets/logo.png';

//Navigation Instances
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

interface ScreenOptions {
  headerTitle: ReactNode;
  headerBackImage: ReactNode;
  headerBackTitleVisible: boolean;
  headerTitleAlign: string;
  headerLeftContainerStyle: object;
}
const ScreenOptions: ScreenOptions = {
  headerTitle: () => <LogoContainer source={logo} />,
  headerBackImage: () => <FeatherIcon name="chevron-left" size={24} />,
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerLeftContainerStyle: {
    marginLeft: 20,
  },
};

const Header = (props: any) => {
  return (
    <Container>
      <DrawerHeader>
        <DrawerContentScrollView {...props}>
          <FeatherIcon
            onPress={() =>
              props.navigation.dispatch(DrawerActions.closeDrawer())
            }
            name="menu"
            size={25}
          />
        </DrawerContentScrollView>
      </DrawerHeader>
      <DrawerBody>
        <DrawerItem onPress={() => props.navigation.navigate('Home')}>
          <PrimaryText fontSize={22}>Navers</PrimaryText>
        </DrawerItem>
        <DrawerItem>
          <PrimaryText fontSize={22}>Sair</PrimaryText>
        </DrawerItem>
      </DrawerBody>
    </Container>
  );
};

const DrawerRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      cardStyle: {backgroundColor: '#E5E5E5'},
    }}
    initialRouteName="Home">
    <Stack.Screen
      options={({navigation}) => ({
        ...ScreenOptions,
        headerLeft: () => (
          <FeatherIcon
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            name="menu"
            size={25}
          />
        ),
      })}
      name="Home"
      component={Home}
    />
    <Stack.Screen options={ScreenOptions} name="Details" component={Details} />
    <Stack.Screen options={ScreenOptions} name="Add" component={Add} />
  </Stack.Navigator>
);

const AuthRoutes: React.FC = () => (
  <Drawer.Navigator drawerContent={(props) => <Header {...props} />}>
    <Stack.Screen name="Home" component={DrawerRoutes} />
  </Drawer.Navigator>
);

export default AuthRoutes;
