'use strict'
import { DOM } from './dom';

export class View {

    get buttonSelector(): string {
        return `#${this.name}-button`;
    }

    get selector(): string {
        return `#${this.name}`;
    }

    constructor(public name: string) {
        DOM.listenAll(this.buttonSelector, 'click', this.onButtonClicked.bind(this));
    }

    activate() {
        document.location.hash = this.name;
    }

    deactivate() {
        document.location.hash = '';
    }

    private onButtonClicked(e: MouseEvent) {
        if (document.body.classList.contains(`is-section--${this.name}`)) {
            this.deactivate();
        }
        else {
            this.activate();
        }
    }
}