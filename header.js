class HtmlHeade extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="yandex-verification" content="a99aa1fbf0b1b53b" />
            <meta name="google-site-verification" content="Vr9sGlpUuxvywlRfUhFIaL0mtfSR7915X96UkWpsic4" />
            <link rel="icon" type="image/ico" href="${static_dot}./static/theme/images/favicon.png">
            <link rel="stylesheet" type="text/css" href="${static_dot}/static/css/bootstrap.css"/>
            <link rel="stylesheet" type="text/css"href="${static_dot}/static/bootstrap_slider/css/bootstrap_slider.css"/>
            <link rel="stylesheet" type="text/css" href="${static_dot}/static/css/main/main.css"/>
        `;
        this.id = 'html-head'
    }
}
window.customElements.define("html-head", HtmlHeade)


class AppHeade extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '';
        this.id = 'app-head'
    }
}
window.customElements.define("app-head", AppHeade)


const novbar_collapse_html = `
    <div id="navbar" class="navbar-collapse collapse">
        <ul id="nav" class="nav navbar-nav">
            <li><a href="${main_page}" class="dropdown-toggle">ГЛАВНАЯ</a></li>
            <li><a href="${main_page}/book/" class="dropdown-toggle">КНИГИ</a></li>
            <left-side></left-side>
        </ul>
    </div>
`
class AppNavbarCollapse extends HTMLElement {
    connectedCallback() {
        this.innerHTML = novbar_collapse_html;
    }
}
window.customElements.define("app-navbar-collapse", AppNavbarCollapse)