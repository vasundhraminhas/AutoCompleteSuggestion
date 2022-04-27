export class SearchObject {
    private _suggestionKey: string;
    private _suggestionValue: string;

    constructor(key: string, value: string) {
        this._suggestionKey = key;
        this._suggestionValue = value;
    }

    get suggestionKey() {
        return this._suggestionKey;
    }

    get suggestionValue() {
        return this._suggestionValue;
    }
}