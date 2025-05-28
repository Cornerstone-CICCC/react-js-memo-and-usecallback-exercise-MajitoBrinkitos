import { useState } from 'react'
import Profile from './components/Profiles'
import ProductList from './components/ProductList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <Profile firstname="Jane" lastname="Doe" />

      <ProductList />
     </div>
    </>
  );
}

export default App