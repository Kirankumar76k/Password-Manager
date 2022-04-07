import './index.css'

const UserItem = props => {
  const {userDetails, PasswordToggle, onDeleteItem} = props
  const {id, username, password, website, backgroundColor} = userDetails
  const passwordText = () => <p className="name">{password}</p>

  const passwordImg = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  )
  const OnDeleteId = () => {
    onDeleteItem(id)
  }

  const switchPassword = PasswordToggle ? passwordText() : passwordImg()
  return (
    <li key={id}>
      <div className="item">
        <div className="item1">
          <div className={`profile-name ${backgroundColor}`}>
            <p className="name">{website[0].toUpperCase()}</p>
          </div>
          <div className="name-pass-container">
            <p className="name">{website}</p>
            <p className="name">{username}</p>

            {switchPassword}
          </div>
        </div>
        <div className="delete-container">
          <button
            className="delete-btn"
            type="button"
            testid="delete"
            onClick={OnDeleteId}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              className="delete-img"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default UserItem
