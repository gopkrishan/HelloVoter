import React from 'react';

import {
  Text,
  TouchableOpacity,
  View,
  Image,
  YellowBox,
} from 'react-native';

import { Root } from 'native-base';
import { WalkthroughProvider } from 'react-native-walkthrough';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never',
  'positiveButton',
  'perform a React state update on an unmounted component',
]);

import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreenPage from './HomeScreenPage';
import InvitePage from './InvitePage';
import SettingsPage from './SettingsPage';
import CanvassingPage from './CanvassingPage';
import SurveyPage from './SurveyPage';
import ConvertLegacyPage from './ConvertLegacyPage';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SettingsButton from './settings-button';

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreenPage,
    navigationOptions: ({navigation}) => ({
      headerTitle: () => (
        <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
          <Text style={{fontSize:20}}>HelloVoter</Text>
          <Image
            source={require("../img/HVlogo.png")}
            style={{width:25, height:25, marginLeft: 15}}
          />
        </View>
      ),
      headerRight: () => (<SettingsButton nav={navigation} />),
    }),
  },
  Invite: {
    screen: InvitePage,
    navigationOptions: ({navigation}) => ({
      title: 'Invited',
      headerLeft: () => null,
    }),
  },
  Settings: {
    screen: SettingsPage,
    navigationOptions: ({navigation}) => ({
      title: 'Settings',
      headerLeft: () => null,
    }),
  },
  Canvassing: {
    screen: CanvassingPage,
    navigationOptions: ({navigation}) => ({
      title: 'Canvassing',
      headerLeft: () => (<GoBack nav={navigation} />),
      headerRight: () => (<WalkthroughHeader nav={navigation} />),
      gestureEnabled: false,
    }),
  },
  Survey: {
    screen: SurveyPage,
    navigationOptions: ({navigation}) => ({
      title: 'Canvassing Form',
      headerLeft: () => null,
    }),
  },
  ConvertLegacy: {
    screen: ConvertLegacyPage,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => null,
    }),
  }
});

const GoBack = (props) => (
  <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => props.nav.goBack()}>
    <Icon name="times-circle" size={30} style={{marginLeft: 10, margin: 5}} />
    <Text>Exit</Text>
  </TouchableOpacity>
);

const WalkthroughHeader = (props) => (
    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => props.nav.startWalkthrough()}>
      <Icon name="question" size={30} style={{marginRight: 10, margin: 5}} />
    </TouchableOpacity>
);

const App = createAppContainer(AppNavigator);

export default () =>
  <WalkthroughProvider>
    <Root>
      <App />
    </Root>
  </WalkthroughProvider>;
