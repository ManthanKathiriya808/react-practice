import logo from '../logo.svg'
import harry from '../harry.jpg'



export function Card(){

    return(
        <div className='col'>
                    <div class="card" >
  <img src={harry} class="img-thumbnail " style={{width:"100%",height:"300px"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
    )
}