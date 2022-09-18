import { Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Actionsheet, Avatar, Box, FlatList, Heading, HStack, Input, ScrollView, Stack, Text, View } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { appStyles } from '../../appStyles';
import { routes, transactions, transactionTypes } from '../constants';
import { isEmpty } from 'lodash';
import CustmButton from '../appComponents/custmButton';
import { VirtualizedView } from '../appComponents/commonComponent';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const { container } = appStyles;

const init = {
    id: 1,
    txtColor: '#FFA500',
    bg:'#192259',
    status: transactionTypes.pending,
    name: 'AdeBoye Usman',
    amount: '₦ 20,000',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
}

const SearchPeople = (props: any) => {

    const { navigation } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(init);

    const renderTransactions = ({ item }: any) => {

        let focused = selectedData.id === item?.id;

        return(
            <Box my={'2'} mx={'4'} left={item?.id % 2 == 0 ? WIDTH/2 : WIDTH/8} px={'2'}>
                <TouchableOpacity
                    onPress={() => {
                        setIsOpen(true);
                        setSelectedData(item);
                    }}
                >
                    <Avatar
                        source={{uri: item?.image}}
                        size={selectedData.id === item?.id ? 'xl' : 'sm'}
                        borderColor={selectedData.id === item?.id ? '#1DC76B' : 'white'}
                        borderWidth={'2'}
                        shadow={'2'}
                    />
                </TouchableOpacity>
                <Text
                    // alignSelf={'center'}
                    right={selectedData?.id === item?.id ? '1' : '6'}
                    color={selectedData?.id === item?.id ? 'green.600' : 'white'}
                >
                    {item?.name}
                </Text>
            </Box>
        );
    };

    return (
        <View style={[container,{justifyContent: 'flex-start'}]}>
            <ScrollView>
                <Stack safeArea space={'10'} mx={'4'}>
                    <HStack  py={'2'} mt={'2'} space={'2'} alignItems={'center'}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation?.navigate(routes?.dashBoard)
                            }}
                        >
                            <Ionicons name='chevron-back' color={'white'} size={24}/>    
                        </TouchableOpacity>
                        <Text color={'white'} fontSize={'md'}>Back</Text>
                        <Input
                            width={WIDTH/2 * 1.4}
                            _focus={{
                                borderColor:'#1DC7AC'
                            }}
                            borderColor={'gray.400'}
                            color={'white'}
                        />
                    </HStack>
                    {/* <VirtualizedView> */}
                    <Box>
                        <FlatList
                            data={transactions}
                            keyExtractor={(item): any => item.id}
                            renderItem={renderTransactions}
                            maxH={HEIGHT/2}
                        />
                    </Box>
                    {/* </VirtualizedView> */}
                </Stack>
            </ScrollView>
            <Actionsheet
                isOpen={isOpen}
                onClose={() =>{ 
                    setIsOpen(false)
                }}
            >
                <Actionsheet.Content backgroundColor={'#10194E'}>
                    {!isEmpty(selectedData) &&
                        <Stack
                            alignItems={'center'}
                            my={'3'}
                            space={'2'}
                        >
                            <Avatar source={{uri: selectedData.image}} size={'xl'}/>
                            <Heading size={'lg'} color={'white'} >{selectedData?.name}</Heading>
                            <Text color={'white'}>(+234) 905 1964 275</Text>
                            <CustmButton
                                borderColor='#464E8A'
                                txtColor='#f1f1f1'
                                txt='Continue'
                                bg={'#FF2E63'}
                                onPress={() => {
                                    navigation.navigate(routes.transaction, {data: selectedData})
                                }}
                            />
                        </Stack>
                    }
                </Actionsheet.Content>
            </Actionsheet>
        </View>
    )
}

export default SearchPeople;
