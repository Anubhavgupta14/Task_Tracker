import propTypes from 'prop-types'
import Button from './Button'
const header = ({title,onToggleAdd, showAdd}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text={showAdd ? 'Close':'Add'} color ={showAdd ? 'red':'green'} onClick={onToggleAdd}/>

    </header>
  )
}

// header.defaultProps={
//     title: 'Hello',
// }
// It will put title to Hello as default

header.propTypes = {
  title: propTypes.string.isRequired,
}

// We Can use internal Css
/* <h1 style={{color:'red',backgroundColor:'black'}}>{props.title}</h1> */

// Other way
// const stylehead ={
//   color:'red',
//   backgroundColor: 'black'
// }
// <h1 style={stylehead}>{props.title}</h1>

export default header
