import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

const ReviewDetails = ({ route, navigation }) => {

    const { title, rating, body } = route.params;

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.paragraph}>{title}</Text>
                <Text style={globalStyles.paragraph}>{body}</Text>
                <View style={styles.rating}>
                    <Text>Gamezone Rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    );
}
 
export default ReviewDetails;

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        borderTopColor: '#ccc',
        borderTopWidth: 1,
        justifyContent: 'center',
        marginTop:15,
        paddingTop:15
    }
})
