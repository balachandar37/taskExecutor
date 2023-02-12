import { Component } from "react"
import WithRouter from "../WithRouter"

import './index.css'

class Login extends Component {
    state = {username: "", password: "", errorMessage: "", isLoggedIn: false}

    onChangeUsername = event => {
        this.setState({username: event.target.value})
      }
    
    onChangePassword = event => {
        this.setState({password: event.target.value})
      }
    
    onSubmitForm = event => {
      event.preventDefault()
      const stringifiedUserList = localStorage.getItem("userList")
      const parsedUserList = JSON.parse(stringifiedUserList)
      const {username, password} = this.state
      const userData = parsedUserList.filter(eachUser => (eachUser.username === username))
      const user = userData[0]
      if (username === "" || user === undefined ) {
        this.setState({errorMessage: '*Please Enter a Valid Username'})
      } 
      else {
          if (user.password === password) {
            if (user.userType === "master") {
              this.props.navigate("/masterpage")
            } 
            else {
              this.props.navigate("/studentpage")
            }
          } else {
            this.setState({errorMessage: '*Please Enter a Valid Password'})
          }
        }
      }
    

    renderPasswordField = () => {
        const {password} = this.state
        return (
          <>
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.onChangePassword}
              className="input-login"
            />
          </>
        )
      }
    
    renderUsernameField = () => {
      const {username} = this.state
      return (
        <>
          <label className="input-label" htmlFor="username">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={this.onChangeUsername}
            className="input-login"
          />
        </>
      )
    }

    
    
    render() {
      const {errorMessage} = this.state
        return (
            <div className="login-bg">
              <form onSubmit={this.onSubmitForm} className="form-login-bg" >
                <h1 className="login-heading">Please Login!</h1>
                <div className="input-container">{this.renderUsernameField()}</div>
                <div className="input-container">{this.renderPasswordField()}</div>
                <button type="submit" className="login-button">
                  Login
                </button>
                <p className="error-login">{errorMessage}</p>
              </form>
            </div>
        )
    }
}

export default WithRouter(Login)