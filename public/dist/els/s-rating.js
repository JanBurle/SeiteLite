class _ extends ShadowElem {
    static reAttrs = ['val'];
    n;
    stars;
    constructor() {
        super();
        this.n = 5;
        this.stars = this.n.genArr(() => this.apdRoot('span'));
    }
    init() {
        this.render();
    }
    render() {
        let val = this.numAttr('val');
        this.n.loop((i) => {
            this.stars[i].innerHTML = this.star(val - i);
        });
    }
    reatr() {
        this.render();
    }
    star(v01) {
        v01 = v01.clamp(0, 1);
        let on = '#ffc10e', off = '#d9dadc', defs = '', fill;
        if (v01.isInt()) {
            fill = v01 ? on : off;
        }
        else {
            let perc = Math.round(v01 * 100);
            defs = `<defs><linearGradient id="fill%"><stop offset="0%" stop-color="${on}" /><stop offset="${perc}%" stop-color="${on}" /><stop offset="${perc}%" stop-color="${off}" /><stop offset="100%" stop-color="${off}" /></linearGradient></defs>`;
            fill = 'url(#fill%)';
        }
        return `<svg viewBox="0 0 220 220">${defs}<path fill="${fill}" d="M110 5.38l33.99 68.88L220 85.3l-55 53.62 12.98 75.7L110 178.88l-67.98 35.74L55 138.92 0 85.3l76.01-11.04z" /></svg>`;
    }
}
