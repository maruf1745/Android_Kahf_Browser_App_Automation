
function MyFunction(app) {
    app
        .click('xpath', '//android.widget.TextView[@content-desc="Kahf Browser"]')
        .click('id', 'org.halalz.kahfbrowser:id/btnContinue')
        .click('id', 'org.halalz.kahfbrowser:id/btnSkip')
        .click('id', 'org.halalz.kahfbrowser:id/btnSkip')
        .click('id', 'org.halalz.kahfbrowser:id/omnibarTextInput')
        .sendKeys('id', 'org.halalz.kahfbrowser:id/omnibarTextInput', 'https://duckduckgo.com/')
        //.pause(5000)
        .appium.pressKeyCode(66) 
        .pause(10000)
        .sendKeys('xpath', '//android.widget.EditText[@resource-id="searchbox_input"]', 'Proton Vpn')
        .pause(5000)
        .click('xpath', '//android.view.View[@resource-id="-598974546"]')
        .pause(5000)
};
    
    export { MyFunction };
