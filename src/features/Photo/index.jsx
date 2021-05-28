import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Router, Switch, useRouteMatch } from 'react-router-dom'
import NotFound from './../../components/NotFound/index';
import MainPage from './pages/Main/index';
import AddEditPage from './pages/AddEdit/index';


function Photo(props) {
    const match = useRouteMatch();
    console.log('ssss');
    return (
        <Switch>

            <Route exact path={match.url} component={MainPage} />

            <Route path={`${match.url}/add`} component={AddEditPage} />

            <Route path={`${match.url}/:photoId`} component={AddEditPage} />

            <Route component={NotFound} />
        </Switch>
    )
}

Photo.propTypes = {

}

export default Photo

