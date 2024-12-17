import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import LoginScreen from './LoginScreen';
import OtpScreen from './OtpScreen';
import CreateAccount from './CreateAccount';
import Icon from 'react-native-vector-icons/FontAwesome';
import Verify from './Verify';
interface IState {
  stepperArray: IStepper[];
  // onStepperText: () => void,
}

export interface IStepper {
  id: number;
  name: string;
  isActive: boolean;
  isCompleted: boolean;
}

interface IProps {
  // onStepperText: () => void;
}

class Stepper extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      stepperArray: [
        {id: 1, name: 'Login', isActive: true, isCompleted: false},
        {id: 2, name: 'OTP', isActive: false, isCompleted: false},
        {id: 3, name: 'Create Account', isActive: false, isCompleted: false},
        {id: 4, name: 'Verify & Submit', isActive: false, isCompleted: false},
      ],

    };
  }

  onPressStepperText = (eachItem: IStepper) => {
    // console.log('18', eachItem);
    const {stepperArray} = this.state;
    const backId = eachItem.id - 1;
    const updateStepper = stepperArray.map(everyItem => {
      if (everyItem.id === eachItem.id) {
        everyItem.isActive = true;
      } else {
        everyItem.isActive = false;
      }

      if (everyItem.id === backId) {
        everyItem.isCompleted = true;
      }
      return everyItem;
    });
    this.setState({stepperArray: updateStepper});
  };

  renderItemArray = (item: {index: number, item: IStepper}) => {
    // console.log('59',item)
    const eachItem = item.item;
    return (
      <>
        <TouchableOpacity onPress={() => this.onPressStepperText(eachItem)}>
          <View style={styles.mainContainer}>
            <View
              style={
                eachItem.isActive
                  ? styles.horiStyle
                  : eachItem.isCompleted
                  ? styles.horiStyleTrue
                  : styles.horiStyleFalse
              }>
              <View>
                 {/* <Text style={styles.eachItemText}>{eachItem.name}</Text> */}
                {eachItem.isCompleted && (
                  <View>
                    {/* <Text style={styles.eachItemText}>{eachItem.name}</Text> */}
                    <Icon
                      style={styles.checkIcon}
                      name="check"
                      color="#ffffff"
                      size={25}
                    />
                  </View>
                )}
              </View>
            </View>
            {eachItem.id === 4 ? null : (
              <View style={styles.lineContainer}>
                <Text
                  style={
                    eachItem.isActive
                      ? styles.lines
                      : eachItem.isCompleted
                      ? styles.linesCompletedTrue
                      : styles.linesFalse
                  }></Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </>
    );
  };
  render() {
    const {stepperArray} = this.state;
    // console.log('39-state', stepperArray);
    const LoginCondition = stepperArray[0].isActive;
    // const completedCondition = stepperArray[0].isCompleted;
    const OtpCondition = stepperArray[1].isActive;
    const accountCondition = stepperArray[2].isActive;
    const verifyCondition = stepperArray[3].isActive;
    // console.log('81',verifyCondition)

    return (
      <View>
        {/* <Text>Hello Stepper</Text> */}
        <View style={styles.allContainer}>
          <FlatList
            data={stepperArray}
            horizontal
            keyExtractor={item => item.id.toString()}
            renderItem={this.renderItemArray}
            contentContainerStyle={styles.containerStyles}
          />
        </View>

        {LoginCondition && (
          <LoginScreen onStepperText={this.onPressStepperText} />
        )}
        {OtpCondition && <OtpScreen onStepperText={this.onPressStepperText} />}
        {accountCondition && (
          <CreateAccount onStepperText={this.onPressStepperText} />
        )}
        {verifyCondition && <Verify />}

        {/* <OtpScreen /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -0.5,
    // marginLeft: 20
  },
  containerStyles: {
    width: responsiveWidth(100),
  },
  horiStyle: {
    width: 45,
    height: 45,
    // borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    // margin: 10,
    backgroundColor: '#222222',
  },
  horiStyleFalse: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderRadius: 50,
    color: '#222222'
    // padding: 5,
    // margin: 10,
  },
  eachItemText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 700,
    fontSize: 18,
  },
  eachItemTextFalse: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 18,
  },
  lineContainer: {
    // borderWidth: 1,
    // width: responsiveWidth(15),
  },
  lines: {
    height: 3,
    width: 55,
    // borderWidth: 1,
    backgroundColor: '#222222',
    // fontWeight: 800
  },
  linesFalse: {
    height: 3,
    width: 55,
    // borderWidth: 1,
    backgroundColor: 'gray',
  },
  linesCompletedTrue: {
    height: 3,
    width: 55,
    // borderWidth: 1,
    backgroundColor: 'red',
    // fontWeight: 800
  },
  allContainer: {
    margin: 30,
    // borderWidth: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
  },
  horiStyleTrue: {
    width: 45,
    height: 45,
    // borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    // margin: 10,
    backgroundColor: 'red',
  },
  checkIcon: {
    marginTop: 5,
    marginLeft: 2,
    // borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default Stepper;
