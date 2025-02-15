<svg></svg>
<style>
  :host([small]) {
    --size: .8rem;
  }

  :host {
    --size: 1rem;
  }

  :host([larger]) {
    --size: 1.1rem;
  }

  :host([large]) {
    --size: 1.2rem;
  }

  :host([big]) {
    --size: 1.4rem;
  }

  :host([huge]) {
    --size: 2rem;
  }

  :host([xxxl]) {
    --size: 3rem;
  }

  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--size);
    height: var(--size);
  }

  :host([green]) {
    color: var(--green);
  }

  :host([cy]) {
    /* kratsi pro srovnani verzi */
    color: var(--green);
    --size: 1.2rem;
  }

  :host([cn]) {
    /* kratsi pro srovnani verzi */
    color: var(--red);
    --size: 1.2rem;
  }

  :host([cd]) {
    /* kratsi pro srovnani verzi */
    color: var(--blue);
    --size: 1.2rem;
  }

  :host([red]) {
    color: var(--red);
  }

  :host([blue]) {
    color: var(--sea);
  }

  :host([white]) {
    color: #fff;
  }

  :host([blue]){
    color: var(--sea);
  }
  :host([gray]){
    color: var(--gray);
  }


</style>
