import { Alert } from "react-bootstrap"
import PropTypes from "prop-types"

const Message = (props) => {
  const { title, message, type } = props

  return (
    <>
      <Alert variant={type}>
        <Alert.Heading>{title}</Alert.Heading>
        <p>{message}</p>
      </Alert>
    </>
  )
}

Message.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
}

Message.defaultProps = {
  type: "info",
}

export default Message
