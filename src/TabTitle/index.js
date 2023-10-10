import './index.css'

const TabTitle = props => {
  const {details, onChangeCategory, category} = props
  const {tabId, displayText} = details

  const changeCategory = () => {
    onChangeCategory(tabId)
  }

  const styleClass = category === tabId ? 'activeTab' : ''
  const element = (
    <ul>
      <button
        className={`tab-title ${styleClass}`}
        type="button"
        onClick={changeCategory}
      >
        {displayText}
      </button>
    </ul>
  )
  return element
}

export default TabTitle
