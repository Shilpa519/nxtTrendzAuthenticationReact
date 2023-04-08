import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showErrorMsg: false, errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response.ok)
    if (response.ok === true) {
      this.submitSuccess()
    } else {
      this.setState({
        errorMsg: data.error_msg,
        showErrorMsg: true,
      })
    }
  }

  submitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  renderUserName = () => {
    const {username} = this.state

    return (
      <>
        <label htmlFor="username" className="label-field">
          USERNAME
        </label>
        <input
          type="text"
          className="input-field"
          placeholder="Username"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <>
        <label htmlFor="password" className="label-field">
          PASSWORD
        </label>
        <input
          type="password"
          className="input-field"
          placeholder="Password"
          id="password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state

    return (
      <>
        <div className="mobile-view-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login-img"
          />
          <form className="form-container" onClick={this.submitForm}>
            {this.renderUserName()}
            {this.renderPassword()}
            <button type="submit" className="login-btn">
              Login
            </button>
            {showErrorMsg && <p className="error-msg">*{errorMsg}</p>}
          </form>
        </div>
      </>
    )
  }
}

export default LoginForm
