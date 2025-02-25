import { Card } from "./Card"


function Navbar(){
    let arr =  [ 1, 2, 3, 4, 5, 7, 8, 9, 10]
    return(

        <nav class="navbar bg-dark navbar-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Offcanvas navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas bg-dark text-white offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body ">
              
              <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>

              <div className="row mt-5 row-cols-2 g-1">
                    {
                      arr.map(ele => <Card/>)   
                    }
                </div>
            </div>
          </div>
        </div>
      </nav>
    )
}


export default Navbar