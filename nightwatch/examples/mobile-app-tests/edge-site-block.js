describe('Bing Site Block', function(){
    before(function(app){
        app
        .click('xpath', '//android.widget.TextView[@content-desc="Kahf Browser"]')
        .click('id', 'org.halalz.kahfbrowser:id/btnContinue')
        .click('id', 'org.halalz.kahfbrowser:id/btnSkip')
        .click('id', 'org.halalz.kahfbrowser:id/btnSkip')
        .click('id', 'org.halalz.kahfbrowser:id/omnibarTextInput')
        .sendKeys('id', 'org.halalz.kahfbrowser:id/omnibarTextInput', 'https://www.bing.com/')
        .pause(5000)
        .appium.pressKeyCode(66) 
        .pause(5000)
        .sendKeys('xpath', '//android.widget.EditText[@resource-id="sb_form_q"]', 'https://protonvpn.com/')
        .pause(5000)
        .click('xpath', '//android.widget.EditText[@resource-id="sb_form_q"]')
        .appium.pressKeyCode(66)
        .pause(5000)
        .click('xpath', '//android.view.View[@content-desc="Proton VPN: Secure, fast VPN service in 110+ countries"]') //android.view.View[@content-desc="Proton VPN: Secure, fast VPN service in 110+ countries"]
        //.click('xpath', '//android.view.View[@resource-id="-598974546"]')
        .pause(5000)
    });
    it('Bing Site Block for Default(Low) mode', async function(app) {
        app
        .click('xpath', '//android.widget.ImageView[@resource-id="org.halalz.kahfbrowser:id/kahfSettingsButton"]')
        .pause(5000)
        .click('xpath', '(//android.widget.RelativeLayout[@resource-id="org.halalz.kahfbrowser:id/btnContainer"])[3]')
        .pause(5000)
        .back()
    });
    it('Bing Site Block for Medium mode', async function(app) {
        app
        .click('xpath', '//android.widget.ImageView[@resource-id="org.halalz.kahfbrowser:id/kahfSettingsButton"]')
        .pause(5000)
        .click('xpath', '(//android.widget.RelativeLayout[@resource-id="org.halalz.kahfbrowser:id/btnContainer"])[2]')
        .pause(5000)
        .back()
        //.pause()
    });
    it('Bing Site Block for High mode', async function(app) {
        app
        .click('xpath', '//android.widget.ImageView[@resource-id="org.halalz.kahfbrowser:id/kahfSettingsButton"]')
        .pause(5000)
        .click('xpath', '(//android.widget.RelativeLayout[@resource-id="org.halalz.kahfbrowser:id/btnContainer"])[1]')
        .pause(5000)
        .back()
        //.pause()
    });
  });