<main>
  <span id="triangle"></span>
  <p></p>
  <x-icon-btn id="close" white small>close</x-icon-btn>
</main>
<style>
@keyframes scale-in-center{0%{transform:scale(0);opacity:1}100%{transform:scale(1);opacity:1}}
  :host {
    --popup-shadow: 0 0 1em darkgrey;
    --popup-background: var(--white);
  }

  :host {
    display: none;
    position: absolute;
    left: 0;
    z-index: 20;
    overflow: hidden;
    /* for triangle and shadow */
    padding: 4rem;    
    transform: translateX(0%) translateY(-50%);
    top: 50%;
  }

  :host([active]) {
    display: block;
    animation:scale-in-center .05s cubic-bezier(.25,.46,.45,.94) both
  }
  #close{
    margin:1.2rem;    
  }
  #triangle {
    position: absolute;
    left: 0;
    transform: translateX(-50%) rotate(45deg);    
    top:calc(50% - 1rem);
    width: 2rem;
    height: 2rem;
    background: var(--popup-background);
    background-color: var(--blue);
  }

  x-icon-btn {
    position: absolute;
    right: .4rem;
    top: .4rem;
    width: 1.6rem;
    height: 1.6rem;
    fill: var(--blue);
  }

  main {
    position: relative;
    max-width: 23rem;
    min-height: 4rem;
    background-color: #fff;
    background-color: var(--blue);
    border-radius: var(--large-radius);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 0px 3rem -1rem, rgba(0, 0, 0, 0.05) 0px 20px 30px -20px,   rgba(50, 50, 93, 0.4) -1rem 0px 4rem -2rem;
    padding:1.2rem;
    padding-top: 0rem;
    padding-bottom: 0rem;
  }

  p {
    padding: 2rem 1rem;
    font-size: var(--tx-small);
    font-size: 1rem;
    line-height: 1.3;
    font-size: 0.95rem;
    color:var(--black);
    color:#fff;
  }

  p img {
    display: block;
    width: 7rem;
  }

  i{
    font-style: normal;
    font-weight: 200;
    font-size: 1.65rem;        
    color: var(--sea);
    color: #fff;
  }

</style>
