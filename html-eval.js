class HTMLEval extends HTMLElement {
  
  constructor() {

    super()

  }

  connectedCallback() {

    if(this.hasAttribute('value')) {

      this.attachShadow({mode: 'open'}).innerHTML = eval(this.getAttribute('value'))

    }

  }

}

window.customElements.define('html-eval', HTMLEval)
