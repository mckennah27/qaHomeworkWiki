import {By, Until, WebDriver, WebElement,} from 'selenium-webdriver';

export class GooglePage {
    driver: WebDriver;
    url: String = 'https://www.google.com/';
    searchBar:  By = By.id('APjFqb');
    results: By = By.id(rcnt);

    Constructor(driver:WebDriver) {

    };

    import {By, until, WebDriver, WebElement} from 'selenium-webdriver'; 

export class GooglePage {
    driver: WebDriver; 
    url: string = 'https://www.google.com/';
    searchBar: By = By.id('APjFqb'); 
    results: By = By.id('rcnt'); 

    constructor(driver:WebDriver) {
        this.driver = driver; 
    }; 
    async navigate() {
        await this.driver.get(this.url); 
        await this.driver.wait(until.elementLocated(this.searchBar)); 
    }; 
    // ^ navigates to the page and waits until it has fully loaded. 
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy)); 
        let element = await this.driver.findElement(elementBy); 
        await this.driver.wait(until.elementIsVisible(element)); 
        return element; 
    }; 
    // ^ finds an element and returns it for user purpose.
    async sendKeys(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy); 
        await input.clear(); 
        return input.sendKeys(keys); 
    }; 
    // ^ uses get element to make sure the input is present, clears said input, and sends given keys.
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy)); 
        return (await this.driver.findElement(elementBy)).click(); 
    }; 
    // ^ locates the element and clicks on the element.  
};
async getText(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).getText();
    

};
async getText(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).getText();

