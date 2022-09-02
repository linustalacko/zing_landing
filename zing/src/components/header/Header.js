import React from 'react'
import './header.css'

export default class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div><h2 className='zing'>zing</h2></div>
                <div className='navbar'>
                    <div className='get-started'>Get started</div>
                </div>
            </div>
        )
    }
}