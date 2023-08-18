let cervejas = []
let users = []
let addresses = []

var apiCerveja = "https://random-data-api.com/api/v2/beers?size=3"
var apiUsers = "https://random-data-api.com/api/v2/users?size=3"
var apiAppliances = "https://random-data-api.com/api/v2/addresses?size=3"

let cabecalioCervs = ["Nome", "Álcool", "Estilo", "Amargor"]
let colunasCervs = ["name", "alcohol", "style", "ibu"]

let cabecalioUsers = ["Nome", "E-mail", "Data de Nascimento", "Telefone"]
let colunasUsers = ["first_name", "email", "date_of_birth", "phone_number"]

let cabecalioApp = ["Cidade", "Nome da Rua", "Número", "Estado"]
let colunasApp = ["city", "street_name", "building_number", "state"]

//cs é um array de cervejas
const carregarDiv = cs => {
    
    const div = document.getElementById("cervejasDiv")
    const itensHtml = cs.map( ({name,alcohol}) => `<div>${name} -- ${alcohol}</div>` ) 
    div.innerHTML = `${itensHtml.join("\n")}`

}

async function carregarCervejas(){

    try{
        let res = await fetch("https://random-data-api.com/api/v2/beers?size=3")
        cervejas = await res.json()
        carregarDiv(cervejas)

    }catch(err){
        document.getElementById("cervejasDiv").innerHTML = "Fudeu..."
    }

}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarCervejas() )