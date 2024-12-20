const CommonFunctions = require("./CommonFunctions");

describe('Image Blurring', function(){
    it('Shield Your Eyes from Harmful Content', async function(app) {
        app
        CommonFunctions.ClickOnLetsGoButton(app);
        CommonFunctions.SkipOnboarding(app);
        CommonFunctions.ImageBlurring(app);
        CommonFunctions.SelectDecentInternet(app);

    })

});