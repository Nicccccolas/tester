import React from 'react'
import './styles/header.css'

const Header = () => {
  return (
    <header className='header-container'>
      <h1 className='title'>simula<span className='title_span'>cr.</span></h1>
      <i className='bx bx-menu menu__icon menu--open'></i>
    </header>
  )
}

export default Header