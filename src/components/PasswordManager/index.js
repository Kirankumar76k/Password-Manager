import {Component} from 'react'
import {v4} from 'uuid'
import UserItem from '../UserItem'
import './index.css'

const ColorList = ['a', 'b', 'c', 'd', 'e', 'f']

class PasswordManager extends Component {
  state = {
    userList: [],
    Intialwebsite: '',
    Intialusername: '',
    Intialpassword: '',
    searchInput: '',
    PasswordToggle: false,
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {Intialwebsite, Intialusername, Intialpassword} = this.state
    const newUser = {
      id: v4(),
      website: Intialwebsite,
      username: Intialusername,
      password: Intialpassword,
      backgroundColor: ColorList[Math.ceil(Math.random() * 6)],
    }
    this.setState(prevState => ({
      userList: [...prevState.userList, newUser],
      Intialwebsite: '',
      Intialusername: '',
      Intialpassword: '',
    }))
  }

  onWebsiteName = event => {
    this.setState({Intialwebsite: event.target.value})
  }

  onUsername = event => {
    this.setState({Intialusername: event.target.value})
  }

  onPassword = event => {
    this.setState({Intialpassword: event.target.value})
  }

  onSearchPassword = event => {
    this.setState({searchInput: event.target.value})
  }

  filterDataList = () => {
    const {userList, searchInput} = this.state
    const k = userList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return k
  }

  NoPassword = () => (
    <div className="no-pass-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-pass-img"
      />
      <p className="no-pass-name">No Passwords</p>
    </div>
  )

  onDeleteItem = id => {
    this.setState(prevState => ({
      userList: prevState.userList.filter(eachItem => eachItem.id !== id),
    }))
  }

  PasswordList = () => {
    const k = this.filterDataList()
    const {PasswordToggle} = this.state
    return (
      <div className="pass1">
        <ul className="item-list">
          {k.map(eachItem => (
            <UserItem
              key={eachItem.id}
              userDetails={eachItem}
              PasswordToggle={PasswordToggle}
              onDeleteItem={this.onDeleteItem}
            />
          ))}
        </ul>
      </div>
    )
  }

  onShowPassword = () => {
    this.setState(prevState => ({PasswordToggle: !prevState.PasswordToggle}))
  }

  render() {
    const {Intialwebsite, Intialusername, Intialpassword} = this.state

    const FilterData = this.filterDataList()
    const renderContainer =
      FilterData.length > 0 ? this.PasswordList() : this.NoPassword()

    return (
      <div className="bg-container">
        <div className="app-container">
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
          <div className="card-container">
            <div className="form-container">
              <form onSubmit={this.onFormSubmit} className="form">
                <h1 className="heading">Add New Password</h1>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="input-img"
                  />
                  <input
                    type="text"
                    placeholder="Enter Website"
                    onChange={this.onWebsiteName}
                    className="input"
                    value={Intialwebsite}
                  />
                </div>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="input-img"
                  />
                  <input
                    type="text"
                    placeholder="Enter Username"
                    onChange={this.onUsername}
                    className="input"
                    value={Intialusername}
                  />
                </div>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="input-img"
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    onChange={this.onPassword}
                    className="input"
                    value={Intialpassword}
                  />
                </div>
                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="pas-m-cls"
            />
          </div>
          <div className="card-container2">
            <div className="total-search-container">
              <div className="total-passwords">
                <h1 className="pass-name">Your Passwords</h1>
                <p className="total-text">{FilterData.length}</p>
              </div>
              <div className="search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="input-img"
                />
                <input
                  type="search"
                  placeholder="Search"
                  onChange={this.onSearchPassword}
                  className="search-input"
                />
              </div>
            </div>
            <hr className="hr" />
            <div className="show-password-container">
              <input
                type="checkbox"
                onClick={this.onShowPassword}
                className="check-cls"
                id="showId"
              />
              <label className="show-pass-text" htmlFor="showId">
                Show passwords
              </label>
            </div>
            {renderContainer}
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManager
