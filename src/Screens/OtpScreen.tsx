import React, {Component, createRef} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


interface IProps {
  onStepperText: ({}) => void;
}

interface IState {
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  otpCondition: null | boolean;
  seconds: number;
}

interface IStateTwo {
  value1: string;
  value2: string;
  value3: string;
  value4: string;
}

class OtpScreen extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      otpCondition: null,
      seconds: 30,
    };
    
  }

  componentDidMount() {
    const interval = setInterval(() => {
      this.setState(prevState => ({
        seconds: prevState.seconds - 1,
      }));
    }, 1000);
  }



  inputRefs = {
    ref0: createRef<TextInput>(),
    ref1: createRef<TextInput>(),
    ref2: createRef<TextInput>(),
    ref3: createRef<TextInput>(),
  };

  onHandleChangeValue = (index: number, text: string) => {
    const updatedState: {} = {[`value${index + 1}`]: text};
    this.setState(updatedState, () => {
      this.onChangeTextFocus(index, text);
    });
  };

  onChangeTextFocus = (index: number, text: string) => {
    const {value1, value2, value3, value4} = this.state;
    if (text !== '' && index < 4) {
      const nextRef = this.inputRefs[`ref${index + 1}`];
      nextRef?.current?.focus();
    } else if (text === '' && index >= 1) {
      const prevRef = this.inputRefs[`ref${index - 1}`];
      prevRef?.current?.focus();
    }
  };

  onKeyPressInputValue = (index: number, keyEvent: {key: string}) => {
    if (keyEvent.key == 'Backspace') {
      const updatedState: {} = {[`value${index + 1}`]: ''};
      this.setState(updatedState, () => {
        this.onChangeTextFocus(index - 1, '');
      });
    }
  };

  onPressNextBtn = () => {
    const {value1, value2, value3, value4} = this.state;

    if (value1 === '1' && value2 === '2' && value3 === '3' && value4 === '4') {
      this.props.onStepperText({
        id: 3,
        name: 'Create Account',
        isActive: false,
        isCompleted: false,
      });
    } else {
      this.setState({otpCondition: true});
    }
  };

  onPressResendBtn = () => {
    this.setState({value1: '', value2: '', value3: '', value4: ''})
  }

  render() {
    const {value1, value2, value3, value4, otpCondition, seconds} = this.state;
    const otpArray = Array(4).fill(0);
    return (
      <View style={styles.otpContainer}>
        <View style={styles.otpTextContainer}>
          <Text style={styles.otpText}>OTP Verification</Text>
        </View>
        <View style={styles.arrayContainer}>
          {otpArray.map((item, index) => (
            <View
              style={
                otpCondition
                  ? styles.inputTextContainerFalse
                  : styles.inputTextContainer
              }
              key={index}>
              <TextInput
                style={styles.inputText}
                onChangeText={(text: string) =>
                  this.onHandleChangeValue(index, text)
                }
                keyboardType="numeric"
                maxLength={1}
                //   value={value1}
                value={this.state[`value${index + 1}` as keyof IStateTwo]}
                // value={this.state[`value${index}` as keyof IState]}
                //   ref={this.inputRefs.ref1}
                // ref={this.inputRefs[`ref${index}` as typeof this.inputRefs ] }
                ref={
                  this.inputRefs[`ref${index}` as keyof typeof this.inputRefs]
                }
                onKeyPress={event =>
                  this.onKeyPressInputValue(index, event.nativeEvent)
                }
              />
            </View>
          ))}
        </View>

        <View style={styles.nextContainer}>
          <View>
            {seconds >= 0 ? (
              <View style={styles.expiresText}>
                <Text>OTP expires in: {seconds}</Text>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.nextBtnStyle}
                onPress={this.onPressResendBtn}>
                <Text style={styles.nextText}>Resend OTP</Text>
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity
            style={styles.nextBtnStyle}
            onPress={this.onPressNextBtn}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  otpContainer: {
    // borderWidth: 1,
    flexDirection: 'column',
    // justifyContent: 'space-around',
    // alignItems: 'center',
  },
  inputTextContainer: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  inputTextContainerFalse: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  inputText: {
    fontSize: 18,
  },
  otpTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  arrayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  otpText: {
    fontSize: 22,
  },
  nextContainer: {
    // borderWidth: 1,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  nextBtnStyle: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 12,
  },
  nextText: {
    fontWeight: 700,
    fontSize: 18,
  },
  expiresText: {
    // backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 12,
  },
});

export default OtpScreen;
