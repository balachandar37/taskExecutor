import { Component } from "react";
import WithRouter from "../WithRouter";

import "./index.css"

const usersList = () => {
  const stringifiedUserList = localStorage.getItem("userList")
  const parsedUserList = JSON.parse(stringifiedUserList)
  if (parsedUserList === null) {
    return []
  }
  else {
    return parsedUserList
  }
}

class SignUp extends Component {
    state = {username: "", password: "", userList: usersList(), errorMessage:"", isSignUp: false, userType:"master"}

    onChangeUsername = event => {
      this.setState({username: event.target.value})
    }
    
    onChangePassword = event => {
      this.setState({password: event.target.value})
    }

    onSubmitForm = event => {
      event.preventDefault()
      const {username, password, userType, userList} = this.state
      if (username === "" || password === "") {
        this.setState({errorMessage: "*Please Enter Valid Username or Password"})
      }
      else {
        const userDetails = {username, password, userType}
        const userData = userList.filter(eachUser => (eachUser.username === username))
        if (userData.length > 0) {
          this.setState({errorMessage: "*Username already exists"})
        }
        else {
          this.setState(prevState => (
            {userList: [...prevState.userList, userDetails], isSignUp: true}
          ))
        }
      }
    }

    onChangeMasterButton = (event) => {
      this.setState({userType: event.target.value})
    }

    onChangeStudentButton = (event) => {
      this.setState({userType: event.target.value})
    }


    renderPasswordField = () => {
        const {password} = this.state
        return (
          <>
            <label htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.onChangePassword}
              className="input-sign"
            />
          </>
        )
      }
    
      renderUsernameField = () => {
        const {username} = this.state
        return (
          <>
            <label htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={this.onChangeUsername}
              className="input-sign"
            />
          </>
        )
    }

    renderCheckBoxField = () => {
      return(
        <>
          <label htmlFor="usertype">Choose User Type:</label>
          <select onChange={this.onChangeMasterButton} className="usertype" id="usertype">
            <option value="master" >Master</option>
            <option value="student" >Student</option>
          </select>
        </>
      )
    }


    
    render() {
      const {userList, isSignUp, userType, errorMessage} = this.state
      if (isSignUp === true && userType === "master") {
        localStorage.setItem("userList", JSON.stringify(userList))
        this.props.navigate("/masterpage")
      }
      else if (isSignUp === true && userType === "student") {
        localStorage.setItem("userList", JSON.stringify(userList))
        this.props.navigate("/studentpage")
      }
      return (
            <div className="signup-bg">
                <form className="form-bg" onSubmit={this.onSubmitForm} >
                    <h1 className="signup-heading">SignUp!</h1>
                    <div className="input-container">{this.renderUsernameField()}</div>
                    <div className="input-container">{this.renderPasswordField()}</div>
                    <div>{this.renderCheckBoxField()}</div>
                    <button type="submit" className="signup-button" >
                        SignUp
                    </button>
                    <p className="error-signup" >{errorMessage}</p>
                </form>
            </div>
        )
    }
}

export default WithRouter(SignUp)