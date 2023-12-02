import './App.css'
import Counter from './component/normalComponents/Counter'
import CounterRedux from './component/reduxComponents/CounterRedux'
import TodoRedux from './component/reduxComponents/TodoRedux'

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <CounterRedux></CounterRedux> */}
      <TodoRedux></TodoRedux>
    </>
  )
}

export default App
