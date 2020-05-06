import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global';
import * as Yup from 'yup';
import FlatButton from '../shared/button';

const ReviewSchema = Yup.object().shape({
    title: Yup.string()
        .min(4)
        .required(),
    body: Yup.string()
        .min(8)
        .required(),
    rating: Yup.string()
        .test('check-num','Rating must be a number 1-5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0
        })
})

const ReviewForm = ({ addReview }) => {
    return (
        <View style={{paddingHorizontal:30, paddingVertical:10}}>
            <Formik
                validationSchema={ReviewSchema}
                initialValues={{title:'', body:'', rating:''}}
                onSubmit={(values,actions) => {
                    //console.log(values)
                    actions.resetForm();
                    addReview(values)
                }} 
            >

            {       
                ({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            onChangeText={handleChange('title')}
                            placeholder="Review Title"
                            onBlur={handleBlur('title')}
                            value={values.title} 
                        />
                        <Text style={globalStyles.error}>{touched.title && errors.title}</Text>
                        <TextInput
                            multiline minHeight={80}
                            style={globalStyles.input}
                            onChangeText={handleChange('body')}
                            placeholder="Review Body"
                            onBlur={handleBlur('body')}
                            value={values.body} 
                        />
                        <Text style={globalStyles.error}>{touched.body && errors.body}</Text>
                        <TextInput
                            style={globalStyles.input}
                            onChangeText={handleChange('rating')}
                            placeholder="Rating (1-5)"
                            onBlur={handleBlur('rating')}
                            value={values.rating} 
                            keyboardType="numeric"
                        />
                        <Text style={globalStyles.error}>{touched.rating && errors.rating}</Text>
                        
                        {/* <Button title="Submit" color="maroon" onPress={handleSubmit} /> */}
                        {/* we cannot customize the button so lets use FlatButton from TouchableOpacity */}
                        
                        <FlatButton text="Submit" onPress={handleSubmit}  />
                    
                    </View>
                )
                    
            }

            </Formik>
        </View>
    );
}
 
export default ReviewForm;