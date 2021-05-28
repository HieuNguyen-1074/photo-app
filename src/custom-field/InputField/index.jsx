import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label, Input, FormFeedback, Alert } from 'reactstrap';
import { ErrorMessage } from 'formik';



function InputField(props) {
    const {
        field,
        form,

        type,
        label,
        placeholder,
        disabled

    } = props;
    const { name,
        value,
        onChange,
        onBlur
    } = field;
    const { errors, touched } = form;
    console.log({ errors, touched, name });
    return (
        <>
            <FormGroup>
                {label && <Label for={name}>{label}</Label>}
                <Input
                    // name={name}
                    id={name}
                    // value = {value}
                    // onChange ={onChange}
                    // onBlur = {onBlur}
                    {...field}
                    placeholder={placeholder}
                    type={type}
                    disabled={disabled}
                    className={errors[name] ? 'is-invalid' : ''}
                />

            </FormGroup>
            { errors[name] &&
                <ErrorMessage
                    name={name}
                    render={mes => <Alert color="danger">{mes}</Alert>}
                />
            }
        </>
    )
};

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};
InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

export default InputField

