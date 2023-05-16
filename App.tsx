/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';
import DonutChart from './DonutChart';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <DonutChart />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
