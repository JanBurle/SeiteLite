class _ extends ShadowElem {
    constructor() {
        super();
        this.setHtml('span', this.textContent);
        this.qSel('svg').fetchIcon(this.attr('icon'));
    }
    init() {
        this.setAttr('tabindex', '0');
        this.onkeydown = (e) => {
            if (e.code === 'Enter' || e.code === 'Space')
                this.click();
        };
    }
}
