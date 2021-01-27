let Footer = {
    render : async () => {
        let view = `
        <footer class="my-5 pt-5 text-muted text-center text-small">
            <p>© Copyrigth 2021</p>
        </footer> 
        `

        return view;
    },
    after_render : async () => {}
}

export default Footer;



