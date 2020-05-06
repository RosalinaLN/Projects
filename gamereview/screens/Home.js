import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

const Home = ({ navigation }) => {

    const [modalOpen, setModalOpen] = useState(false)

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: 1 },
        { title: 'Gotta catch Them All(again)', rating: 4, body: 'lorem ipsum', key: 2 },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: 3 },
      ]);

    const addReview = (review) => {
        review.key = Math.random();
        setReviews((prevreview) => {
            return [
                review,
                ...prevreview
            ]
        })
        //close the modal
        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}> 
                        <MaterialIcons style={{ ...styles.modalToggle, ...styles.modalClose }} name="close" size={28} color="#333" onPress={() => setModalOpen(false)} />    
                        <View>
                            <ReviewForm addReview={addReview} />
                        </View>
                    </View> 
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons style={styles.modalToggle} name="add" size={28} color="#333" onPress={() => setModalOpen(true)} />
            <FlatList  
                keyExtractor ={item => `key-${item.key}`}
                data={reviews}
                renderItem={({ item }) => (            
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titletext}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
 
export default Home;

const styles = StyleSheet.create({
    modalToggle: {
        borderWidth:1,
        borderRadius:20,
        borderColor:'#ddd',
        padding:10,
        alignSelf: 'center',
        marginBottom:20
    },
    modalClose: {
        marginTop:20
    },
    modalContent: {
        flex:1
    }
})