const {test, expect} = require('@playwright/test');
const {TextInputsPage} = require("../pages/textInputsPage");

test.describe("Text inputs", async () => {
    test("Text input", async ({ page }) => {
        const textInputsPage = new TextInputsPage(page)
        await textInputsPage.goto()
        await textInputsPage.textInput.fill("qwe")
        await textInputsPage.page.keyboard.press('Enter')
        await expect(textInputsPage.resultText).toHaveText("qwe")
    })
})