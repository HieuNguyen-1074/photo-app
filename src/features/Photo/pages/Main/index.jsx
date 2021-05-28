import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../../../../components/Banner'
import { Image } from '../../../../constants/Image'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import List from 'components/Showlist/List'

function MainPage(props) {
    const photos = useSelector(state => state.photos);
    console.log('list ', photos);
    return (
        <div className="photo-main">
            <Banner title="your awesome photo" backgroundUrl={Image.PINK_BG} />
            <Container className="text-center">
                <Link to="/photo/add">add new photo</Link>

            </Container>
            <List />
        </div>
    )
}

MainPage.propTypes = {

}

export default MainPage

