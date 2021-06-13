import React from 'react'

function Header() {
    return (
        <div className="ui secondary pointing menu">
            <a href="/" className="item">
                Accordian
            </a>
            <a href="/list" className="item">
                Search
            </a>
            <a href="/dropdown" className="item">
                Dropdown
            </a>
            <a href="/translate" className="item">
                Translate
            </a>
        </div>
    )
}

export default Header
