module.exports = {
    ClickOnLetsGoButton: async function(app) {
        //io.kahf.browser
        app.click('id', 'io.kahf.browser:id/btnContinue')
    },
    Onboarding: async function(app) {
        app
        //Set as Default Browser
                
    },
    SkipOnboarding: async function(app) {
        app
        //Skip default Browser settings
        .click('xpath', '//android.widget.TextView[@resource-id="io.kahf.browser:id/btnSkip"]')
        .pause(5000)
        //Skip Bookmarks settings
        .click('xpath', '//android.widget.TextView[@resource-id="io.kahf.browser:id/btnSkip"]')
        .pause(10000)
        //Skip Image Blurring
        .click('id', 'io.kahf.browser:id/btnSkip')
        .pause(5000)
    },
    SetDefaultBrowser: async function(app) {
        app
        .click('xpath', '//android.widget.FrameLayout[@resource-id="io.kahf.browser:id/btnDefaultBrowser"]')
        .click('xpath', '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.android.permissioncontroller:id/recycler_view"]/android.widget.LinearLayout[1]/android.widget.LinearLayout')
        .click('xpath', '(//android.widget.RadioButton[@resource-id="android:id/checkbox"])[2]')
        .click('xpath', '//android.widget.ImageButton[@content-desc="Navigate up"]')
        .pause(5000)
        .click('xpath', '//android.widget.ImageButton[@content-desc="Navigate up"]')
    },
    SetFavoriteBookmarks: async function(app) {
        app
        //Add to Bookmark
        .click('xpath', '(//android.widget.FrameLayout[@resource-id="io.kahf.browser:id/rootView"])[1]/android.widget.FrameLayout/androidx.cardview.widget.CardView')
        .click('xpath', '(//android.widget.FrameLayout[@resource-id="io.kahf.browser:id/rootView"])[2]/android.widget.FrameLayout/androidx.cardview.widget.CardView')
        .click('xpath', '(//android.widget.FrameLayout[@resource-id="io.kahf.browser:id/rootView"])[3]/android.widget.FrameLayout/androidx.cardview.widget.CardView')
        .click('xpath', '(//android.widget.FrameLayout[@resource-id="io.kahf.browser:id/rootView"])[4]/android.widget.FrameLayout/androidx.cardview.widget.CardView')
        //Click Next Button
        .click('xpath', '//android.widget.FrameLayout[@resource-id="io.kahf.browser:id/btnSetBookmark"]')
    },

    SiteBlocking: async function(app) {
        app
        .click('id', 'io.kahf.browser:id/omnibarTextInput')
        //Browse by URL
        //.sendKeys('id', 'io.kahf.browser:id/omnibarTextInput', 'https://protonvpn.com/')
        //Browse by text
        .sendKeys('id', 'io.kahf.browser:id/omnibarTextInput', 'Proton VPN')
        .pause(5000)
        .appium.pressKeyCode(66)
        .pause(5000)
        .click('xpath', '//android.view.View[@resource-id="r1-0"]')
        .pause(5000)
    },
    DNSSettings: async function(app) {
        app
        //Default Selection is High
        //Medium
        .click('xpath', '//android.widget.ImageButton[@resource-id="io.kahf.browser:id/kahfSettingsButton"]')
        .pause(5000)
        .click('xpath', '(//android.widget.RelativeLayout[@resource-id="io.kahf.browser:id/btnContainer"])[2]')
        .pause(5000)
        //Low
        .click('xpath', '//android.widget.ImageButton[@resource-id="io.kahf.browser:id/kahfSettingsButton"]')
        .pause(5000)
        .click('xpath', '(//android.widget.RelativeLayout[@resource-id="io.kahf.browser:id/btnContainer"])[3]')
        .pause()

    },
    SelectDecentInternet: async function(app) {
        app
        .click('xpath', '//android.widget.ImageButton[@resource-id="io.kahf.browser:id/kahfSettingsButton"]')
        .pause(5000)
        .click('xpath', '//android.widget.Switch[@resource-id="io.kahf.browser:id/switch_safe_gaze"]')
        .pause()
    },
    SafeSearching: async function(app) {
        app
        .click('id', 'io.kahf.browser:id/omnibarTextInput')
        .sendKeys('id', 'io.kahf.browser:id/omnibarTextInput', 'Porn Hub')
        .pause(5000)
        .appium.pressKeyCode(66)
        .pause(10000)
    },

    BrowserSiteBlocking: async function(app) {
        const testBrowsers = ['https://www.google.com/', 'https://www.bing.com/'];
        for(let i = 0; i < testBrowsers.length; i++){
            app
            .click('id', 'io.kahf.browser:id/omnibarTextInput')
            .sendKeys('id', 'io.kahf.browser:id/omnibarTextInput', testBrowsers[i])
            .appium.pressKeyCode(66)
            if(testBrowsers[0] = 'https://www.google.com/'){
                app
                .sendKeys('xpath', '//android.view.View[@resource-id="tsf"]/android.view.View[1]/android.widget.EditText', 'https://protonvpn.com/')
                .pause(5000)
                .click('xpath', '//android.view.View[@resource-id="tsf"]/android.view.View[1]/android.widget.EditText')
                .appium.pressKeyCode(66)
                .click('xpath', '//android.view.View[@content-desc="Proton VPN https://protonvpn.com Proton VPN"]')
            }
            else if(testBrowsers[1] = 'https://www.bing.com/'){
                app
                .sendKeys('xpath', '//android.view.View[@resource-id="sb_form_c"]', 'https://nordvpn.com/')
                .pause(5000)
                .click('xpath', '//android.view.View[@resource-id="sb_form_c"]')
                .appium.pressKeyCode(66)
                .pause(5000)
                .click('xpath', '//android.view.View[@content-desc="Proton VPN: Secure, fast VPN service in 110+ countries"]')
                .pause(5000)
            }
           
            
        }
       
        app.pause()
    },

    ImageBlurring: async function(app) {
        app
        .click('id', 'io.kahf.browser:id/omnibarTextInput')
        .sendKeys('id', 'io.kahf.browser:id/omnibarTextInput', 'https://sites.google.com/kahf.co/safegaze')
        .appium.pressKeyCode(66)
        .pause(5000)

    }

};
      
