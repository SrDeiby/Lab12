class WarningBadge extends HTMLElement {

  static get observedAttributes(){
    return ["pulsing"];
  }

  constructor(){
    super();

    this.attachShadow({ mode:"open" });
  }

  connectedCallback(){
    this.render();
  }

  attributeChangedCallback(){
    this.render();
  }

  render(){

    const pulsing = this.hasAttribute("pulsing");

    this.shadowRoot.innerHTML = `
      <style>

        :host{
          display:block;
        }

        .badge{

          padding:16px;

          border-radius:14px;

          background:#2A2100;
          color:#FFE000;

          border:3px solid #FFE000;

          text-align:center;

          font-weight:bold;

          ${
            pulsing
              ? `
                animation:pulse 1s infinite;
                box-shadow:0 0 20px rgba(255,224,0,.5);
              `
              : ``
          }

        }

        @keyframes pulse{

          0%{
            transform:scale(1);
          }

          50%{
            transform:scale(1.03);
          }

          100%{
            transform:scale(1);
          }

        }

      </style>

      <div class="badge" part="badge">
        <slot>
          Sesión por expirar
        </slot>
      </div>
    `;
  }

}

customElements.define("warning-badge", WarningBadge);