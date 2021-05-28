import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FormGroup, Label } from 'reactstrap';
import { Button, Input } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from './../../constants/global';

import { Image } from '../../constants/Image/index'
import { FastField, Form, Formik } from 'formik';
import InputField from '../../custom-field/InputField/index';
import SelectField from './../../custom-field/SelectField/index';
import RandomPhotoField from './../../custom-field/RandomPhotoField/index';
import *  as Yup from 'yup'

function PhotoForm(props) {
    const initialValues = {
        title: '',
        categoryId: null,
        photo: ''
    }
    // YUP CHECK VALUE
    const validationSchama = Yup.object({
        title: Yup.string().required("this field is req"),
        categoryId: Yup.number().required('this field is req').nullable(),
        photo: Yup.string().when('categoryId', {
            is: 1,
            then: Yup.string().required('this field is req'),
            otherwise: Yup.string().notRequired(),
        }),
    });
    return (

        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
            validationSchema={validationSchama}
        >
            { formikProps => {
                // do sonthing
                const { values, errors, touched } = formikProps;
                console.log(errors);
                return (
                    // FORM CREATE IMAGE  ( USE MODULE FORMINK )
                    <Form>
                        {/* INPUT FIELD TITLE */}
                        <FastField
                            name="title"
                            label="title"
                            component={InputField}
                            placeholder="Eg : Wow nature...."
                            type="text"
                        >

                        </FastField>

                        <FastField
                            name="categoryId"


                            label="categoryId"
                            component={SelectField}
                            placeholder="Eg : Wow nature...."
                            options={PHOTO_CATEGORY_OPTIONS}
                        >

                        </FastField>
                        <FastField
                            name="photo"
                            component={RandomPhotoField}
                            label='Photo'
                        >

                        </FastField>


                        <FormGroup >
                            <Button color="primary">Add to album</Button>
                        </FormGroup>
                    </Form>
                )
            }

            }
        </Formik >
    )
}

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
}
PhotoForm.defaultProps = {
    onSubmit: null,
}

export default PhotoForm



