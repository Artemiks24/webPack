import { useState } from 'react'
import './App.scss'

export const App = () => {

    const [count, setCount] = useState<number>(0)

    const handleClick = () => {
        setCount((prev => prev + 1))
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleClick}>inc</button>

        </>
    )
}
