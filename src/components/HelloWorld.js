import Frase from "./Frase"

function HelloWorld(){
    
    const nome = "Gabriel"

    return (

        <div>
            <Frase/>
            <p>Bem vindo, {nome}!</p>
            <Frase/>
        </div>
    )
}

export default HelloWorld