import { View } from 'native-base';
import React from 'react';
import { Dimensions, FlatList } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const VirtualizedView = (props:any) => {
    return (
        <FlatList
            style={{}}
            data={[]}
            ListEmptyComponent={null}
            keyExtractor={() => 'dummy'}
            renderItem={null}
            nestedScrollEnabled={true}
            horizontal={true}
            ListHeaderComponent={() => (
                <View>{props.children}</View>
            )}
        />
    );
};
