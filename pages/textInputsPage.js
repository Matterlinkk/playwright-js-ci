import {basePage} from "./basePage";
import {expect} from "@playwright/test";

export class TextInputsPage extends basePage {
    constructor(page) {
        super(page);
        this.textInput = this.page.locator("#id_text_string")
        this.resultText = this.page.locator("#result-text")
    }

    async goto() {
        await this.page.goto("https://www.qa-practice.com/elements/input/simple");
        expect(this.page.url()).toContain("/elements/input/simple");
        await this.page.waitForLoadState("load");
    }
}