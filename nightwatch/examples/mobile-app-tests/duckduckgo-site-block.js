describe('Duckduckgo Site Block', function(){
    before(function(app){
        app
        .click('xpath', '//android.widget.TextView[@content-desc="Kahf Browser"]')
        .click('id', 'io.kahf.browser:id/btnContinue')
        .click('id', 'io.kahf.browser:id/btnSkip')
        .click('id', 'io.kahf.browser:id/btnSkip')
        .click('id', 'io.kahf.browser:id/omnibarTextInput')
        .sendKeys('id', 'io.kahf.browser:id/omnibarTextInput', 'https://duckduckgo.com/')
        .pause(5000)
        //.click('xpath', '//android.widget.TextView[@resource-id="io.kahf.browser:id/phrase" and @text="https://duckduckgo.com/"]')
        .appium.pressKeyCode(66) 
        .sendKeys('xpath', '//android.widget.EditText[@resource-id="searchbox_input"]', 'https://protonvpn.com/')
        .pause(5000)
        .click('xpath', '//android.view.View[@resource-id="64043421"]')
        .pause(5000)
        .click('xpath', '//android.view.View[@resource-id="r1-0"]')
        //.appium.pressKeyCode(66)
    });
    it('Duckduckgo Site block for Default(Low) mode', async function(app) {
        app
        .click('xpath', '//android.widget.ImageView[@resource-id="io.kahf.browser:id/kahfSettingsButton"]')
        .pause(5000)
        .click('xpath', '(//android.widget.RelativeLayout[@resource-id="io.kahf.browser:id/btnContainer"])[3]')
        .pause(5000)
        .back()
    });
    it('Duckduckgo Site block for Medium mode', async function(app) {
        app
        .click('xpath', '//android.widget.ImageView[@resource-id="io.kahf.browser:id/kahfSettingsButton"]')
        .pause(5000)
        .click('xpath', '(//android.widget.RelativeLayout[@resource-id="io.kahf.browser:id/btnContainer"])[2]')
        .pause(5000)
        .back()
    });
    it('Duckduckgo Site block for High mode', async function(app) {
        app
        .click('xpath', '//android.widget.ImageView[@resource-id="io.kahf.browser:id/kahfSettingsButton"]')
        .pause(5000)
        .click('xpath', '(//android.widget.RelativeLayout[@resource-id="io.kahf.browser:id/btnContainer"])[1]')
        .back()
        .pause()
    });
});