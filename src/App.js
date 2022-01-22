import './App.css';
import React from 'react';
import "antd/dist/antd.css";
import LoginPage from './views/login/LoginPage.js'
class App extends React.Component {
  render () {
    return (
      <div>
        <LoginPage></LoginPage>
      </div>
    )
  }
}

export default App;
