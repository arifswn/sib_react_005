import React, { logComponentStackToMyService } from "react"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hashError: true }
  }

  componentDidCatch(error, info) {
    logComponentStackToMyService(info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div>
            <h1>Something went wrong.</h1>
            <span>Back to Home.</span>
          </div>
        </>
      )
    }

    //view component
    return this.props.children
  }
}

export default ErrorBoundary
