import {Box, FlatList, Pressable, Text} from 'native-base';
import React from 'react';
import {headerHeight} from '../header/constants';
import {useAppSelector} from '../../rtk/app/hooks';

type AppProps = {
  tags: string[];
  activeTag: string;
  onPress: (tag: string) => void;
};

export default function TagsCom({
  tags,
  activeTag,
  onPress,
}: AppProps): React.JSX.Element {
  return (
    <Box
      _dark={{bg: 'dark.100'}}
      _light={{bg: 'light.100'}}
      alignItems={'center'}
      h={headerHeight}
      pb="2">
      <FlatList
        horizontal={true}
        data={tags}
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{alignItems: 'center'}}
        renderItem={({item}) => (
          <Pressable
            onPress={() => onPress(item)}
            px="4"
            py="2"
            h={'full'}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={'full'}
            mx="2"
            _dark={{
              bg: item === activeTag ? 'light.100' : 'dark.200',
            }}
            _light={{bg: item === activeTag ? 'dark.100' : 'light.200'}}>
            <Text
              _dark={{color: item === activeTag ? 'dark.100' : 'light.100'}}
              _light={{color: item === activeTag ? 'light.100' : 'dark.100'}}
              fontSize={'md'}
              fontWeight={'medium'}
              fontFamily={'mono'}>
              {item}
            </Text>
          </Pressable>
        )}
      />
    </Box>
  );
}
