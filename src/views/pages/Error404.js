let Error404 = {
    render :async () => {
        let view = `
        <div>
            <h1>Ouve um erro</h1>
        </div>
        `

        return view;
    },
    after_render :async () => {}
}

export default Error404;