import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';

import LoginPage from './views/login/LoginPage.js'
import App from './App.js'
import Main from './views/main/Main.js'
const BaseRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<App/>}/>
        <Route exact path='/login_page' element={<LoginPage/>}/>
        <Route exact path='/main' element={<Main/>}/>
      </Routes>
    </HashRouter>
  )
}

export default BaseRouter;