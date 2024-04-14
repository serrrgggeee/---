function left_side_ready() {

    const left_side_html = `
    
    <div id="navbar_left_side" class="left-side">
        <button class="hided_buton_show_menu">Показать меню</button>
        <div class="row place">
            <div class="col-md-12">
                <ul>
                    ${root_nodes}
                </ul>
            </div>
        </div>
        
    </div>
    `
    
    class LeftSideContent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = left_side_html;
    }
    }
    window.customElements.define("left-side", LeftSideContent)
}