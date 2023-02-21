import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item listItem={"Ferrari"}/>
                <Item listItem={"Renault"}/>
                <Item listItem={"Fiat"}/>
            </ul>
        </>
    )
}

export default List