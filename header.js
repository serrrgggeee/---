class AppHeade extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '';
        this.id = 'head'
    }
}
window.customElements.define("app-head", AppHeade)


const novbar_collapse_html = `
    <div id="navbar" class="navbar-collapse collapse">
        <ul id="nav" class="nav navbar-nav">
            <li><a href="/" class="dropdown-toggle">ГЛАВНАЯ</a></li>
            <li><a href="/book/" class="dropdown-toggle">КНИГИ</a></li>
        </ul>
    </div>
`
class AppNavbarCollapse extends HTMLElement {
    connectedCallback() {
        this.innerHTML = novbar_collapse_html;
    }
}
window.customElements.define("app-navbar-collapse", AppNavbarCollapse)