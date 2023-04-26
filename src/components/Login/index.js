import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {
  loginBtn = async () => {
    const {history} = this.props
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const jwtToken = data.jwt_token
    Cookies.set('jwt_token', jwtToken, {expires: 300, path: '/'})
    history.replace('/')
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <h1>Please Login</h1>
        <button onClick={this.loginBtn} type="button">
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
