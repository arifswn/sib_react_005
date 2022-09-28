import PropTypes from "prop-types" // ES6

const ButtonClick = ({ type, children, icon, ...props }) => {
  return (
    <button type={type} {...props}>
      {children} {icon}
    </button>
  )
}

ButtonClick.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  icon: PropTypes.object,
}

ButtonClick.defaultProps = {
  onClick: () => {},
  type: "",
}

export default ButtonClick
