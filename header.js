const seo = {
    title: "seo",
    h1: "<p><strong>Октябрьский район Волгоградская область</strong><p><p><strong>места, природа, общество</strong><p>",
    organisations: [{
        slug: "slug"
    }]
}
const head_html = `
    <meta name="title" content="{{ seo.title }}">
    <title>${ seo.title }</title>
    <meta name="description" content="${ seo.description }">
    <meta name="keywords" content="${ seo.keywords }">
`

class AppHeade extends HTMLElement {
    connectedCallback() {
        this.innerHTML = head_html;
    }
}
window.customElements.define("app-head", AppHeade)



const header_top_html = `
    <div class="row header-top">
        <div class="col-md-3"></div>
        <div class="col-md-5 col-md-offset-1 text-center">
            ${ seo.h1 }
        </div>
    </div>
`
class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = header_top_html;
    }
}
window.customElements.define("app-header-top", AppHeader)


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