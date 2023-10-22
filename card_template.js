customElements.define("project-card",   
    class extends HTMLElement{
        constructor()
        {
            super();

            const card_template = document.getElementById("card-template");
            const card_content = card_template.content;
            const shadowRoot = this.attachShadow({mode:"open"}).appendChild(card_content.cloneNode(true));
            // this.appendChild(card_content.cloneNode(true));
        }
});