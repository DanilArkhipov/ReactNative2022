import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SwipeRender from "react-native-swipe-render";
import UserInfoList from './pages/UserInfoListPage';
import UserCallList from './pages/UserCallListPage';
import CallPage from './pages/CallPage';
import AvatarsPage from './pages/AvatarsPage';
import AddToCartPage from './pages/AddToCartPage';
import LikePage from './pages/LikePage';
import OrderAcceptedPage from './pages/OrderAcceptedPage';
import HeaderPage from './pages/HeaderPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SwipeRender
        data={[
            { page: UserInfoList() },
            { page: UserCallList() },
            { page: CallPage() },
            { page: AvatarsPage() },
            { page: AddToCartPage() },
            { page: LikePage() },
            { page: OrderAcceptedPage() },
            { page: HeaderPage() },
        ]}
        renderItem={({ item, index }) => {
            return (
                <View key={"SwipeRender-slide#" + index} style={{flex: 1, backgroundColor: "#FFF"}} children={item.page}>
                </View>
            );
        }}

        // OPTIONAL PROP USAGE.
        index={0} // default 0
        loop={false} // default false
        loadMinimal={true} // default false
        loadMinimalSize={2}
        horizontal={true} // default true

        enableAndroidViewPager={false} // default ScrollView
        // TO ENABLE AndroidViewPager:
        // react-native >= 0.60 - install @react-native-community/viewpager separately
        // react-native < 0.60 - ready to go!
    />
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7d7d7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
