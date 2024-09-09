import { Google } from "./googlePage";
const fs = require ('fs');
const page = new Google();

test('do a search', async () => {
    await page.navigate();
    await page.search('Pumpkin Pie');
    let pageResult = await page.getResults();
    expect(pageResult).toContain('Pumpkin Pie');
    await fs.write(`${__dirname}/pumpkinpie.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('oh look a picture of what Mars needs!');
    });
    await page.driver.quit();
})