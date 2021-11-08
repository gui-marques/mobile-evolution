// eslint-disable-next-line no-use-before-define
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Order from '../pages/Order';
import NewOrder from '../pages/Order/NewOrder';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
    initialRouteName="Home"
  >
    <Auth.Screen name="Signin" component={Signin} />
    <Auth.Screen name="Signup" component={Signup} />
    <Auth.Screen name="Home" component={Home} />
    <Auth.Screen name="Order" component={Order} />
    <Auth.Screen name="NewOrder" component={NewOrder} />
  </Auth.Navigator>
);

export default AuthRoutes;
