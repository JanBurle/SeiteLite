class _ extends ShadowElem {
    constructor() {
        super();
        let name = this.attr0();
        this.qSel('svg').fetchIcon(name);
    }
}
