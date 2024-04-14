let block_content_html = '';
class AppBlockContent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = block_content_html;
        this.id = 'app-block-content';
    }
}
window.customElements.define("app-block-content", AppBlockContent)