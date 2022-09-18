import { Alert, Dimensions, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar, Box, Heading, HStack, ScrollView, Stack, Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { appStyles } from '../../appStyles';
import { routes } from '../constants';
import CustmButton from '../appComponents/custmButton';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const { container } = appStyles;

const Transaction = (props:any) => {

    const { navigation } = props;
    const data = props?.route?.params?.data;

    return (
        <View style={[container,{justifyContent: 'flex-start'}]}>
            <ScrollView>
                <Stack safeArea space={'5'} mx={'4'} mb={'2'}>
                    <HStack  py={'2'} mt={'2'} space={'2'} alignItems={'center'}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation?.navigate(routes?.searchPeople)
                            }}
                        >
                            <Ionicons name='chevron-back' color={'white'} size={24}/>    
                        </TouchableOpacity>
                        <Text color={'white'} fontSize={'md'}>Back</Text>
                        <Text color={'white'} fontSize={'md'} left={WIDTH/5.5}>New Request</Text>
                    </HStack>
                    <Stack alignSelf={'center'} mt={'3'}>
                        <Box
                            borderRadius={90}
                            px={'10'}
                            py={'10'}
                            rounded={'full'}
                            backgroundColor={'#192259'}
                            alignSelf={'center'}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <Box
                                rounded={'full'}
                                px={'10'}
                                py={'10'}
                                backgroundColor={'#10194E'}
                                alignSelf={'center'}
                                alignItems={'center'}
                                justifyContent={'center'}
                            >
                                <Avatar
                                    size={'2xl'}
                                    source={{uri: data?.image}}
                                />
                            </Box> 
                        </Box>
                    </Stack>
                    <Heading color={'white'} size={'lg'} alignSelf={'center'}>{data?.name}</Heading>
                    <Text color={'white'} alignSelf={'center'}>Is requesting for</Text>
                    <Heading color={'white'} size={'3xl'} alignSelf={'center'}>{data?.amount}</Heading>
                    <Box alignSelf={'center'}>
                        <CustmButton
                            borderColor='#464E8A'
                            txtColor='#f1f1f1'
                            txt='Send money'
                            bg={'#FF2E63'}
                            onPress={() => {
                              Alert.alert('Note', 'Are you sure you want to send money ?', [
                                {
                                    style: 'default',
                                    text: 'Yes'
                                },
                                {
                                    style: 'cancel',
                                    text: 'No'
                                }
                              ])  
                            }}
                        />
                    </Box>
                    <Box alignSelf={'center'}>
                        <CustmButton
                            borderColor='#464E8A'
                            txtColor='#464E8A'
                            txt='Dont Send'
                            onPress={() => {
                                navigation?.navigate(routes.searchPeople)
                            }}
                        />
                    </Box>
                </Stack>
            </ScrollView>
        </View>
    )
}

export default Transaction;
