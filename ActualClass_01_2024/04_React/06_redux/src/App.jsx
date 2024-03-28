import './App.css'
import Counter from './component/normalComponents/Counter'
import User from './component/normalComponents/User'
import CounterRedux from './component/reduxComponents/CounterRedux'
import TodoRedux from './component/reduxComponents/TodoRedux'
import UserRedux from './component/reduxComponents/UserRedux'

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <User /> */}

      {/* <CounterRedux /> */}
      {/* <TodoRedux /> */}
      <UserRedux />
    </>

  )
}

export default App
