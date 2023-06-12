import React from 'react';
import {
  Actionsheet,
  Text,
  HStack,
  Pressable,
  Heading,
} from 'native-base';
import {RF} from '../../constants/dimensions';
import IIcon from 'react-native-vector-icons/Ionicons';
import AIcon from 'react-native-vector-icons/AntDesign';
import OIcon from 'react-native-vector-icons/Octicons';
import useColor from '../../hooks/useColor';

export default function SheetCom({isOpen, onClose}: any): React.JSX.Element {
  const {isDark} = useColor();

  return (
    <>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <HStack justifyContent={'space-around'} w={'125%'}>
            <Heading fontFamily={'mono'} size="lg">
              Create
            </Heading>
            <Pressable onPress={onClose}>
              <IIcon
                name="close"
                size={RF(4)}
                color={isDark ? '#fff' : '#000'}
              />
            </Pressable>
          </HStack>
          <Actionsheet.Item>
            <HStack alignItems={'center'} space={'6'}>
              <AIcon
                name="link"
                color={isDark ? '#f5f5f4' : '#27272a'}
                size={RF(3.4)}
              />
              <Text fontWeight={'medium'} fontSize={'md'}>
                Create a Short
              </Text>
            </HStack>
          </Actionsheet.Item>
          <Actionsheet.Item>
            <HStack alignItems={'center'} space={'6'}>
              <OIcon
                name="upload"
                color={isDark ? '#f5f5f4' : '#27272a'}
                size={RF(3.4)}
              />
              <Text fontWeight={'medium'} fontSize={'md'}>
                Upload a video
              </Text>
            </HStack>
          </Actionsheet.Item>
          <Actionsheet.Item>
            <HStack alignItems={'center'} space={'6'}>
              <IIcon
                name="radio-outline"
                color={isDark ? '#f5f5f4' : '#27272a'}
                size={RF(3.4)}
              />
              <Text fontWeight={'medium'} fontSize={'md'}>
                Go live
              </Text>
            </HStack>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}
