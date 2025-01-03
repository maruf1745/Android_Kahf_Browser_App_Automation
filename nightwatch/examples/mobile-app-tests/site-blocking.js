const CommonFunctions = require('./CommonFunctions');
describe('Site blocking', function(){
    it('Proton VPN site block testing', async function(app) {
        //Click on the Let's Go button
        CommonFunctions.ClickOnLetsGoButton(app);
        CommonFunctions.SetFavoriteBookmarks(app);
        CommonFunctions.SiteBlocking(app); 
        CommonFunctions.DNSSettings(app);   
    })
});

