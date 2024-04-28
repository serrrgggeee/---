class HtmlHeade extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="yandex-verification" content="a99aa1fbf0b1b53b" />
            <meta name="google-site-verification" content="Vr9sGlpUuxvywlRfUhFIaL0mtfSR7915X96UkWpsic4" />
            <link rel="icon" type="image/ico" href="${static_dot}/static/theme/images/favicon.png">
        
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

