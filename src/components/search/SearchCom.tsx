import {HStack, Icon, Input, Pressable} from 'native-base';
import React, {useState} from 'react';
import IIcon from 'react-native-vector-icons/Ionicons';
import {RF, RH, RW} from '../../constants/dimensions';
import useColor from '../../hooks/useColor';
import {useAppDispatch} from '../../rtk/app/hooks';
import {playFilter} from '../../rtk/futures/videos/videosSlice';
import {useNavigation} from '@react-navigation/native';

export default function SearchCom() {
  const navigation = useNavigation();
  const {isDark} = useColor();
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();

  const handleSearchSubmit = () => {
    if (inputValue !== '') {
      dispatch(playFilter(inputValue));
    }
    navigation.goBack();
  };

  return (
    <HStack
      h={RH(8)}
      w={RW(96)}
      justifyContent={'space-between'}
      alignItems={'center'}>
      <Pressable w={'10%'} onPress={() => navigation.goBack()}>
        <IIcon
          name="arrow-back"
          size={RF(4)}
          color={isDark ? '#fff' : '#000'}
        />
      </Pressable>

      <Input
        value={inputValue}
        onChangeText={setInputValue}
        w={'90%'}
        size="xs"
        placeholder="Search MyTube"
        fontSize={RF(2)}
        fontFamily="mono"
        _light={{
          bg: 'dark.700',
          color: 'dark.200',
          placeholderTextColor: 'dark.200',
        }}
        _dark={{
          bg: 'light.700',
          color: 'light.200',
          placeholderTextColor: 'light.200',
        }}
        _focus={{
          borderWidth: 0,
          _dark: {bg: 'light.700'},
          _light: {bg: 'dark.700'},
        }}
        autoCapitalize="sentences"
        autoCorrect={true}
        keyboardType="default"
        returnKeyType="search"
        autoFocus={true}
        onSubmitEditing={handleSearchSubmit}
        clearButtonMode="while-editing"
        InputRightElement={
          <Pressable>
            <Icon
              as={<IIcon name="close" />}
              size={RF(3)}
              mr="2"
              _dark={{color: 'light.200'}}
              _light={{color: 'dark.200'}}
            />
          </Pressable>
        }
      />
    </HStack>
  );
}
