import React from 'react'
import Header from '../../components/Header'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div>Homepage sofa哥!</div>
            <button onClick={() => {alert('zzw!')}}>click</button>
        </div>
    )
}

export default Home