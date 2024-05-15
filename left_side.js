function left_side_ready() {

    const left_side_html = `
    
    <div id="navbar_left_side" class="left-side">
        <li class="hided_buton_show_menu"><a>Населённые пункты</a></li>
        <div class="place">
            <ul>
                ${root_nodes}
            </ul>
        </div>
        
    </div>
    `
    
    class LeftSideContent extends HTMLElement {
        connectedCallback() {
            this.innerHTML = left_side_html;
        }
    }
    window.customElements.define("left-side", LeftSideContent)

    document.querySelector('.place').addEventListener("click", hideMenu)
}