import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Logout = props => {
  const btnClick = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div>
      <button onClick={btnClick} type="button">
        Logout
      </button>
    </div>
  )
}

export default withRouter(Logout)
