import { useState, useEffect } from 'react'

const UseEffect = () => {
  const [countOne, setCountOne] = useState(0);

  /**
   * state variable
   * - updation
   * - re-rendering
   * count - getting value
   * setCount - updation of value - function
   */
  console.log(countOne);

  /**
   * useEffect(() => {}, [])
   * useEffect(CALL_BACK, DEPENDANCY_ARRAY)
   * - run for first render
   * - it will re-render whenever any dependancy updates
   * - dependancy should be a state variable
   */

  
  useEffect(()=> {
    console.log('useEffect');
    // complex operation
    for(let i = 0; i < 1000000000; i++) {
      let a = i;
    }
    // api calls - 500ms - 1s
    // api calls - costly
  })

  function incrementOne() {
    setCountOne(countOne + 1)
  }

  return (
    <div>
      <h1>Componenet</h1>

      <p>countOne : {countOne}</p>
      <button onClick={incrementOne}>Increment One</button>
    </div>
  )
}

export default UseEffect