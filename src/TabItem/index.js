import './index.css'

const TabItems = props => {
  const {details, onPlayGame} = props
  const {thumbnailUrl} = details

  const playGame = () => {
    onPlayGame(thumbnailUrl)
  }
  const element = (
    <li>
      <button className="button" type="button" onClick={playGame}>
        <img src={thumbnailUrl} className="tabItem" alt="thumbnail" />
      </button>
    </li>
  )
  return element
}

export default TabItems
