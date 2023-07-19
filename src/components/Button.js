import propTypes from 'prop-types'

const Button = ({text,color,onClick}) => {
  return (
      <button onClick={onClick} style={{backgroundColor:color}} className="btn">{text}</button>
  )
}

Button.defaultProps ={
  color: 'steelblue'
}

Button.propTypes={
  text: propTypes.string,
  color: propTypes.string,
  oncClick: propTypes.func, 
}
export default Button
