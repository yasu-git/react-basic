import React, { useReducer } from 'react'

const initialState = 0

const reducer = (currentState, action) => {
    switch (action) {
        case 'add_1':
            return currentState + 1
            break
        case 'multiple_3':
            return currentState * 3
            break
        case 'reset':
            return initialState
            break
        default:
            return currentState
            break
    }
}

const BasicReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>count {count}</div>
            <button onClick={() => dispatch('add_1')}>Add + 1</button>
            <button onClick={() => dispatch('multiple_3')}>Multiple * 3</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default BasicReducer
