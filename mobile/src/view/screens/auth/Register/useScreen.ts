import isUndefined from 'lodash.isundefined';
import {useRef, useState} from 'react';
import {useAppNavigation} from '~/utils';
import {useAppTheme} from '~/view/theme';

export const useInputPerformant = (initValue: string) => {
  const [value, setValue] = useState(initValue);
  const inputValueRef = useRef<string>(initValue);

  const onTextChange = (text: string) => {
    inputValueRef.current = text == '' ? inputValueRef.current : text;
    setValue(text);
  };

  return {value, valueRef: inputValueRef, onTextChange};
};

export const useScreen = () => {
  const nav = useAppNavigation();

  const {value: email, onTextChange: onEmailChange} = useInputPerformant('');

  const {value: password, onTextChange: onPasswordChange} =
    useInputPerformant('');

  const onLoginPress = () => {
    console.log('Function not implemented.');
    nav.navigate('Tabs', {screen: 'MyProfile'});
  };

  return {email, password, onEmailChange, onPasswordChange, onLoginPress};
};
