<slot></slot>
<div></div>
<style>
  slot {
    display: none;
  }

  :host {
    display: inline-block;
    overflow: hidden;
  }

  div {
    display: flex;
    flex-direction: row;
    /*--size: 4rem;
    height: var(--size);
    font-size: var(--size);
    font-weight: 800;
    */
    line-height: 1.1em;  /* mezera mezi radky pozor na vypocet */
    
    --size: 2.5rem;
    height: var(--size);
    font-size: var(--size);
    font-weight: 800;
    line-height: 1.1em;  /* mezera mezi radky pozor na vypocet */
  }

  :host([large]) div {
    --size: 5rem;
  }

  :host([min]) div {
    --size: 3rem;
  }

  :host([big]) div { /* na home page pocet dny v tydnu */
    --size: 8rem;
  }

  :host([blue]) div { /* nekde kde nema spravnou barvu */
    color: var(--blue);
  }

  span {
    margin-top: 0;
    transition: margin 1.3s ease-in-out;
  }

  span.space {
    margin-left: .2em;
  }
</style>
