import { useState } from 'react'
import classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom'
import avatarJpg from '@/assets/avatarJpg.jpg'
import Calendar from '@/assets/calendar.svg'

export const App = () => {

    const [count, setCount] = useState<number>(0)

    const handleClick = () => {
        setCount((prev => prev + 1))
    }
    return (
        <>
            <img width={120} height={100} src={avatarJpg} alt="ava" />
            <br />
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
