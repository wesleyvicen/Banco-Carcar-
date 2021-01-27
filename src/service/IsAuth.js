let IsAuthenticated = async (isAuth, route) => {

    if(!isAuth){
        if(!localStorage.getItem('@token')){
        window.location.replace(`#/${route}`)
        }else{
        console.log("Está logado com o token " + localStorage.getItem('@token'))
        }
    }else{
        if(localStorage.getItem('@token')){
            window.location.replace(`#/${route}`)
            }else{
            console.log("Está logado com o token " + localStorage.getItem('@token'))
            }
    }
  }


  export default IsAuthenticated;