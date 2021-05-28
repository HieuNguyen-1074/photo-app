import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/style/Banner.css'

function Banner(props) {
    const { title, backgroundUrl } = props;
    console.log(props);
    const bannerStyle = backgroundUrl ?
        {
            backgroundImage: `url(${backgroundUrl})`
        } :
        {};
    return (
        <section className="banner" style={bannerStyle}>
            <h1 className="banner__title">{title}</h1>
        </section>
    )
}

Banner.propTypes = {
    title: PropTypes.string,
    backgroundUrl: PropTypes.string,
}
Banner.defaultProps = {
    title: '',
    backgroundUrl: '',
}

export default Banner

