import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Subscriber app</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">AddSubscribersPage</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/view">View</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/search">SearchSubscribersPage</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/delete">DeleteSubscribersPage</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
