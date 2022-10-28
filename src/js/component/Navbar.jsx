import React from 'react'

const Navbar = () => {

const logoStarWars = "https://1000marken.net/wp-content/uploads/2021/01/Star-Wars-Logo.png"
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img width="100px" src={logoStarWars}></img></a>
        <div class="col-2 justify-content-end">
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-nut"></i>
                          Favourites
                        </button>
                        <ul class="dropdown-menu">
                   
                        </ul>
                    </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar;