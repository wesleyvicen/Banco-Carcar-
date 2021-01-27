let Home = {
    render : async() => {
      let frases = ['Namorar é bom, mas tu já encontrou dinheiro no mêi da rua?', 'Cada dia é uma nova oportunidade pra... Deixar de ser besta!', 'Não se avexe, Não se agunie e nem murche as urêa, uma hora as coisas darão certo.', 'O Nordeste é a mulesta de bom!'];

        let view = `
        <div class="row">
            <div class="container-parallax bg-img--version--1 ">
            <div class="row ">
                <div class="col-md-6">
                    <div class="cabra">
                        <h1>${frases[Math.floor(Math.random() * 4)]}</h1>
                    </div>
                </div>
              </div>
            </div>
        </div>
        `

        return view;
    },
    after_render : async () => {

    }
}

export default Home;