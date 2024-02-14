import { useState } from 'react'
import classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom'
import Calendar from '@/assets/calendar.svg'

export const App = () => {

    function todo () {
        todo2()
    }

    function todo2 () {
        throw new Error
    }

    const [count, setCount] = useState<number>(0)

    const handleClick = () => {
        todo()
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
