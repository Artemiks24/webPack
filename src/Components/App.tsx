import { useState } from 'react'
import classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom'
import Calendar from '@/assets/calendar.svg'

export const App = () => {

    const [count, setCount] = useState<number>(0)

    const handleClick = () => {
        setCount((prev => prev + 1))
    }
    return (
        <>
            <Link to={'/about'}>about</Link>
            <br />
            <Link to={'/shop'}>shop</Link>
            <h1>{count}</h1>
            <div>
                <Calendar />
            </div>
            <button className={classes.button} onClick={handleClick}>inc</button>
            <Outlet />
        </>
    )
}
