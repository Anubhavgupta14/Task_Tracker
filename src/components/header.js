import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header

// header.defaultProps={
//     title: 'Hello',
// }
// It will put title to Hello as default



// We Can use internal Css
/* <h1 style={{color:'red',backgroundColor:'black'}}>{props.title}</h1> */

// Other way
// const stylehead ={
//   color:'red',
//   backgroundColor: 'black'
// }
// <h1 style={stylehead}>{props.title}</h1>