const CommonFunctions = require('./CommonFunctions');
describe('Safe Searching', function(){
    it('Proton VPN safe search testing', async function(app) {
        //Click on the Let's Go button
        app
        .click('id', 'org.halalz.kahfbrowser:id/btnContinue')
        CommonFunctions.FavoriteBookmarks(app);
        CommonFunctions.SiteBlocking(app);    
    })
});

