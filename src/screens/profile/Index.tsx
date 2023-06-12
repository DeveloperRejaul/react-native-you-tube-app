import React from 'react';
import {
  Box,
  HStack,
  Pressable,
  Stack,
  VStack,
  Text,
  Divider,
  Avatar,
  Switch,
  useColorMode,
} from 'native-base';
import IIcon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {RF} from '../../constants/dimensions';
import useColor from '../../hooks/useColor';
import {useAppDispatch, useAppSelector} from '../../rtk/app/hooks';
import {toggleMode} from '../../rtk/futures/theme/theme.future';

export default function Index({navigation}: any): React.JSX.Element {
  const {isDark} = useColor();
  const {toggleColorMode} = useColorMode();
  const {isDark: theme} = useAppSelector(state => state.theme);
  const dispatch = useAppDispatch();

  const handleTheme = () => {
    toggleColorMode();
    dispatch(toggleMode());
  };

  return (
    <Box flex="1" _dark={{bg: 'dark.100'}} _light={{bg: 'light.100'}} px="4">
      <Stack mb="4" mt="2">
        <Pressable onPress={() => navigation.goBack()}>
          <IIcon name="close" size={RF(3.5)} color={isDark ? '#fff' : '#000'} />
        </Pressable>
      </Stack>

      <VStack space={'3'}>
        <HStack alignItems={'flex-start'} justifyContent={'space-between'}>
          <HStack space={'5'}>
            <Avatar
              size={'sm'}
              bg="indigo.500"
              source={{
                uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}>
              JB
            </Avatar>
            <VStack>
              <Text
                _dark={{color: 'light.200'}}
                _light={{color: 'dark.200'}}
                fontSize={'lg'}
                fontWeight={'medium'}
                fontFamily={'mono'}>
                Developer Rejaul
              </Text>
              <Text
                _dark={{color: '#006eff'}}
                _light={{color: '#4696ff'}}
                fontSize={'md'}
                fontWeight={'medium'}
                fontFamily={'mono'}>
                Manage your Google Account
              </Text>
            </VStack>
          </HStack>
          <Pressable>
            <MIcon
              name="keyboard-arrow-right"
              size={RF(3)}
              color={isDark ? '#fff' : '#000'}
            />
          </Pressable>
        </HStack>

        <Divider my="2" _light={{bg: 'muted.800'}} _dark={{bg: 'muted.50'}} />

        <HStack space={'5'} alignItems={'center'}>
          <IIcon
            name="person-outline"
            size={RF(3)}
            color={isDark ? '#fff' : '#000'}
          />
          <Text fontSize={'md'} fontWeight={'normal'} fontFamily={'mono'}>
            Your channel
          </Text>
        </HStack>
        <HStack space={'5'} alignItems={'center'}>
          <IIcon
            name="ios-bar-chart-outline"
            size={RF(3)}
            color={isDark ? '#fff' : '#000'}
          />
          <Text fontSize={'md'} fontWeight={'normal'} fontFamily={'mono'}>
            Time watched
          </Text>
        </HStack>
        <HStack space={'5'} alignItems={'center'}>
          <FIcon name="dollar" size={RF(3)} color={isDark ? '#fff' : '#000'} />
          <Text fontSize={'md'} fontWeight={'normal'} fontFamily={'mono'}>
            Purchases and memberships
          </Text>
        </HStack>
        <HStack space={'5'} alignItems={'center'}>
          <IIcon
            name="ios-person-circle-outline"
            size={RF(3)}
            color={isDark ? '#fff' : '#000'}
          />
          <Text fontSize={'md'} fontWeight={'normal'} fontFamily={'mono'}>
            Your data is MyTube
          </Text>
        </HStack>

        <Divider my="2" _light={{bg: 'muted.800'}} _dark={{bg: 'muted.50'}} />

        <HStack space={'5'} alignItems={'center'}>
          <IIcon
            name="settings-outline"
            size={RF(3)}
            color={isDark ? '#fff' : '#000'}
          />
          <Text fontSize={'md'} fontWeight={'normal'} fontFamily={'mono'}>
            Setting
          </Text>
        </HStack>
        <HStack space={'5'} alignItems={'center'}>
          <IIcon
            name="md-help-circle-outline"
            size={RF(3)}
            color={isDark ? '#fff' : '#000'}
          />
          <Text fontSize={'md'} fontWeight={'normal'} fontFamily={'mono'}>
            Help and feedback
          </Text>
        </HStack>

        <HStack alignItems={'center'}>
          <Switch size="sm" onToggle={handleTheme} isChecked={theme} />
          <Text fontSize={'md'} fontWeight={'normal'} fontFamily={'mono'}>
            Change Theme
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}
