import React from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'

const Home = (props) => {
    return (
        <div>
            <Header></Header>
            <div>Homepage {props.name}哥!</div>
            <button onClick={() => {alert('zzw!')}}>click</button>
        </div>
    )
}

const mapStateToProps = state => ({
    name: state.name
})

export default connect(mapStateToProps, null)(Home)