import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CoTicketUi-styles.js';
import '@bbva-web-components/bbva-web-form-text/bbva-web-form-text';
import '@bbva-web-components/bbva-web-link/bbva-web-link';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default';
import '@bbva-web-components/bbva-core-icon/bbva-core-icon';
import {bbvaInfo, bbvaUpdate} from '@bbva-web-components/bbva-foundations-icons/bbva-foundations-icons';
import '@bbva-web-components/bbva-web-panel-token/bbva-web-panel-token';
import {password} from '@bbva-web-components/bbva-foundations-microillustrations/bbva-foundations-microillustrations';
import '@bbva-web-components/bbva-web-form-password/bbva-web-form-password';
import '@bbva-web-components/bbva-web-header-multistep/bbva-web-header-multistep.js';
import '@bbva-web-components/bbva-web-progress-multistep-bar/bbva-web-progress-multistep-bar.js';
import '@bbva-web-components/bbva-web-button-multistep-back/bbva-web-button-multistep-back.js';

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<co-ticket-ui></co-ticket-ui>
```

##styling-doc

@customElement co-ticket-ui
*/
export class CoTicketUi extends LitElement {
  static get is() {
    return 'co-ticket-ui';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('co-ticket-ui-shared-styles')
    ];
  }


  _infoSection(){
    return html`
      <div class="info-section">
        <h2>Ahora, ingresa el token enviado a tu celular y empieza a usar TransfiYa</h2>
        <p>Solo debes digitar el código de seguridad que te enviamos en un mensaje de texto.</p>
        <bbva-web-form-password label="Código de seguridad" info-message="Si no recibiste el mensaje, solicita el código de nuevo en:" required="">
        </bbva-web-form-password>
        <bbva-web-link href="#" target="_blank" icon="${bbvaInfo()}"  class="link-info">2:00 min</bbva-web-link>
        <br>
        <bbva-web-link href="#" target="_blank" icon="${bbvaUpdate()}"  class="link-info">Solicitar otro código</bbva-web-link>
        <br>
        <bbva-web-button-default id="button" disabled="">Confirmar y continuar</bbva-web-button-default>
      </div>
    `
  }


  _headerSection(){
    return html`
    <div class="header">
        <div class="zone">
          <bbva-web-header-multistep block-title="Transfiere y recibe" id="header-title" closeLabel="Salir">
          </bbva-web-header-multistep>
          <bbva-web-progress-multistep-bar current="3" max="5"></bbva-web-progress-multistep-bar>
          <section>
            <bbva-web-button-multistep-back text="Anterior"></bbva-web-button-multistep-back>
          </section>
        </div>
      </div>
    `
  }

  
  _panelSection(){
    return html`
      <div class="panel-section">
        <bbva-web-panel-token>
          <div slot="image" id="image-panel">${password}</div>
        
          <p id="panel-title">¿Cómo generar tu token?</p>
          <p>Éste es un código generado de 8 dígitos que llegará a la app de tu teléfono.</p>
        </bbva-web-panel-token>
      </div>
    `
  }

  // Define a template
  render() {
    return html`
      ${this._headerSection()}
      <div class="main-container">
        ${this._infoSection()}
        ${this._panelSection()}
      </div>
    `;
  }
}
