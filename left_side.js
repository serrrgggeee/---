function left_side_ready() {

    const left_side_html = `
    <div class="col-md-3 left-side">
        <div class="row place">
            <div class="col-md-12">
                <ul>
                    ${root_nodes}
                </ul>
            </div>
        </div>
        <side-menur></side-menu>
        
    </div>
    `
    
    class LeftSideContent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = left_side_html;
    }
    }
    window.customElements.define("left-side", LeftSideContent)
}