const CommonFunctions = require("./CommonFunctions");

describe('Safe Searching', function(){
    it('Safe Search: filter out explicit content from search results.', async function(app) {
        CommonFunctions.ClickOnLetsGoButton(app);
        //CommonFunctions.FavoriteBookmarks(app);
        CommonFunctions.SkipOnboarding(app);
        CommonFunctions.SafeSearch(app);

    })
});