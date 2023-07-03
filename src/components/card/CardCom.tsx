import React from 'react';
import {Avatar, Box, HStack, VStack, Text, Pressable, Image} from 'native-base';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RF, videoHeight} from '../../constants/dimensions';
import useColor from '../../hooks/useColor';
import {viewsCalculate} from '../../utils/viewsCalculate';
import {useNavigation} from '@react-navigation/native';
import {navigationString} from '../../constants/navigationConst';

export default function CardCom({item}: any): React.JSX.Element {
  const {isDark} = useColor();
  const navigation = useNavigation();

  return (
    <Box px={'2'} py={'2'}>
      <Pressable
        h={videoHeight}
        bg={'dark.700'}
        onPress={() =>
          navigation.navigate(navigationString.playVideo, {
            data: item,
          })
        }>
        <Image
          alt=""
          source={{uri: item?.thumbnail}}
          style={{height: videoHeight, width: '100%', borderRadius: 10}}
        />
      </Pressable>
      <HStack w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
        <Avatar
          bg="indigo.500"
          source={{
            uri: item.avatar,
          }}>
          JB
        </Avatar>

        <VStack w={'70%'}>
          <Text
            noOfLines={2}
            _dark={{color: 'light.100'}}
            _light={{color: 'dark.100'}}
            fontSize={RF(1.9)}>
            {item.title}
          </Text>
          <HStack justifyContent={'space-between'} space={'1'}>
            <Text _dark={{color: 'light.100'}} fontSize={RF(1.5)}>
              {item.channelName}
            </Text>
            <Text _dark={{color: 'light.100'}} fontSize={RF(1.5)}>
              {viewsCalculate(item.views)}
            </Text>
            <Text _dark={{color: 'light.100'}} fontSize={RF(1.5)}>
              {item.cratedAt}
            </Text>
          </HStack>
        </VStack>
        <Pressable w={'10%'}>
          <MIcon
            name="dots-vertical"
            size={RF(3.5)}
            color={isDark ? '#fff' : '#000'}
          />
        </Pressable>
      </HStack>
    </Box>
  );
}
