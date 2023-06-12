import React, {useRef} from 'react';
import {Box, StatusBar} from 'native-base';
import useColor from '../../hooks/useColor';
import CardCom from '../../components/card/CardCom';
import {Animated, StyleSheet} from 'react-native';
import HeaderCom from '../../components/header/HeaderCom';
import {headerTop} from '../../components/header/constants';
import TagsCom from '../../components/tags/TagsCom';
import {useAppDispatch, useAppSelector} from '../../rtk/app/hooks';
import {setActiveTag} from '../../rtk/futures/tags/tagsSlice';
import {playFilter} from '../../rtk/futures/videos/videosSlice';

export default function Home() {
  const {isDark} = useColor();
  const dispatch = useAppDispatch();
  const screenY = useRef(new Animated.Value(0)).current;
  const diffClamp = Animated.diffClamp(screenY, 0, headerTop);
  const {filteredVideos} = useAppSelector(state => state.videos);
  const {tags, activeTag} = useAppSelector(state => state.tags);

  const translateY = diffClamp.interpolate({
    inputRange: [0, headerTop],
    outputRange: [0, -headerTop],
  });

  const handleSetTag = (tag: string) => {
    dispatch(setActiveTag(tag));
    dispatch(playFilter(tag));
  };

  return (
    <Box _dark={{bg: '#27272a'}} flex={1} _light={{bg: '#f5f5f4'}}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={isDark ? '#27272a' : '#f5f5f4'}
      />
      <Animated.View
        style={[styles.headerAnimation, {transform: [{translateY}]}]}>
        <HeaderCom />
        <TagsCom tags={tags} activeTag={activeTag} onPress={handleSetTag} />
      </Animated.View>
      <Animated.FlatList
        contentContainerStyle={{paddingTop: headerTop}}
        showsVerticalScrollIndicator={false}
        data={filteredVideos}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <CardCom {...{item}} />}
        onScroll={e => {
          screenY.setValue(e.nativeEvent.contentOffset.y);
        }}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  headerAnimation: {
    zIndex: 4,
    elevation: 4,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
});
