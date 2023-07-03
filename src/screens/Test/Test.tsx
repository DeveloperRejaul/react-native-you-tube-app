<Stack>
  {/* description  */}
  <HStack w="100%" py="2">
    <VStack w="90%">
      <Text
        noOfLines={2}
        _light={{color: 'dark.100'}}
        _dark={{color: 'light.100'}}
        fontWeight={'bold'}
        fontSize={RF(1.9)}>
        {data.title}
      </Text>
      <HStack space={'2'}>
        <Text
          _light={{color: 'dark.100'}}
          _dark={{color: 'light.100'}}
          fontWeight={'normal'}
          fontSize={RF(1.5)}>
          {viewsCalculate(data.views)}
        </Text>
        <Text
          _light={{color: 'dark.100'}}
          _dark={{color: 'light.100'}}
          fontWeight={'normal'}
          fontSize={RF(1.5)}>
          {data.cratedAt}
        </Text>
      </HStack>
    </VStack>
    <Pressable w="10%" alignItems={'center'}>
      <MIcon
        name="keyboard-arrow-down"
        size={20}
        color={isDark ? '#8d7373' : '#000'}
      />
    </Pressable>
  </HStack>

  {/* Reaction Part  */}
  <Box>
    <ScrollView horizontal={true} py="2" showsHorizontalScrollIndicator={false}>
      <Pressable mx="2" w={RW(16)} h={50} alignItems={'center'}>
        <AIcon
          name="like2"
          size={RF(3.2)}
          color={isDark ? '#ffffff' : '#00000062'}
        />

        <Text
          fontSize={RF(1.5)}
          fontWeight={'normal'}
          _dark={{color: 'light.300'}}
          _light={{color: 'dark.300'}}>
          Like
        </Text>
      </Pressable>
      <Pressable mx="2" w={RW(16)} h={50} alignItems={'center'}>
        <AIcon
          name="dislike2"
          size={RF(3.2)}
          color={isDark ? '#ffffff' : '#00000062'}
        />
        <Text
          fontSize={RF(1.5)}
          fontWeight={'normal'}
          _dark={{color: 'light.300'}}
          _light={{color: 'dark.300'}}>
          Dislike
        </Text>
      </Pressable>
      <Pressable mx="2" w={RW(16)} h={50} alignItems={'center'}>
        <IIcon
          name="md-chatbubbles-outline"
          size={RF(3.2)}
          color={isDark ? '#ffffff' : '#00000062'}
        />
        <Text
          fontSize={RF(1.5)}
          fontWeight={'normal'}
          _dark={{color: 'light.300'}}
          _light={{color: 'dark.300'}}>
          Live chat
        </Text>
      </Pressable>
      <Pressable mx="2" w={RW(16)} h={50} alignItems={'center'}>
        <MCIcon
          name="share-outline"
          size={RF(3.2)}
          color={isDark ? '#ffffff' : '#00000062'}
        />
        <Text
          fontSize={RF(1.5)}
          fontWeight={'normal'}
          _dark={{color: 'light.300'}}
          _light={{color: 'dark.300'}}>
          Share
        </Text>
      </Pressable>
      <Pressable mx="2" w={RW(16)} h={50} alignItems={'center'}>
        <AIcon
          name="link"
          size={RF(3.2)}
          color={isDark ? '#ffffff' : '#00000062'}
        />
        <Text
          fontSize={RF(1.5)}
          fontWeight={'normal'}
          _dark={{color: 'light.300'}}
          _light={{color: 'dark.300'}}>
          Create
        </Text>
      </Pressable>
      <Pressable mx="2" w={RW(16)} h={50} alignItems={'center'}>
        <MCIcon
          name="download-outline"
          size={RF(3.2)}
          color={isDark ? '#ffffff' : '#00000062'}
        />
        <Text
          fontSize={RF(1.5)}
          fontWeight={'normal'}
          _dark={{color: 'light.300'}}
          _light={{color: 'dark.300'}}>
          {' '}
          Download
        </Text>
      </Pressable>
      <Pressable mx="2" w={RW(16)} h={50} alignItems={'center'}>
        <IIcon
          name="md-cut-outline"
          size={RF(3.2)}
          color={isDark ? '#ffffff' : '#00000062'}
        />
        <Text
          fontSize={RF(1.5)}
          fontWeight={'normal'}
          _dark={{color: 'light.300'}}
          _light={{color: 'dark.300'}}>
          Clip
        </Text>
      </Pressable>
      <Pressable mx="2" w={RW(16)} h={50} alignItems={'center'}>
        <MIcon
          name="library-add"
          size={RF(3.2)}
          color={isDark ? '#ffffff' : '#00000062'}
        />
        <Text
          fontSize={RF(1.5)}
          fontWeight={'normal'}
          _dark={{color: 'light.300'}}
          _light={{color: 'dark.300'}}>
          Save
        </Text>
      </Pressable>
    </ScrollView>
  </Box>

  {/* Channel part */}
  <Divider bgColor={'#0000002d'} />
  <HStack py="2" justifyContent={'space-between'} px="2">
    <HStack space={'4'} alignItems={'center'}>
      <Avatar size={'sm'} source={{uri: data.avatar}} />
      <VStack>
        <Text
          fontWeight={'bold'}
          fontSize={RF(1.9)}
          _dark={{color: 'light.200'}}
          _light={{color: 'dark.200'}}>
          {data.channelName}
        </Text>
        <Text
          fontWeight={'normal'}
          fontSize={RF(1.5)}
          _dark={{color: 'light.200'}}
          _light={{color: 'dark.200'}}>
          2k Subscribers
        </Text>
      </VStack>
    </HStack>
    <HStack space={'2'} alignItems={'center'}>
      <Pressable>
        <Text
          fontWeight={'bold'}
          fontSize={RF(1.9)}
          _dark={{color: 'light.100'}}
          _light={{color: 'dark.100'}}>
          SUBSCRIBE
        </Text>
      </Pressable>
      <IIcon
        name="ios-notifications-outline"
        size={RF(3.2)}
        color={isDark ? '#ffffff' : '#00000062'}
      />
    </HStack>
  </HStack>
  <Divider height={0.5} bgColor={'#0000002d'} />
</Stack>;
