import {Builder, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver';
const chromedriver = require ('chromedriver');
const driver:  WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

class employeeMan {
    //first we need our driver and url
    driver: WebDriver;
    url: string = 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html';
    //locators next
    header: By = By.css('titleText');
    addEmployee:By = By.name('addEmployee');
    new:By = By.name('addEmployee11');
    nameInput:By = By.name('nameEntry');
    phoneInput:By = By.name('phoneEntry');
    titleInput:By = By.name('titleEntry');
    saveBtn:By = By.name('saveBtn');
    //constructor goes here
    constructor(driver: WebDriver) {
        this.driver = driver;
    };
    // methods go below
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.header));
    }; 
    // ^ Navigates to the page and waits till its fully loaded.
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element));
        return element;

};

// ^ finds an element and returns it for user purpose
async sendKeys (elementBy: By, keys: any): Promise<void> {
    let input = await this.getElement(elementBy);
    await input.clear();
    return input.sendKeys(keys);
};

//^ uses element to make sure the input is present, clears said input, and sends given keys

async click(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return (await this.driver.findElement(elementBy)).click();

//^ locates the element and clicks on the element
};
}
 // set a new instance of the class as a variable to use in our tests.
 const emPage = new employeeMan(driver);

 test('add an employee', async() => {
    await emPage.navigate();
    await emPage.click(emPage.addEmployee);
    await emPage.click(emPage.addEmployee);
    await emPage.sendKeys(emPage.nameInput, "Bob the Builder");
    await emPage.sendKeys(emPage.phoneInput,8008008001);
    await emPage.sendKeys(emPage.titleInput, "CEO");
    await emPage.click(emPage.saveBtn);
    await emPage.driver.quit()

 });


