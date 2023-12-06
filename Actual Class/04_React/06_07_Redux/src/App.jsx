import './App.css'
import Counter from './component/normalComponents/Counter'
import CounterRedux from './component/reduxComponents/CounterRedux'
import TodoRedux from './component/reduxComponents/TodoRedux'
import UserRedux from './component/reduxComponents/UserRedux'

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <CounterRedux></CounterRedux> */}
      {/* <TodoRedux></TodoRedux> */}
      <UserRedux></UserRedux>
    </>
  )
}

export default App
