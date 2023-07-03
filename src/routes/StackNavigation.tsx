import React from 'react';
import {Profile, Search} from '../screens';
import {navigationString} from '../constants/navigationConst';
import PlayVideo from '../screens/play-video/PlayVideo';

export default function StackNavigation(Stack: any): React.JSX.Element {
  return (
    <>
      <Stack.Screen
        options={{
          animation: 'slide_from_bottom',
        }}
        component={Profile}
        name={navigationString.profile}
      />
      <Stack.Screen
        options={{
          animation: 'slide_from_bottom',
        }}
        component={Search}
        name={navigationString.search}
      />
      <Stack.Screen
        options={{
          animation: 'slide_from_bottom',
        }}
        component={PlayVideo}
        name={navigationString.playVideo}
      />
    </>
  );
}
