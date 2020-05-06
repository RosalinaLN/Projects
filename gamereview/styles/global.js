import { StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex:1,
        padding:30,
    },
    titletext: {
        fontFamily:'raleway-bold',
        fontSize: 20,
        color:'#333'
    },
    paragraph: {
        fontFamily:'raleway-regular',
        fontSize: 18,
        color:'#333'
    },
    input: {
        fontSize:17,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius:5,
        padding:8,
    },
    error: {
        color: 'crimson', //dark red
        textAlign: 'center',
        padding: 5,
        fontWeight:'bold'
    }
})

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}