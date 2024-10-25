describe('Duckduckgo Safe Search', function(){
    before(function(app){
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
    });
    it('Duckduckgo Safe Search for Default(Low) mode', async function(app) {
        app
        .click('xpath', '//android.widget.ImageView[@resource-id="org.halalz.kahfbrowser:id/kahfSettingsButton"]')
        .back()
        .pause(5000)
    });
    it('Duckduckgo Safe Search for Medium mode', async function(app) {
        app
        .click('xpath', '//android.widget.ImageView[@resource-id="org.halalz.kahfbrowser:id/kahfSettingsButton"]')
        .pause(5000)
        .click('xpath', '(//android.widget.RelativeLayout[@resource-id="org.halalz.kahfbrowser:id/btnContainer"])[2]')
        .back()
        .pause(5000)
    });
    it('Duckduckgo Safe Search for High mode', async function(app) {
        app
        .click('xpath', '//android.widget.ImageView[@resource-id="org.halalz.kahfbrowser:id/kahfSettingsButton"]')
        .pause(5000)
        .click('xpath', '(//android.widget.RelativeLayout[@resource-id="org.halalz.kahfbrowser:id/btnContainer"])[1]')
        .back()
        .pause()
    });
});