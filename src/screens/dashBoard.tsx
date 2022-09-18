import { Dimensions, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { appStyles } from '../../appStyles';
import { Actionsheet, Avatar, Box, Divider, FlatList, Heading, HStack, ScrollView, Stack, Text, VStack } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustmButton from '../appComponents/custmButton';
import { routes, transactions, transactionTypes } from '../constants';
import { Status } from '../appComponents/utils';
import { VirtualizedView } from '../appComponents/commonComponent';

const { container } = appStyles;

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const DashBoard = (props:any) => {

    const { navigation } = props;

    const [isOpen, setIsOpen] = useState(false);

    const renderTransactions = ({ item }: any) => {

        return(
            <VStack backgroundColor={item.bg} width={WIDTH}>
                <HStack px={'1'} py={2} alignItems={'center'} width={WIDTH/2 * 1.6} space={'4'}>
                    <Avatar source={{uri: item?.image}} size={'md'}/>
                    <VStack space={'1'} flex={1}>
                        <Text fontSize={'lg'} color={'white'} fontWeight={'bold'}>{item?.name}</Text>
                        <Status status={item?.status}/>
                    </VStack>
                    <Heading color={item?.txtColor} size={'md'} left={'4'} maxW={WIDTH/3}>{item?.amount}</Heading>
                </HStack>
            </VStack>
        );
    }

    return (
        <View style={[container,{justifyContent: 'flex-start'}]}>
            <ScrollView>
                <Stack safeArea space={'10'} mx={'4'}>
                    <HStack  py={'2'} mt={'2'} space={'2'} alignItems={'center'} justifyContent={'space-between'}>
                        <TouchableOpacity
                            onPress={() => {
                                setIsOpen(true)
                            }}
                        >
                            <Box
                                rounded={'3xl'}
                                px={'2'}
                                py={'2'}
                                backgroundColor={'#212A6B'}
                            >
                                <MaterialIcons name='align-horizontal-left' size={26} color={'#FF2E63'}/>
                            </Box>
                        </TouchableOpacity>
                        <Box flexDirection={'row'} flex={'1'}>
                            <Text fontSize={'xl'} fontWeight={'bold'} color={'white'}>Hello Sandra</Text>
                        </Box>
                        <TouchableOpacity>
                            <Box px={'2'} py={'2'} bg={'#212A6B'} rounded={'xl'}>
                                <Text fontSize={'xs'} color={'#426DDC'}>Add Money</Text>
                            </Box>
                        </TouchableOpacity>
                    </HStack>
                    <Box>
                        <Text color={'white'}>Your current balance is</Text>
                        <Heading size={'2xl'} color={'white'}>₦ &nbsp;200, 000</Heading>
                    </Box>
                    <Stack direction={'row'} space={'2'} justifyContent={'space-between'}>
                        <CustmButton
                            borderColor='#464E8A'
                            txtColor='#464E8A'
                            txt='Request money'
                            onPress={() => {
                                navigation.navigate(routes.searchPeople);
                            }}
                        />
                        <CustmButton
                            borderColor='#464E8A'
                            txtColor='#464E8A'
                            txt='Send money'
                            onPress={() => {
                                navigation.navigate(routes.searchPeople);
                            }}
                        />
                    </Stack>
                </Stack>
            </ScrollView>
            <Actionsheet
                isOpen={isOpen}
                onClose={() =>{ 
                    setIsOpen(false)
                }}
            >
                <Actionsheet.Content backgroundColor={'#10194E'}>
                    <VirtualizedView>
                        <FlatList
                            data={transactions}
                            keyExtractor={(item): any => item.id}
                            renderItem={renderTransactions}
                        />
                    </VirtualizedView>
                </Actionsheet.Content>
            </Actionsheet>
        </View>
    )
}

export default DashBoard;
