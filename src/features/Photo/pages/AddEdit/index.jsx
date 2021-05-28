import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../../../../components/Banner'
import PhotoForm from '../../../../components/PhotoForm'
import { addPhoto } from 'features/Photo/photoSlice'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function AddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (values) => {
        const action = addPhoto(values);
        console.log(action);
        dispatch(action);
        history.push('/photo')
    }
    return (
        <div>
            <Banner title='Pick your amazing photo' />
            <div className="photo-edit__form">
                <PhotoForm

                    onSubmit={handleSubmit}
                />

            </div>
        </div>
    )
}

AddEditPage.propTypes = {

}

export default AddEditPage

