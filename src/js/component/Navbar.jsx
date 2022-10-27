import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
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