

export function Child({props}){

    const {name, lastName, loc} = props

    return(
      <>
          <h1>{name}</h1>
        <h1>{lastName}</h1>
        <h1>{loc}</h1>
      </>
    )
}