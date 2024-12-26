describe('Google Site Block', function(){
    before(function(app){
        app
        .click('xpath', '//android.widget.TextView[@content-desc="Kahf Browser"]')
        .click('id', 'io.kahf.browser:id/btnContinue')
        .click('id', 'io.kahf.browser:id/btnSkip')
        .click('id', 'io.kahf.browser:id/btnSkip')
        .click('id', 'io.kahf.browser:id/omnibarTextInput')
        .sendKeys('id', 'io.kahf.browser:id/omnibarTextInput', 'https://www.google.com/')
        .pause(5000)
        .appium.pressKeyCode(66) 
        .pause(5000)
        .sendKeys('xpath', '//android.view.View[@resource-id="tsf"]/android.view.View[1]/android.widget.EditText', 'https://protonvpn.com/')
        .pause(5000)
        .click('xpath', '//android.view.View[@resource-id="tsf"]/android.view.View[1]/android.widget.EditText')
        .appium.pressKeyCode(66)
        .click('xpath', '//android.view.View[@content-desc="Proton VPN https://protonvpn.com Proton VPN"]')
        //.click('xpath', '//android.view.View[@resource-id="-598974546"]')
        .pause(5000)
    });
    it('Google Site block for Default(Low) mode', async function(app) {
        app
        .click('xpath', '//android.widget.ImageView[@resource-id="io.kahf.browser:id/kahfSettingsButton"]')
        .pause(5000)
        .click('xpath', '(//android.widget.RelativeLayout[@resource-id="io.kahf.browser:id/btnContainer"])[3]')
        .pause(5000)
        .back()
    });
    it('Google Site block for Medium mode', async function(app) {
        app
        .click('xpath', '//android.widget.ImageView[@resource-id="io.kahf.browser:id/kahfSettingsButton"]')
        .pause(5000)
        .click('xpath', '(//android.widget.RelativeLayout[@resource-id="io.kahf.browser:id/btnContainer"])[2]')
        .pause(5000)
        .back()
        //.pause()
    });
    it('Google Site block for High mode', async function(app) {
        app
        .click('xpath', '//android.widget.ImageView[@resource-id="io.kahf.browser:id/kahfSettingsButton"]')
        .pause(5000)
        .click('xpath', '(//android.widget.RelativeLayout[@resource-id="io.kahf.browser:id/btnContainer"])[1]')
        .pause(5000)
        .back()
        .pause()
    });
  });