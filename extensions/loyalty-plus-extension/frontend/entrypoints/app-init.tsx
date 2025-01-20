import ReactDOM from "preact/compat";
import { App } from "@LoyaltyPlus/components/App";
import styles from "./app-init.css?inline";

const styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(styles);

class WebAppInit extends HTMLElement {
  shadowRoot: ShadowRoot;

  constructor() {
    super();

    this.shadowRoot = this.attachShadow({ mode: "open" });

    this.shadowRoot.adoptedStyleSheets = [styleSheet];

    const appContainer = document.createElement("div");
    this.shadowRoot.appendChild(appContainer);

    ReactDOM.render(
      <html style={{ letterSpacing: "normal" }}>
        <App />
      </html>,
      appContainer,
    );
  }
}

customElements.define("loyalty-plus", WebAppInit);
