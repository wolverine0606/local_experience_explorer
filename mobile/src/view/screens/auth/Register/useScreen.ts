import isUndefined from 'lodash.isundefined';
import {useRef, useState} from 'react';
import {useAppTheme} from '~/view/theme';

export const useInputPerformant = (initValue: string) => {
  const [value, setValue] = useState(initValue);
  const inputValueRef = useRef<string>(initValue);

  const onTextChange = (text: string) => {
    inputValueRef.current = text;
    setValue(text);
  };

  return {value, valueRef: inputValueRef, onTextChange};
};
export const useScreen = () => {
  const {value: email, onTextChange: onEmailChange} = useInputPerformant('');

  const {value: password, onTextChange: onPasswordChange} =
    useInputPerformant('');

  return {email, password, onEmailChange, onPasswordChange};
};
