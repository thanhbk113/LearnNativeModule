/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  NativeModules
} from 'react-native';

function App(): React.JSX.Element {

  const ToastService = NativeModules.ToastModule
   return (
     <SafeAreaView
      style={styles.container}
     >
      <TouchableOpacity onPress={() => ToastService.showToast('Hello World')}>
        <View style={styles.button}>
          <Text>Click here to display toast</Text>
        </View>
      </TouchableOpacity>
     </SafeAreaView>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'cyan',
    padding: 10,
  },
});

export default App;
