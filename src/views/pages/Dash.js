import IsAuthenticated from '../../service/IsAuth.js';
import auth from '../../service/IsAuth.js'

import baseURL from '../../service/baseURL.js';
let dataUser = localStorage.getItem('userDataAccount') ? JSON.parse(localStorage.getItem('userDataAccount')) : "" 
let {token, usuario} = localStorage.getItem('userDataAccount') ? dataUser : ""

let HeadersDefault = {
  headers: {
    "Content-Type": "application/json",
    "Authorization" : token
  }
}
const RequestDataAccount = async () => {

  let dataUser = JSON.parse(localStorage.getItem('userDataAccount'))
  
  let { token, usuario: { login }} = dataUser

  console.log(dataUser)
  
  let headersDefault = {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': token
      }
  }
  
  const response = await axios.get(`${baseURL}lancamentos/planos-conta?login=${login}`, headersDefault)
  const allData = response.data
  console.log(allData)
  return allData
}

let Dash = {
  render: async () => {
    let ComponentsData = await RequestDataAccount()
    let userData = JSON.parse(localStorage.getItem('userDataAccount'));
    const { usuario: {nome}, conta, token } = userData
    let fullName = nome.split(' ')
    let IsAuth = await IsAuthenticated(!token, 'login');
    let view = `
    <div class="container">
        <div class="dash-contentheading">
            <h1>Seja bem vindo ao seu internet banking</h1>
        </div>
        <h3> Olá, ${fullName[0]}</h3>
        <br>
        <div class="input-group mb-3">
            <div class="input-group mb-3 m-2 ">
                <input type="text" class="form-control m-2" id="cpf" maxlegth="11" placeholder="Numero do CPF">
                <input type="text" class="form-control m-2" id="description" placeholder="Descrição">
                <span class="input-group-text ms-2 mt-2 mb-2">R$</span>
                <input type="text" class="form-control mt-2 mb-2 me-2" id="moneyvalue" placeholder="Valor em reais">
                <button type="button" id="sendtransfer" class="btn btn-primary m-2">Transferir</button>
            
        </div>
        
        <div class="row align-items-center mt-5" style="width: 100%">
            ${ComponentsData ? ComponentsData.map( data => (`
              <div class="col">  
                <div class="card" style="width: 100%;">
                  <div class="card-body">
                    <h5 class="card-title">${data.descricao}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${data.login}</h6>
                    <p class="card-text">${data.tipoMovimento}</p>
                  </div>
                </div>        
              </div>`)) : ''}
        </div>
        


    </div>
    `
    return view
},
after_render: async () => {
    document.getElementById('destroy_session').addEventListener('click', function(){
        localStorage.clear()
        window.location.replace('#/login')
    })

    // document.getElementById('sendtransfer').addEventListener('click', function(){
    //     let 

    //     axios.post()
    // })
    
}
}

export default Dash;