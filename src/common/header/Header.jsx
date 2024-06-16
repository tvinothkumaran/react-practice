import React from 'react'
import logo from '../Assest/images/img/logo1-removebg-preview.png'

export default function(){
  return (
    <div>
   
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <a class="navbar-brand" href="#"><img src={logo} className='img-fluid logo' alt='logo' /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item active nu">
        <a class="nav-link" href="#">Art</a>
      </li>
      <li class="nav-item nu">
        <a class="nav-link" href="#">Collectible</a>
      </li>
      <li class="nav-item nu">
      <a class="nav-link " href="#">Gaming</a>
      </li>
      <li class="nav-item nu">
        <a class="nav-link" href="#">Explore</a>
      </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
