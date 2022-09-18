import { TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { Stack, Text } from 'native-base';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const CustmButton = (props:any) => {

    const  {
        borderColor='transparent',
        bg='transparent',
        txtColor='black',
        txt='button',
        onPress,
    } = props;

    return (
        <TouchableOpacity onPress={onPress}>
            <Stack
                px={'2'}
                py={'2'}
                borderColor={borderColor}
                borderWidth={'1'}
                rounded={'lg'}
                backgroundColor={bg}
                width={WIDTH/3}
                alignItems={'center'}
            >
                <Text
                    color={txtColor}
                    fontSize={'md'}
                    fontWeight={'bold'}
                >
                    {txt}
                </Text>
            </Stack>
        </TouchableOpacity>
    )
}

export default CustmButton;
