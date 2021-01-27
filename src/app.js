import Nav from './views/components/Nav.js';
import Footer from './views/components/Footer.js';

import Home from './views/pages/Home.js';
import Dash from './views/pages/Dash.js';
import Login from './views/pages/Login.js';
import SignUp from './views//pages/SignUp.js';
import Error404 from './views//pages/Error404.js';

import Utils from './service/Utils.js';

let routes = { 
    '/': Home,
    '/signup': SignUp,
    '/login': Login,
    '/dashboard': Dash,
}

const router = async () => {

    const header = null || document.getElementById('header')
    const content = null || document.getElementById('container')
    const footer = null || document.getElementById('footer')
    
    //content.innerHTML = Home.render();
    header.innerHTML = await Nav.render();
    await Nav.after_render();
    footer.innerHTML = await Footer.render();
    await Footer.after_render();

    let request = Utils.parseRequestURL();
    let parseURL = (request.resource ? '/' + request.resource: '/') + (request.verb ? '/' + request.verb : '');
    
    let page = routes[parseURL] ? routes[parseURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
}

// Observar as mudanças na URL
window.addEventListener('hashchange', router)
window.addEventListener('load', router)

//
