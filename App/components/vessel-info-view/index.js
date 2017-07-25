import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  View,
  StyleSheet,
} from 'react-native';

import {
  Text,
} from 'react-native-elements';

class VesselInfo extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text h3>This is the vessel info component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default connect(null)(VesselInfo);