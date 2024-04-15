class AppBlockContent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '';
        this.id = 'app-block-content';
    }
}
window.customElements.define("app-block-content", AppBlockContent)