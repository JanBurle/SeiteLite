<svg></svg>
<style>
  :host {
    width: 3rem;
    height: 3rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    cursor: pointer;
    background: var(--bggray);    
  }
  :host([up]) .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  :host([qlt]) {
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 100% 0 0 0;
    background-color: #fff;
  }

  :host([clear]) {
    background: transparent;
  }

  :host([white]) {
    background: v;
    fill: var(--white);
  }

  :host([blue]) {
    background: var(--blue);
    fill: var(--white);
  }

  :host([blue]) .icon {
    fill: var(--white);
  }

  :host(:hover) {
    filter: brightness(1.1);
  }

  .icon {
    width: 2.6rem;
    height: 2.6rem;
    fill: var(--blue);
  }

  :host([qlt]) .icon {
    margin-left: 1rem;
  }

  :host([small]) {
    width: 1.2rem;
    height: 1.2rem;
  }

  :host([small]) .icon {
    width: 1.1rem;
    height: 1.1rem;
    margin: 0.05rem;
  }
</style>
