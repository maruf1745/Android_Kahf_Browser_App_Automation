//Capabilities
{
    "platformName": "Android",
    "appium:platformVersion": "11",
    "appium:deviceName": "SKDOP500BD421J001967",
    "appium:automationName": "UiAutomator2",
    "appium:appWaitForLaunch": false,
    "appium:noReset": true
  }

  //Run in real device
  npx nightwatch ./nightwatch/examples/mobile-app-tests/safe-search.js --env app.android.real

  //Run in emulator
  npx nightwatch ./nightwatch/examples/mobile-app-tests/safe-search.js --env app.android.emulator