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
  username: string;
  password: string;
  showError: boolean;
  showUserError: boolean;
  showEye: boolean;
  showCheckuser: boolean;
}

interface IProps {
  onStepperText: ({}) => void;
}

class LoginScreen extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showError: false,
      showEye: true,
      showUserError: false,
      showCheckuser: false,
    };
  }

  validatePassword = (password: string) => {
    const passwordRegEx = /^.{5,}$/;
    return passwordRegEx.test(password);
  };

  validateUsername = (username: string) => {
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegEx.test(username);
  };

  onChangePasswordInput = (text: string) => {
    this.setState(prevState => ({
      ...prevState,
      password: text,
    }));

    // if (!this.validatePassword(this.state.password)) {
    //   this.setState(prevState => ({
    //     ...prevState,
    //     showError: true,
    //   }));
    // } else {
    //   this.setState(prevState => ({
    //     ...prevState,
    //     showError: false,
    //   }));
    // }
  };

  onChangeUserInput = (text: string) => {
    this.setState(prevState => ({
      ...prevState,
      username: text,
    }));

    // if (!this.validateUsername(this.state.username)) {
    //   this.setState(prevState => ({
    //     ...prevState,
    //     showUserError: true,
    //     showCheckuser: false,
    //   }));
    // } else {
    //   this.setState(prevState => ({
    //     ...prevState,
    //     showUserError: false,
    //     showCheckuser: true,
    //   }));
    // }
  };

  onPressEyeIcon = () => {
    this.setState(prevState => ({
      ...prevState,
      showEye: !prevState.showEye,
    }));
  };

  onPressLoginButton = () => {
    const {username, password, showError} = this.state;
    if (username && password) {
      console.log('99', username,password)
      this.props.onStepperText({id: 2, name: 'OTP', isActive: false})

    } else {
      this.setState(prevState => ({
        ...prevState,
        showError: !prevState.showError,
        showUserError: !prevState.showUserError,
      }));
    }
  };

  render() {
    const {
      username,
      password,
      showError,
      showEye,
      showUserError,
      showCheckuser,
    } = this.state;
    return (
      <View>
        <View>
          <Text style={styles.header}>Sign Up</Text>
        </View>
        <View style={styles.textInputContainer}>
          <View style={styles.emailContainer}>
            <View style={styles.emailInput}>
              <TextInput
                onChangeText={this.onChangeUserInput}
                value={username}
                placeholder="Full Name"
                placeholderTextColor="black"
              />
              {showCheckuser ? (
                <Icon style={styles.checkIcon} name="check" size={20} />
              ) : (
                <Icon style={styles.checkIconFalse} name="check" size={20} />
              )}
            </View>
            {showUserError && (
              <View style={styles.errorUserContainer}>
                <Text style={styles.error}>
                  * Email Address Required & should be valid...
                </Text>
              </View>
            )}
          </View>

          <View>
            <View style={styles.passwordContainer}>
              <View style={styles.passwordInput}>
                <TextInput
                  // secureTextEntry={showEye}
                  onChangeText={this.onChangePasswordInput}
                  value={password}
                  placeholder="Phone Number"
                  placeholderTextColor="black"
                  maxLength={10}
                  keyboardType='numeric'
                />
                {/* {showEye ? (
                  <TouchableOpacity
                    onPress={this.onPressEyeIcon}
                    style={styles.eyeIcon}>
                    <Icon name="eye-slash" size={20} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={this.onPressEyeIcon}
                    style={styles.eyeIcon}>
                    <Icon name="eye" size={20} />
                  </TouchableOpacity>
                )} */}
              </View>
            </View>
            {showError && (
              <View style={styles.errorContainer}>
                <Text style={styles.error}>
                  * Password should be in 6 characters or more..
                </Text>
              </View>
            )}
            {/* <View style={styles.forgetContainer}>
              <Text style={styles.forgetText}>Forgot your password?</Text>
              <Icon
                name="long-arrow-right"
                style={styles.longArrowIcon}
                size={15}
              />
            </View> */}
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.onPressLoginButton}>
            <Text style={styles.button}>SIGN UP</Text>
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
    width: 120,
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

export default LoginScreen;
