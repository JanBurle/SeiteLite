<div>
  <slot></slot>
</div>
<x-icon-btn id='btnLeft'>arrow-left</x-icon-btn>
<x-icon-btn id='btnRight'>arrow-right</x-icon-btn>
<style>
  :host {
    display: flex;
    justify-content: center;
  }

  div {
    display: flex;
    gap: 1.4rem;
    padding: 0 1rem;
    overflow-x: scroll;
    scrollbar-width: none;
  }

  x-icon-btn {
    position: absolute;
    top: 25%;
    opacity: 0;
  }

  x-icon-btn#btnLeft {
    left: 1rem;
  }

  x-icon-btn#btnRight {
    right: 1rem;
  }

  :host(.scroll) x-icon-btn {
    opacity: .8;
  }
</style>
