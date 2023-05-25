const { Builder, By, Key } = require('selenium-webdriver');
require('chromedriver');
const url = 'https://szit.hu';

function szitTesz() {
    let driver = new Builder()
    .forBrowser('chrome').build();
    driver.get(url);
    driver.findElement(By.id('qsearch__in'))
    .sendKeys('recept', Key.ENTER);
}
szitTesz();
