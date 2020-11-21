import React, { useEffect } from 'react';
import { Platform, StyleSheet } from 'react-native';;
import Controller from './Controller';
import { Provider } from 'react-redux';
import store from './data/store';
import { MyHeroService } from './api/Service';
import MyHeroAlerts from './api/Alerts';
import BackgroundTimer from 'react-native-background-timer';


export const API_LINK = "http://146.59.227.90:3333"

const App = () => {
  useEffect(() => {
    if (Platform.OS == "ios") {
      setTimeout(() => {
        MyHeroService.requestLocationPermission();
        MyHeroService.initialize();
      }, 1000)
      return
    } else {
      try {
        setTimeout(() => {
          MyHeroService.requestLocationPermission();
          MyHeroService.initialize();
        }, 1000)
      } catch {
        return
      }
    }
  })

  return (
    <Provider store={store}>
      <Controller />
    </Provider>
  );
}

BackgroundTimer.runBackgroundTimer(() => { 
  MyHeroAlerts.GetAlerts();
}, 20000);

export default App;
