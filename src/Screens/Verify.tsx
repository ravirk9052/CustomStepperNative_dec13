import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default class Verify extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
            <Text style={styles.textLogin}>Login Successfull !!</Text>
          <Icon
            style={styles.checkIcon}
            name="check"
            color="green"
            size={50}
          />
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    container: {
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(20)
    },
    checkIcon: {
        color: 'green',
        alignSelf: 'center',
        paddingRight: 10,
      },
      textLogin: {
        fontSize: 20,
        fontWeight: 700,

      }
})
