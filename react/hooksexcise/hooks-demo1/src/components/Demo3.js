import React, {useState} from 'react'

// 简易的redux
function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState)

  function dispatch(action) {
    const nextState = reducer(state, action)
    setState(nextState)
  }

  return [state, dispatch]
}

// reducer
function todosReducer(state, action) {
  const {type, num} = action
  switch (type) {
    case 'add':
      return state + num
    // ... other actions ...
    default:
      return state
  }
}

// 组件
export default () => {
  const [todos, dispatch] = useReducer(todosReducer, 0)
  return (
    <>
      <h1>dome3</h1>
      <div>
        {todos}
        <button
          onClick={() => {
            dispatch({type: 'add', num: 2})
          }}
        >
          +2
        </button>
      </div>
    </>
  )
}
