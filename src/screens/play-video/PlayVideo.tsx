import React, {useEffect} from 'react';
import {Box, Image, Stack, Divider} from 'native-base';
import {RH, videoHeight, videoInfoHeight} from '../../constants/dimensions';
import useColor from '../../hooks/useColor';
import {handleRelatedVideos} from '../../rtk/futures/videos/videosSlice';
import {useAppDispatch, useAppSelector} from '../../rtk/app/hooks';
import CardCom from '../../components/card/CardCom';
import VideoInfo from '../../components/videoInfo/VideoInfo';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export default function PlayVideo({route}: any) {
  const {data} = route.params;
  const {isDark} = useColor();
  const dispatch = useAppDispatch();
  const {relatedVideos, videos} = useAppSelector(state => state.videos);
  const translationY = useSharedValue(50);

  let tag = '';
  useEffect(() => {
    const tags = data.title.split(' ');
    tags.filter(d => {
      if (d.toLowerCase() === 'react') {
        tag = 'react';
      } else if (d.toLowerCase() === 'java') {
        tag = 'java';
      } else if (d.toLowerCase() === 'javascript') {
        tag = 'javascript';
      } else if (d.toLowerCase() === 'python') {
        tag = 'python';
      } else if (d.toLowerCase() === 'c++') {
        tag = 'c++';
      } else if (d.toLowerCase() === 'html') {
        tag = 'html';
      }
    });
    dispatch(handleRelatedVideos(tag));
  }, []);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });

  const stylez = useAnimatedStyle(() => {
    const translateValue =
      translationY.value >= videoInfoHeight / 1.5 ? translationY.value : 0;

    return {
      transform: [
        {
          translateY: -translateValue,
        },
      ],
    };
  });

  return (
    <Stack>
      {/* video */}

      <Box>
        <Image
          alt=""
          source={{uri: data.thumbnail}}
          style={{height: videoHeight, width: '100%', borderRadius: 10}}
        />
      </Box>
      <Animated.View
        style={[
          {
            width: '100%',
            height: 100,
            backgroundColor: 'red',
            position: 'absolute',
            top: '60%',
            left: 0,
            right: 0,
            zIndex: 1000,
          },
          stylez,
        ]}
      />

      {/* Related Videos  */}
      <Animated.FlatList
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}
        data={videos}
        contentContainerStyle={{paddingBottom: RH(40)}}
        ListHeaderComponent={<VideoInfo data={data} />}
        renderItem={({item, index}) => (
          <Box>
            <CardCom {...{item, index}} />
            <Divider bg="#00000011" h="2" borderRadius={'md'} />
          </Box>
        )}
      />
    </Stack>
  );
}
