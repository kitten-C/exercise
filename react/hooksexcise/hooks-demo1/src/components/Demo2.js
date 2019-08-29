import React, {useState, useEffect} from 'react'

export default () => {
  const [count, setCount] = useState(0)

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`
    console.log(1)
    return () => {
      console.log(2)
    }
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>
        useEffect
        <br />
        第一个回调函数会在 挂载阶段和更新阶段执行
        <br />
        返回值是个函数，这个函数会在 卸载阶段和更新阶段执行
        <br />
        并且可以多次使用useEffect
        <br />
        数据优化，第二个参数，传入一个数组，数组里放入state，被放置的state会在跟新时进行比较，如果相同，将不会经行重新渲染
        <strong>注意：</strong>返回值的函数同样适用
        <br />
        如果想执行只运行一次的
        effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。这就告诉
        React 你的 effect 不依赖于 props 或 state
        中的任何值，所以它永远都不需要重复执行。这并不属于特殊情况 ——
        它依然遵循依赖数组的工作方式。
      </p>
    </div>
  )
}
