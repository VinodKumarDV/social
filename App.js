import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './src/components/Login'; //completed
import Signup from './src/components/Signup'; //completed
import Resetpassword from './src/components/Resetpassword'; //completed
import MyProfile from './src/components/MyProfile'; //completed
import Profile from './src/components/Profile'; //completed
import EditProfile from './src/components/EditProfile';
import Connections from './src/components/Connections';
import List from './src/components/List';
import Messages from './src/components/Messages';
import Textmgs from './src/components/Textmgs';
import Post from './src/components/Post';
import Setings from './src/components/Setings'
import PrivacyPolicy from './src/components/PrivacyPolicy';
import Help from './src/components/Help';


import { StatusBar } from "react-native";
import TabNavigations from "./src/components/TabNavigation";


export default function App() {
  return (
    <>
       <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
      <TabNavigations />
      // <Help/>
    </>
  );
};
