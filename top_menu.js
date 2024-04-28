const novbar_collapse_html = `
    <div id="navbar" class="navbar-collapse collapse">
        <ul id="nav" class="nav navbar-nav">
            <li><a href="${main_page}" class="single_page_link dropdown-toggle">ГЛАВНАЯ</a></li>
            <li><a href="/book/1/" class="single_page_link dropdown-toggle">КНИГИ</a></li>
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