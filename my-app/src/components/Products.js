import { Card } from "./Card";

function Products(){
    
    let arr = [1,2,3,4,5,6,7,8,9,10]

    return (
        <div className="container mt-5 pt-4">
            <div className="row row-cols-4 g-3">
                {
                    arr.map(ele => <Card/>)
                }
            </div>
        </div>
    )
}


export default Products