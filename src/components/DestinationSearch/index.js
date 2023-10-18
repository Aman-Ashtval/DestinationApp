import './index.css'
import {Component} from 'react'
import DestinationItem from './DestinationItem'

class DestinationSearch extends Component {
  render() {
    const {destinationsList} = this.props
    return (
      <div className="bg-container">
        <h1 className="search-h">Destination Search</h1>
        <div className="searchInput-container">
          <input type="search" className="userInput" />
          <span className="icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="icon-img"
              alt="Icon"
            />
          </span>
        </div>
        <div className="card-container">
          <ul className="list-container">
            {destinationsList.map(each => (
              <DestinationItem item={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
