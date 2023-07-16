// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {MdWarning, MdInfo} from 'react-icons/md'
import {RiErrorWarningFill} from 'react-icons/ri'
import Notification from '../Notification'
import './index.css'

const notificationList = [
  {
    id: 1,
    icon: <AiFillCheckCircle />,
    title: 'Success',
    description: 'You can access all the files in the folder',
  },
  {
    id: 2,
    icon: <RiErrorWarningFill />,
    title: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
  },
  {
    id: 3,
    icon: <MdWarning />,
    title: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
  },
  {
    id: 4,
    icon: <MdInfo />,
    title: 'Info',
    description: 'Anyone on the internet can view these files',
  },
]

const AlertNotifications = () => (
  <div className="main-container">
    <h1 className="header">Alert Notifications</h1>
    <ul className="list-container">
      {notificationList.map(eachObj => (
        <Notification key={eachObj.id}>{eachObj}</Notification>
      ))}
    </ul>
  </div>
)

export default AlertNotifications
