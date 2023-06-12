import React from 'react';
import {Avatar, Box, HStack, VStack, Text, Pressable, Image} from 'native-base';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RF} from '../../constants/dimensions';
import useColor from '../../hooks/useColor';
import {viewsCalculate} from '../../utils/viewsCalculate';

export default function CardCom({item}: any): React.JSX.Element {
  const {isDark} = useColor();

  return (
    <Box px={'2'} py={'2'}>
      <Box>
        <Image
          alt="Thumbnail"
          source={{uri: item?.thumbnail}}
          h={230}
          w={'100%'}
          borderRadius={'5'}
        />
      </Box>
      <HStack w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
        <Avatar
          bg="indigo.500"
          source={{
            uri: item.avatar,
          }}>
          JB
        </Avatar>

        <VStack w={'70%'}>
          <Text noOfLines={2} _dark={{color: 'light.100'}} fontSize={RF(1.9)}>
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
