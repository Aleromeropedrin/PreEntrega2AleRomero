import React from 'react'
import logoImage from '../../assets/logo/logo.jpg';


const logo = () => {
  return (
    <div>
        <img src={logoImage} alt="Logo" style={{ width: '50px' }} />
    </div>
  )
}


export default logo