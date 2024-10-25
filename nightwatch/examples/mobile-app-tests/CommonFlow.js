module.exports = {
    Searching: async function(app) {
        app
        .click('id', 'org.halalz.kahfbrowser:id/btnContinue')
        .click('id', 'org.halalz.kahfbrowser:id/btnSkip')
        .click('id', 'org.halalz.kahfbrowser:id/btnSkip')
        .click('id', 'org.halalz.kahfbrowser:id/omnibarTextInput')
        .sendKeys('id', 'org.halalz.kahfbrowser:id/omnibarTextInput', 'https://www.google.com/')
        .pause(5000)
        .appium.pressKeyCode(66) 
        .pause(5000)
        .sendKeys('xpath', '//android.view.View[@resource-id="tsf"]/android.view.View[1]/android.widget.EditText', 'Porn Hub')
        .pause(5000)
        .click('xpath', '//android.view.View[@resource-id="tsf"]/android.view.View[1]/android.widget.EditText')
        .appium.pressKeyCode(66)
        //.click('xpath', '//android.view.View[@resource-id="-598974546"]')
        .pause(5000)
        .pause()
    }
};
      
