import Cards from "./Cards";


function Products(){
    const arr = [1,2,3,4,5,6,7,8,9,10]
    
    return(
        <div className="container  mt-5 pt-5">
            <div className="row row-cols-4 g-4">
        {
            arr.map(ele => <Cards/>)
        }   
            </div>
        </div>
    )
}

export default Products