import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

import Home from './screens/Home/index'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import ManageLinks from './screens/Manage/Links/Index'
import Create from './screens/Manage/Links/Create/index'
import Edit from './screens/Manage/Links/Edit/Index'

import {initAccount} from './actions/AccountActions'

const App = () =>{

    useEffect(()=>{
        initAccount();
    },[initAccount])
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item">
                            <Link to="/sign-in">Sign in</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/sign-up">Sign up</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/manage/links/create">Create Link</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/manage/links/edit">Edit Link</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/manage/links">Links</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/sign-in">
                        <SignIn />
                    </Route>
                    <Route path="/sign-up">
                        <SignUp />
                    </Route>
                    <Route path="/manage/links/create">
                        <Create />
                    </Route>
                    <Route path="/manage/links/edit">
                        <Edit/>
                    </Route>
                    <Route path="/manage/links">
                        <ManageLinks />
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

const mapsStateToProps = (state) =>{
    return {account: state.account.account}
}

export default connect(mapsStateToProps, {initAccount})(App);