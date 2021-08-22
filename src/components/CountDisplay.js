import React from 'react'

//app.jsのtabで宣言された値を取得
const CountDisplay = ({ name, count }) => {
    console.log(`display ${name}`)
    return (
        <div>
            {count}
        </div>
    )
}

export default React.memo(CountDisplay)
