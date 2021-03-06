import { WebComponent } from 'webcomponents-vanilla';

@WebComponent({
  tagName: 'wc-component',
  templateUrl: './wc.component.html',
  styleUrl: './wc.component.scss',
})
export class WcComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('container connected');
    console.log(this.children.length);
  }
}
