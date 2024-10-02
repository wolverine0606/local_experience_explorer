import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../view/navigation/navigators/types';

export const useAppNavigation = () => {
  return useNavigation<NativeStackNavigationProp<AppStackParamList>>();
};
