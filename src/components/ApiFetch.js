import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ApiFetch = () => {

    const [posts, setPosts] = useState([])
    //データのidを指定して取得する処理
    const [id, setId] = useState(1)
    const [clicked, setClicked] = useState(false)
    const handlerClicked = () => {
        //clickしたときにsetClickedを反転させる
        setClicked(!clicked)
    }

    useEffect(() => {
        // //jsonデータを取得するアドレス
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => {
        //         //取得したデータをres.dataに渡す
        //         setPosts(res.data)
        //     })

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'GET' })//dataをゲットする
            .then(res => res.json())//html状態で帰ってくるので一度jsonにデータを変更し
            .then(data => {         //dataに代入する
                setPosts(data)      //
            })

    }, [clicked]
    )
    return (
        <div>
            <input type='text' value={id} onChange={evt => setId(...evt.target.value)} />
            <br />
            <button type='button' onClick={handlerClicked}>Get post</button>
            <div>{posts.title}</div>
            <siv>{posts.body}</siv>
            {/* <ul>
                {
                    posts.map(post => <li key{...post.id}>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                    </li>)
                }
            </ul> */}
        </div>
    )
}

export default ApiFetch
