import { Dimensions, View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import { Box, Stack, Image, FlatList, Text, Heading } from 'native-base';

import { appStyles } from '../../appStyles';
import { Images, itemList, routes } from '../constants';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const { container, corouselContainer } = appStyles;


const Indicator = ({ scrollX }: any) => {

    return <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        {itemList.map((_, i) => {
            const inputRange = [(i - 1) * WIDTH, i * WIDTH, (i + 1) * WIDTH];
            const scale = scrollX.interpolate({
                inputRange,
                outputRange: [0.8, 1.4, 0.8],
                extrapolate: 'clamp',
            });

            const width = scrollX.interpolate({
                inputRange,
                outputRange: [10, 18, 10],
                extrapolate: 'clamp',
            });

            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.6, 0.9, 0.6],
                extrapolate: 'clamp',
            });

            return (
                <Animated.View
                    key={`indicator-${i}`}
                    style={{
                        height: 6,
                        width: width,
                        borderRadius: 2,
                        backgroundColor: 'orange',
                        margin: 8,
                        opacity,
                        transform: [
                            {
                                scale
                            }
                        ]
                    }}
                />
            )
        })}
    </View>
}
const OnBoard = (props:any) => {
    const { navigation } = props;
    const scrollX = useRef(new Animated.Value(0)).current;

    const renderItem = (({ item }: any) => {

        return (
            <Stack ml={'2'}>
                <Box width={WIDTH} mt={'2'}>
                    <Text fontSize={'md'} color={'white'} fontWeight={'bold'}>{item?.title}</Text>
                </Box>
                <Text mt={'4'} color={'white'} width={WIDTH / 2} textAlign={'justify'}>{item?.description}</Text>
            </Stack>
        );
    });

    return (
        <View style={container}>
            <Stack direction={'column'} flex={'1'} justifyContent={'space-between'} flexWrap={'wrap'}>
                <Image source={Images.onBoard} height={HEIGHT / 2 * 1.3} width={WIDTH} resizeMode={'stretch'} bg={'green.400'} alt={'NA'}/>
                <Box style={corouselContainer} alignSelf={'flex-start'}>
                    <Stack flexDirection={'row'} marginLeft={WIDTH / 8} mt={'3'}>
                        <Indicator scrollX={scrollX} />
                    </Stack>
                    <Animated.FlatList
                        scrollEventThrottle={32}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: false }
                        )}
                        data={itemList}
                        keyExtractor={(item): any => item.id}
                        renderItem={renderItem}
                        horizontal
                        pagingEnabled
                        bounces={false}
                        // bg={'red.400'}
                        style={{ width: WIDTH, left: WIDTH / 40 }}
                        showsHorizontalScrollIndicator={false}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(routes.dashBoard);
                        }}
                    >
                        <Box
                            px={'2'}
                            py={'2'}
                            bg={'white'}
                            width={WIDTH / 3}
                            alignSelf={'center'}
                            right={'10'}
                            bottom={'10'}
                            rounded={'lg'}
                        >
                            <Text color={'blue.800'} alignSelf={'center'} fontWeight={'bold'}>Start Banking</Text>
                        </Box>
                    </TouchableOpacity>
                </Box>
            </Stack>
        </View>
    )
}

export default OnBoard;
