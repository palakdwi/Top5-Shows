import React from 'react'

const Navbar = () => {
    const navStyle = {
        background: '#3C4F76',
        fontSize: 'bold',
        padding: '5px',
        color: '#DDDBF1',
        height: '70px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
    return (
        <>
        <h1 style={navStyle}> List of Top 5 Shows on Netflix! </h1>
        </>
    )
}

export default Navbar
