import  {useState} from 'react'
import Usestate from './Components/UseEffect';
const App = () => {
  let [count,setCount] = useState(1);
  /**
   * State varaiable
   * - updation
   * - re-rendering
   * count- getting value
   * setCount - updation of value
   */

  // if we do below the html dom won't get re-rendered instead we use useState
  // let count = 0;
  // function increment()
  // {
  //   count +=1;
  //   console.log(count);
  // }
  // function decrement()
  // {
  //   count -=1;
  //   console.log(count);
  // }
  console.log('count',count);
  function increment()
  {
    setCount(count += 1)
  }
  function decrement()
  {
    setCount(count -= 1)
  }
  return (
    <div>
      <div>
      <Usestate/>
      </div>
      <h1>Our app</h1>
      <p>count:{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App
