//LOOPS CLASSES ARRAYS AND SELENIUM
//!first step is importing everything we need from selenium-webdriver
import { Builder, Capabilities, By, until, WebDriver, WebElement } from "selenium-webdriver";

const chromedriver = require("chromedriver"); 
const driver = new Builder().withCapabilities(Capabilities.chrome()).build(); 

class Employees {
  // Write a class that holds the name, phone, and title for the employee.
  name: string;
  phone: number;
  title: string;

  constructor(name:string, phone:number, title:string, ){
    this.name=name;
    this.phone=phone;
    this.title-title;
  }
}; 

let employees: Array<Employees> = [
  //Create an array of four employees using your class. 
new Employees("Blossom, 8018011234, Power Puff Girl"),
new Employees(" Buttercup, 8018011234, Power Puff Girl"),
new Employees("Bubbel,8018031234, Power Puff Girl "),
new Employees("Miss Sara Bellum, 8018041234, Secretary ");

]

const addEmployee: By = By.name("addemployee");
const newEmployee: By = By.xpath('//li[text() = "New Employee"]')/;
const nameInput: By = By.name("nameEntry");
const phoneInput: By = By.name("phoneEntry"); 
const titleInput: By = By.name('titleEntry'); 
const saveBtn: By = By.id("saveBtn");

let myFunc = async (employees) => {
   //Create a function to add an employee.
   await driver.findElement(addEmployee).click(); 
    await driver.findElement(newEmployee).click(); 
    await driver.findElement(nameInput).clear(); 
    await driver.findElement(nameInput).sendKeys(employees.name); 
    await driver.findElement(phoneInput).clear(); 
    await driver.findElement(phoneInput).sendKeys(employees.phone); 
    await driver.findElement(titleInput).clear(); 
    await driver.findElement(titleInput).sendKeys(employees.title); 
    await driver.findElement(saveBtn).click();
}; 

describe("should add employees to employee manager", () => {
    test("can add employees using myFunc", async () => {
        await driver.get("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"); 
        for(let i = 0; i < employees.length; i++) {
            await myFunc(employees[i]); 
        }; 
        await driver.sleep(3000); 
        await driver.quit(); 
    });
}); 