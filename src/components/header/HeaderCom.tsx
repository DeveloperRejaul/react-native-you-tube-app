import React from 'react';
import {HStack, Text, Pressable, useColorMode, Avatar, Box} from 'native-base';
import AIcon from 'react-native-vector-icons/AntDesign';
import IIcon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import useColor from '../../hooks/useColor';
import {RF} from '../../constants/dimensions';
import {headerHeight} from './constants';
import {navigationString} from '../../constants/navigationConst';
import {useNavigation} from '@react-navigation/native';

export default function HeaderCom(): React.JSX.Element {
  const {isDark} = useColor();
  const navigation = useNavigation();

  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      _dark={{bg: 'dark.100'}}
      _light={{bg: 'light.100'}}
      px={'4'}
      h={headerHeight}>
      <HStack alignItems={'center'} space={'2'}>
        <AIcon name="youtube" color="#fd0302" size={RF(3.5)} />
        <Text fontSize={RF(2.3)} fontFamily={'mono'} fontWeight={'700'}>
          MyTube
        </Text>
      </HStack>
      <HStack space={'6'}>
        <Pressable>
          <MIcon
            name="file-link-outline"
            color={isDark ? '#f5f5f4' : '#27272a'}
            size={RF(2.5)}
          />
        </Pressable>

        <Pressable>
          <Box
            bg={'#fd0302'}
            w="5"
            h="4"
            borderRadius="md"
            left="50%"
            position={'absolute'}
            zIndex={4}
            justifyContent={'center'}
            alignItems={'center'}>
            <Text
              _dark={{color: 'light.100'}}
              _light={{color: 'dark.100'}}
              fontWeight={'bold'}
              fontSize={'sm'}>
              {'9+'}
            </Text>
          </Box>
          <IIcon
            name="notifications-outline"
            color={isDark ? '#f5f5f4' : '#27272a'}
            size={RF(2.5)}
          />
        </Pressable>

        <Pressable onPress={() => navigation.navigate(navigationString.search)}>
          <AIcon
            name="search1"
            color={isDark ? '#f5f5f4' : '#27272a'}
            size={RF(2.5)}
          />
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate(navigationString.profile)}>
          <Avatar
            bg="indigo.500"
            size={RF(2.7)}
            source={{
              uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}>
            JB
          </Avatar>
        </Pressable>
      </HStack>
    </HStack>
  );
}
