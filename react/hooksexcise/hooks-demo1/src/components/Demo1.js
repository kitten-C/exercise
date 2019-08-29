import React, {useState} from 'react'

export default () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>dmo1</h1>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </>
  )
}
