describe('Duckduckgo Safe Search', function(){
    before(function(app){
        app
        .click('xpath', '//android.widget.TextView[@content-desc="Kahf Browser"]')
        .click('id', 'io.kahf.browser:id/btnContinue')
        .click('id', 'io.kahf.browser:id/btnSkip')
        .click('id', 'io.kahf.browser:id/btnSkip')
        .click('id', 'io.kahf.browser:id/omnibarTextInput')
        .sendKeys('id', 'io.kahf.browser:id/omnibarTextInput', 'https://duckduckgo.com/')
        //.pause(5000)
        .appium.pressKeyCode(66) 
        .pause(10000)
        .sendKeys('xpath', '//android.widget.EditText[@resource-id="searchbox_input"]', 'Proton Vpn')
        .pause(5000)
        .click('xpath', '//android.view.View[@resource-id="-598974546"]')
        .pause(5000)
    });
    it('Duckduckgo Safe Search for Default(Low) mode', async function(app) {
        app
        .click('xpath', '//android.widget.ImageView[@resource-id="io.kahf.browser:id/kahfSettingsButton"]')
        .back()
        .pause(5000)
    });
    it('Duckduckgo Safe Search for Medium mode', async function(app) {
        app
        .click('xpath', '//android.widget.ImageView[@resource-id="io.kahf.browser:id/kahfSettingsButton"]')
        .pause(5000)
        .click('xpath', '(//android.widget.RelativeLayout[@resource-id="io.kahf.browser:id/btnContainer"])[2]')
        .back()
        .pause(5000)
    });
    it('Duckduckgo Safe Search for High mode', async function(app) {
        app
        .click('xpath', '//android.widget.ImageView[@resource-id="io.kahf.browser:id/kahfSettingsButton"]')
        .pause(5000)
        .click('xpath', '(//android.widget.RelativeLayout[@resource-id="io.kahf.browser:id/btnContainer"])[1]')
        .back()
        .pause()
    });
});