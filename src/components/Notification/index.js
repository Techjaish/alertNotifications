// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  const {id, icon, title, description} = children

  let style
  switch (id) {
    case 1:
      style = 'success'
      break
    case 2:
      style = 'error'
      break
    case 3:
      style = 'warning'
      break
    case 4:
      style = 'info'
      break
    default:
      style = ''
      console.log(style)
      break
  }

  return (
    <li className="item-container">
      {icon}
      <div className="content-container">
        <h1 className={`${style}`}>{title}</h1>
        <p className="description">{description}</p>
      </div>
      <GrFormClose />
    </li>
  )
}

export default Notification
