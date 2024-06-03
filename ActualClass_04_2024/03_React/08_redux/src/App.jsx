import Counter from "./component/normalComponent/Counter"
import './App.css'
import CounterRedux from "./component/reduxComponent/CounterRedux"
import Todo from "./component/reduxComponent/Todo"
import UserRedux from "./component/reduxComponent/UserRedux"

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <CounterRedux /> */}
      {/* <Todo /> */}
      <UserRedux />
    </>
  )
}

export default App
