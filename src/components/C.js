import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'

const C = () => {
    //App.jsをuseContextを使いAppContext.Providerのvalueを表示する
    const value = useContext(AppContext)
    return (
        <div>
            <h3>C</h3>
            {value}
        </div>
    )
}

export default C
