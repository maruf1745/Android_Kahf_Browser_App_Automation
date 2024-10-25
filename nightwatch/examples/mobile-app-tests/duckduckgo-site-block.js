describe('Duckduckgo Site Block', function(){
    before(function(app){
        app
        .click('xpath', '//android.widget.TextView[@content-desc="Kahf Browser"]')
        .click('id', 'org.halalz.kahfbrowser:id/btnContinue')
        .click('id', 'org.halalz.kahfbrowser:id/btnSkip')
        .click('id', 'org.halalz.kahfbrowser:id/btnSkip')
        .click('id', 'org.halalz.kahfbrowser:id/omnibarTextInput')
        .sendKeys('id', 'org.halalz.kahfbrowser:id/omnibarTextInput', 'https://duckduckgo.com/')
        .pause(5000)
        //.click('xpath', '//android.widget.TextView[@resource-id="org.halalz.kahfbrowser:id/phrase" and @text="https://duckduckgo.com/"]')
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
        .click('xpath', '//android.widget.ImageView[@resource-id="org.halalz.kahfbrowser:id/kahfSettingsButton"]')
        .pause(5000)
        .click('xpath', '(//android.widget.RelativeLayout[@resource-id="org.halalz.kahfbrowser:id/btnContainer"])[3]')
        .pause(5000)
        .back()
    });
    it('Duckduckgo Site block for Medium mode', async function(app) {
        app
        .click('xpath', '//android.widget.ImageView[@resource-id="org.halalz.kahfbrowser:id/kahfSettingsButton"]')
        .pause(5000)
        .click('xpath', '(//android.widget.RelativeLayout[@resource-id="org.halalz.kahfbrowser:id/btnContainer"])[2]')
        .pause(5000)
        .back()
    });
    it('Duckduckgo Site block for High mode', async function(app) {
        app
        .click('xpath', '//android.widget.ImageView[@resource-id="org.halalz.kahfbrowser:id/kahfSettingsButton"]')
        .pause(5000)
        .click('xpath', '(//android.widget.RelativeLayout[@resource-id="org.halalz.kahfbrowser:id/btnContainer"])[1]')
        .back()
        .pause()
    });
});