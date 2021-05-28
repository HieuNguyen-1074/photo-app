import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label, Alert } from 'reactstrap';
import RandomPhoto from './../../components/RandomPhoto/index';
import { ErrorMessage } from 'formik';

function RandomPhotoField(props) {
    const { field, form, label } = props;
    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form;

    const handleImageUrlChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl);
    }
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <RandomPhoto
                name={name}
                imageUrl={value}
                onImageUrlChange={handleImageUrlChange}
                onRandomButtonBlur={onBlur}
            />
            { errors[name] &&
                <ErrorMessage
                    name={name}
                    render={mes => <Alert color="danger">{mes}</Alert>}
                />
            }
        </FormGroup>
    )
}

RandomPhotoField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string
}
RandomPhotoField.defaultProps = {
    label: ''
}

export default RandomPhotoField

