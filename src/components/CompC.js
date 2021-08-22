import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'

const CompC = () => {
    //App.jsのAppContext.Providerで設定した値を使用
    const { dispatchProvided } = useContext(AppContext)

    return (
        <div>
            <button onClick={() => dispatchProvided('add_1')}>Add + 1</button>
        </div>
    )
}

export default CompC
