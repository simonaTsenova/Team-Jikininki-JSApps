import validator from 'validator';

class Item {
    constructor(title, checked) {
        this.title = title;
        this.checked = false;

        const TITLE_MIN_LENGTH = 2;
        const TITLE_MAX_LENGTH = 32;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        validator.isStringLengthBetween(value, TITLE_MIN_LENGTH, TITLE_MAX_LENGTH);
        this._title = value;
    }

    get checked() {
        return this._checked;
    }

    set checked(value) {
        validator.isBoolean(value);
        this._checked = value;
    }
}

export { Item as default }