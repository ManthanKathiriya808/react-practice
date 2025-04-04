import { ApiFetch } from "../utilities/ApiFetch"


export const Product = ()=>{


    const {loading , error,data}  = ApiFetch("https://fakestoreapi.com/products")


    return(

  <>
      
        
      <div className='border p-5 max-w-7xl mx-auto'>
        {
            loading  ? <img className="text-center  my-10 " src="https://media3.giphy.com/media/emySgWo0iBKWqni1wR/200w.gif?cid=6c09b952vy7tr3zgi2lg6un44xsqyrbotpidgnf73uu4xqhz&ep=v1_gifs_search&rid=200w.gif&ct=g"/>
            
            :error? 
            
            <h3 className="text-center text-4xl my-10 text-red-600">Something Went Wrong</h3>
            
            : <div className="grid grid-cols-4 gap-3">
                
         {
          data.map((ele) => (
            <div className='rounded-2xl shadow shadow-slate-400 '>
            <img className='w-full h-56' src={ele.image} alt="" />
            <h2>{ele.title}</h2>
          </div>
          ))
         }
       
        </div>
            
        }
        
       
    </div>
  </>
    )
}