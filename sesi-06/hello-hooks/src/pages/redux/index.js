import { createStore } from "redux"
import "./index.css"

// Redux architecture pieces
const initialState = { count: 0 }

const actions = {
  increment: { type: "INCREMENT" },
  decrement: { type: "DECREMENT" },
}

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.increment.type:
      return {
        count: state.count + 1,
      }

    case actions.decrement.type:
      return {
        count: state.count - 1,
      }

    default:
      return state
  }
}

const CreateRedux = () => {
  const store = createStore(countReducer)

  const incrementHandler = () => {
    store.dispatch(actions.increment)
  }

  const decrementHandler = () => {
    store.dispatch(actions.decrement)
  }

  store.subscribe(() => console.log(store.getState()))

  return (
    <>
      <div className="wrapper-redux">
        <div className="wrapper-section">
          <div className="redux-text">
            <p>Buka Console</p>
          </div>
          <div className="redux-button">
            <button onClick={() => decrementHandler()}>Decrement</button>
            <button onClick={() => incrementHandler()}>Increment</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateRedux
