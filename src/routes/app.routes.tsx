// eslint-disable-next-line no-use-before-define
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
// import Order from '../pages/Order';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
    initialRouteName="Home"
  >
    <App.Screen name="Home" component={Home} />
    {/* <App.Screen name="Order" component={Order} /> */}
  </App.Navigator>
);

export default AppRoutes;
