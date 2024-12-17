import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IState {
 firstName: string;
 lastName: string;
}

interface IProps {
  onStepperText: ({}) => void;
}

class CreateAccount extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    // console.log('29-rpops',this.props.onStepperText);
    this.state = {
      firstName: '',
      lastName: '',
    };
  }

  onChangeFirstName = (text: string) => {
    this.setState(prevState => ({
      ...prevState,
      firstName: text,
    }));
  };

  onChangeLastName = (text: string) => {
    this.setState(prevState => ({
      ...prevState,
      lastName: text,
    }));
  };

  onPressUpdateButton = () => {
    this.props.onStepperText({id: 4, name: 'Verify & Submit', isActive: false, isCompleted: false})
  }




  render() {
    const {firstName, lastName} = this.state
    return (
      <View>
        <View>
          <Text style={styles.header}>Create Account</Text>
        </View>
        <View style={styles.textInputContainer}>
          <View style={styles.emailContainer}>
            <View style={styles.emailInput}>
              <TextInput
                onChangeText={this.onChangeFirstName}
                value={firstName}
                placeholder="First Name"
                placeholderTextColor="black"
              />
            
            </View>

          </View>

          <View>
            <View style={styles.passwordContainer}>
              <View style={styles.passwordInput}>
                <TextInput
                //   secureTextEntry={showEye}
                  onChangeText={this.onChangeLastName}
                  value={lastName}
                  placeholder="Last Name"
                  placeholderTextColor="black"
                />
              </View>
            </View>
         
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.onPressUpdateButton}
            >
            <Text style={styles.button}>UPDATE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: responsiveHeight(100),
    justifyContent: 'space-between',
  },
  textInputContainer: {
    width: '100%',
    marginTop: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 10,
  },

  emailInput: {
    width: responsiveWidth(95),
    margin: responsiveHeight(1),
    height: 64,
    backgroundColor: 'white',
    color: 'black',
    paddingLeft: 15,
    boxShadow: '0px 1px 12px 0px #0000000D',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12,
  },
  passwordContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordInput: {
    width: responsiveWidth(95),
    margin: responsiveHeight(0),
    height: 64,
    backgroundColor: 'white',
    boxShadow: '0px 1px 12px 0px #0000000D',
    color: 'black',
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12,
  },

  forgetContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  forgetText: {
    fontSize: 14,
    color: '#222222',
    fontFamily: 'Roboto-Medium',
  },
  longArrowIcon: {
    marginTop: 0,
    color: '#DB3022',
    marginLeft: 8,
  },
  submitButton: {
    width: responsiveWidth(95),
    height: 48,
    backgroundColor: '#DB3022',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 25,
    marginVertical: responsiveHeight(6),
  },
  button: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
  checkIcon: {
    color: 'green',
    alignSelf: 'center',
    paddingRight: 10,
  },
  checkIconFalse: {
    display: 'none',
    marginLeft: -40,
    color: 'green',
    borderWidth: 1,
  },
  error: {
    color: 'red',
    textAlign: 'left',
  },
  errorContainer: {
    alignSelf: 'flex-start',
    marginTop: 7,
  },

  eyeIcon: {
    alignSelf: 'center',
    paddingRight: 10,
  },
  errorUserContainer: {
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  iconSize: {
    top: 8,
    left: 10,
    width: responsiveWidth(6),
  },
  header: {
    fontSize: 34,
    width: 170,
    paddingTop: 25,
    left: 14,
    fontFamily: 'Montserrat-Bold',
  },
  passwordIconContainer: {
    flexDirection: 'row',
  },
  angleStyle: {
    borderWidth: 1,
  },
});

export default CreateAccount;
