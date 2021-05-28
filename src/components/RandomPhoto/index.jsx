import React from 'react'
import PropTypes from 'prop-types'
import './RandomPhoto.css'
import { Button } from 'bootstrap';

const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 200);
    return `https://picsum.photos/id/${randomId}/300/300`;
}


function RandomPhoto(props) {
    const handleRandomPhotoClick = async () => {
        if (onImageUrlChange) {
            const randomImageUrl = getRandomImageUrl();
            onImageUrlChange(randomImageUrl)
        }
    }
    const {
        name,
        imageUrl,
        onImageUrlChange,
        onRandomButtonBlur
    } = props
    return (
        <div className="random-photo">
            <div className="rndom_photo__button">
                <button
                    type="button"
                    ouline
                    color="primary"

                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                >
                    Random a photo
                      </button>
            </div>
            <div>
                {imageUrl && <img src={imageUrl} width="200px" height="200px" alt="" />}
            </div>
        </div>
    )
}

RandomPhoto.propTypes = {
    name: PropTypes.string,
    ImageUrl: PropTypes.string,
    onImageUrlChange: PropTypes.func,
    onRandomButtonBlur: PropTypes.func
}
RandomPhoto.defaultProps = {
    name: '',
    imageUrl: '',
    onImageUrlChange: null,
    onRandomButtonBlur: null,
}

export default RandomPhoto

