import React, { useState, useEffect } from 'react'

const Timer = () => {

    const [count, setCount] = useState(0)

    //時間を1増やす
    const time = () => {
        setCount(prevCount => prevCount + 1)
    }

    //1秒ごとにtimeを処理する
    useEffect(() => {
        const interval = setInterval(time, 1000)
        return () => {
            clearInterval(interval)
            console.log("cleard")
        }
    }, [])

    return (
        <div>
            {count}
        </div>
    )
}

export default Timer
