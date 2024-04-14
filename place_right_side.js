class PlaceRightSideContent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = place_right_side_html;
    }
}

window.customElements.define("place-right-side", PlaceRightSideContent)