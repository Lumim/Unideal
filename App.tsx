import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme, Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import all screens
import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import FilesScreen from './screens/FilesScreen';
import ProfileScreen from './screens/ProfileScreen';
import ChatScreen from './screens/ChatScreen';
import UniversityListScreen from './screens/UniversityListScreen';
import UniversityScreen from './screens/UniversityScreen';
import JobsScreen from './screens/JobsScreen';
import JobDetailScreen from './screens/JobDetailScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import HousingScreen from './screens/HousingScreen';
import HousingListScreen from './screens/HousingListScreen';
import DrivingLisenceApplyScreen from './screens/DrivingLisenceApplyScreen';
import OtherImportantServicesScreen from './screens/OtherImportantServicesScreen';
import ServiceDetailScreen from './screens/ServiceDetailScreen';
import ContactBookScreen from './screens/ContactBookScreen'

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000',
    accent: '#FF4081',
  },
};

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'News') {
            iconName = focused ? 'newspaper-variant' : 'newspaper-variant-outline';
          } else if (route.name === 'Files') {
            iconName = focused ? 'file-document' : 'file-document-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chat' : 'chat-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Files" component={FilesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
  );
}

function UniversityStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UniversityList"
        component={UniversityListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="University"
        component={UniversityScreen}
        options={({ route }) => ({
          title: route.params?.universityName || 'University Details'
        })}
      />
    </Stack.Navigator>
  );
}

function HousingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Housing Offers"
        component={HousingListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HousingDetail"
        component={HousingScreen}
        options={({ route }) => ({
          title: route.params?.housingName || 'Housing Details'
        })}
      />
    </Stack.Navigator>
  );
}

function JobsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JobsList"
        component={JobsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="JobDetail"
        component={JobDetailScreen}
        options={({ route }) => ({
          title: route.params?.jobTitle || 'Job Details'
        })}
      />
    </Stack.Navigator>
  );
}

function OtherImportantServicesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OtherImportantServices"
        component={OtherImportantServicesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ServiceDetail"
        component={ServiceDetailScreen}
        options={({ route }) => ({
          title: route.params?.service.title || 'Service Details'
        })}
      />
    </Stack.Navigator>
  );
}

function CustomNavigationBar({ navigation, route, options }) {
  return (
    <Appbar.Header>
      {navigation.canGoBack() ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
      )}
      <Appbar.Content title={options.title || route.name} />
    </Appbar.Header>
  );
}
/* function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} initialParams={{ onLogin: handleLogin }} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
          </Stack.Navigator>
  )
} */
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }
  return (
    <PaperProvider theme={theme}>
        <NavigationContainer>
        {isAuthenticated ? (
          <Drawer.Navigator
            initialRouteName="Main"
            screenOptions={{
              header: (props) => <CustomNavigationBar {...props} />,
            }}
          >
            <Drawer.Screen name="Main" component={MainTabs} />
            <Drawer.Screen name="Universities" component={UniversityStack} />
            <Drawer.Screen name="Jobs" component={JobsStack} />
            <Drawer.Screen name="Housing" component={HousingStack} />
            <Drawer.Screen name="Exchange Driving License" component={DrivingLisenceApplyScreen} />
            <Drawer.Screen name="Other Important Services" component={OtherImportantServicesStack} />
            <Drawer.Screen name="Contact Book" component={ContactBookScreen} />
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} initialParams={{ onLogin: handleLogin }} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        </Stack.Navigator>
        )}
      </NavigationContainer>
    </PaperProvider>
  );
}