


export function Child({item ,list}){

   return (
    <>
        <h1>{item.title}</h1>
    <h1>{item.price}</h1>
    <h1>{item.rate}</h1>

    <h4>{list.join(" | ")}</h4>
    </>
   )
    
}