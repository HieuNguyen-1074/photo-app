import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import { CardImg, ListGroup, ListGroupItem } from 'reactstrap';
function List(props) {
    const listPhoto = useSelector(state => state.photos);
    console.log("list photo ", listPhoto);
    return (
        <div>
            <ListGroup>
                {
                    listPhoto.map((photo, index) => {
                        return <ListGroup key={index} >
                            <CardImg src={photo.photo} style={{ width: "100px", height: "100px" }} />
                            <h1>{ }</h1>
                        </ListGroup>
                    })
                }
            </ListGroup>
        </div>
    )
}

List.propTypes = {
    listPhoto: PropTypes.array

}
List.defaultProps = {
    listPhoto: []
}

export default List

