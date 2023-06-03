import { Counter } from './Counter.js'
import { Suspense } from 'react'
import { container } from './App.css.js'

const App = ({ name = 'Anonymous' }) => {
  return (
    <div className={container}>
      <h1>Hello {name}!!</h1>
      <h3>This is a server component.</h3>
      <Suspense fallback="loading...">
        <Counter />
      </Suspense>
    </div>
  )
}

export default App
