module.exports = {
    Onboarding: async function(app) {
        app
        //Set as Default Browser
        .click('xpath', '//android.widget.FrameLayout[@resource-id="org.halalz.kahfbrowser:id/btnDefaultBrowser"]')
        .click('xpath', '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.android.permissioncontroller:id/recycler_view"]/android.widget.LinearLayout[1]/android.widget.LinearLayout')
        .click('xpath', '(//android.widget.RadioButton[@resource-id="android:id/checkbox"])[2]')
        .click('xpath', '//android.widget.ImageButton[@content-desc="Navigate up"]')
        .pause(5000)
        .click('xpath', '//android.widget.ImageButton[@content-desc="Navigate up"]')        
    },
    FavoriteBookmarks: async function(app) {
        app
        //Add to Bookmark
        .click('xpath', '(//android.widget.FrameLayout[@resource-id="org.halalz.kahfbrowser:id/rootView"])[1]/android.widget.FrameLayout/androidx.cardview.widget.CardView')
        .click('xpath', '(//android.widget.FrameLayout[@resource-id="org.halalz.kahfbrowser:id/rootView"])[2]/android.widget.FrameLayout/androidx.cardview.widget.CardView')
        .click('xpath', '(//android.widget.FrameLayout[@resource-id="org.halalz.kahfbrowser:id/rootView"])[3]/android.widget.FrameLayout/androidx.cardview.widget.CardView')
        .click('xpath', '(//android.widget.FrameLayout[@resource-id="org.halalz.kahfbrowser:id/rootView"])[4]/android.widget.FrameLayout/androidx.cardview.widget.CardView')
        //Click Next Button
        .click('xpath', '//android.widget.FrameLayout[@resource-id="org.halalz.kahfbrowser:id/btnSetBookmark"]')
    },
    SiteBlocking: async function(app) {
        const testBrowsers = ['https://www.google.com/', 'https://www.bing.com/'];
        for(let i = 0; i < testBrowsers.length; i++){
            app
            .click('id', 'org.halalz.kahfbrowser:id/omnibarTextInput')
            .sendKeys('id', 'org.halalz.kahfbrowser:id/omnibarTextInput', testBrowsers[i])
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
    }

};
      
