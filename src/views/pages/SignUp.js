import baseURL from '../../service/baseURL.js';

// document.postRegisterNewUser = async () => {
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };

//     try {
//         const registerData = {
//             name: document.getElementById('username').value,
//             email: document.getElementById('email').value,
//             password: document.getElementById('password').value,
//         }

//         const response = await fetch(baseURL, { 
//             method: 'post',
//             body: JSON.stringify(registerData)
//         })
//         const json = await response.json();

//         return json
//     } catch (error) {
//         console.log('Ocorreu um erro: ',error)
//     }
// }

let SignUp = {
    render :async () => {
        // window.postData = postRegisterNewUser();
        let view = `
        <div class="container">
        <div class="row mt-5 mb-5">
            <div class="col-md-6 m-auto">
                <div class="fluid text-center pt-5">
                    <h2>Formulario de Cadastro</h2>
                    <p>Seja bem vindo</p>
                    <img src="img/login.png" class="img-fluid m-auto" alt="bootstrap">
                </div>
            </div>
            <div class="col-md-6 m-auto">
                <div class="card">
                    <h2 class="mt-5 mb-4 text-center">Informe aqui seus dados</h2>
                    <form class="p-5">
                        <div class="form-group">
                            <label for="email">Seu Nome</label>
                            <input type="text" class="form-control mb-4" id="nome">
                        </div>
                        <div class="form-group">
                          <label for="username">Seu Nome de usuário</label>
                          <input type="text" class="form-control mb-4" id="login">
                      </div>
                      <div class="form-group">
                      <label for="username">Seu CPF</label>
                      <input type="text" class="form-control mb-4" id="cpf">
                  </div>
                        <div class="form-group">
                            <label for="password">Senha</label>
                            <input type="password" class="form-control mb-4" id="senha">
                        </div>
                        <div class="form-group">
                            <label for="password">Confirme a Senha</label>
                            <input type="password" class="form-control mb-4" id="repassword">
                        </div>
                        <div class="form-group form-check mb-4">
                            <input type="checkbox" class="form-check-input" id="manter">
                            <label class="form-check-label" for="manter">Me mantenha conectado</label>
                          </div>
                          <button id="submit_new_register" class="btn btn-primary" ">Cadastrar-se</button
                    </form>
                </div>
            </div>
        </div>
    </div>
        `

        return view;
    },
    after_render :async () => {
        document.getElementById('submit_new_register').addEventListener('click', () => {
           let nameVal = document.getElementById('login').value,
           lNameVal = document.getElementById('nome').value,
           cpfVal = document.getElementById('cpf').value.replace(/[^\d]/g, ""),
           passwordVal = document.getElementById('senha').value,
           repasswordVal = document.getElementById('repassword').value


           if ( passwordVal === repasswordVal ){

            axios.post(`${baseURL}usuarios`, {
                cpf: cpfVal,
                login: nameVal,
                nome: lNameVal,
                senha: passwordVal
            }, {
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then( res => {
                if ( res.status === 200 ){
                    window.location.replace('#/login')
                }
            })

        } else {
            alert('confira sua senha!')
        }
    })
}
}

export default SignUp;