import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label, Input, Alert } from 'reactstrap';
import Select from 'react-select'
import { ErrorMessage } from 'formik';



function SelectField(props) {
    const {
        field,
        form,

        type,
        label,
        placeholder,
        disabled,
        options

    } = props;
    const { errors, touched } = form;
    const { name,
        value,
        onChange,
        onBlur
    } = field;
    console.log({ value });
    // VALUE OF SELECT
    const valueSelection = options.find(option => option.value === value)

    // EVENT ONCHANGE
    const handleSelected = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;
        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }

        }
        field.onChange(changeEvent);
    }
    return (
        <>
            <FormGroup>
                {label && <Label for={name}>Categrory</Label>}
                <Select styles={{ color: '#000' }}

                    id={name}
                    {...field}
                    onChange={handleSelected}
                    placeholder="what your photo categrory"
                    isDisabled={disabled}
                    options={options}
                    value={valueSelection}
                />
                {errors[name] &&
                    <ErrorMessage
                        name={name}
                        render={mes => <Alert color="danger">{mes}</Alert>}
                    />
                }
            </FormGroup>

        </>
    )
};

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array
};
SelectField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

export default SelectField

