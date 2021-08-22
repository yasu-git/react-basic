import React, { useState } from 'react'

const Basic2 = () => {

    //prducts配列の宣言
    const [products, setProducts] = useState([])
    //products配列に追加していく処理
    const newProducts = () => {
        setProducts([...products, {
            id: products.length,
            name: "hello React"
        }])
    }
    return (
        <div>
            {/* ボタンを押すとproducts配列に追加されていく */}
            <button onClick={newProducts}>Add New Product</button>
            <ul>{products.map(product => (
                <li key={product.id}>{product.name} id: {product.id}</li>
            ))}</ul>
        </div>
    )
}

export default Basic2
