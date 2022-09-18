import { Dimensions } from 'react-native';
import React from 'react';
import { Box, Text } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { transactionTypes } from '../constants';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const Status = (props:any) => {

    const  {status} = props;
    if (status === transactionTypes.sent) {
        return(
            <Box
                px={1}
                py={1}
                backgroundColor={'#FAAD39'}
                flexDirection={'row'}
                justifyContent={'center'}
                minWidth={WIDTH/5}
                maxWidth={WIDTH/5}
                flexWrap={'wrap'}
                alignItems={'center'}
                rounded={'3xl'}
            >   
                <Box bg={'white'} px={'1'} py={'1'} rounded={'full'} alignItems={'center'}>
                    <MaterialCommunityIcons name={'account-arrow-right-outline'} size={15} color={'#FAAD39'}/>
                </Box>
                <Text color={'white'} ml={'1'}>
                    {transactionTypes.sent}
                </Text>
            </Box>
        );
    } else if(status === transactionTypes.pending) {
        return(
            <Box
                px={1}
                py={1}
                backgroundColor={'orange.400'}
                flexDirection={'row'}
                justifyContent={'center'}
                minWidth={WIDTH/5}
                maxWidth={WIDTH/4}
                flexWrap={'wrap'}
                alignItems={'center'}
                rounded={'3xl'}
            >   
                {/* <Box bg={'white'} px={'1'} py={'1'} rounded={'full'} alignItems={'center'}> */}
                    <MaterialIcons name={'pending'} size={20} color={'white'}/>
                {/* </Box> */}
                <Text color={'white'} ml={'1'}>
                    {transactionTypes.pending}
                </Text>
            </Box> 
        );
    } else if (status === transactionTypes.received) {
        return(
            <Box
                px={1}
                py={1}
                backgroundColor={'#1DC7AC'}
                flexDirection={'row'}
                justifyContent={'center'}
                minWidth={WIDTH/5}
                maxWidth={WIDTH/3.9}
                flexWrap={'wrap'}
                alignItems={'center'}
                rounded={'3xl'}
            >   
                <Box bg={'white'} px={'1'} py={'1'} rounded={'full'} alignItems={'center'}>
                    <MaterialCommunityIcons name={'account-arrow-left-outline'} size={15} color={'#1DC7AC'}/>
                </Box>
                <Text color={'white'} ml={'1'}>
                    {transactionTypes.received}
                </Text>
            </Box>
        );
    } else if(status === transactionTypes.failed) {
        return(
            <Box
                px={1}
                py={1}
                backgroundColor={'#FE4A54'}
                flexDirection={'row'}
                justifyContent={'center'}
                minWidth={WIDTH/5}
                maxWidth={WIDTH/4}
                flexWrap={'wrap'}
                alignItems={'center'}
                rounded={'3xl'}
            >   
                {/* <Box bg={'white'} px={'1'} py={'1'} rounded={'full'} alignItems={'center'}> */}
                    <MaterialIcons name={'error-outline'} size={20} color={'white'}/>
                {/* </Box> */}
                <Text color={'white'} ml={'1'}>
                    {transactionTypes.failed}
                </Text>
            </Box> 
        );
    } else {
        return(
            <Box
                px={'2'}
                py={'1'}
                backgroundColor={'#1DC7AC'}
            >
                <Text>
                    Staus Not Available
                </Text>
            </Box>
        );
    }
};
