import {Box} from 'native-base';
import React from 'react';
import {RW} from '../../constants/dimensions';
import SearchCom from '../../components/search/SearchCom';

export default function Search() {
  return (
    <Box
      flex={'1'}
      _light={{bg: 'light.100'}}
      _dark={{bg: 'dark.100'}}
      px={RW(2)}>
      <SearchCom />
    </Box>
  );
}
