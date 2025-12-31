report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\playwright_backstop_Login_Page_0_document_0_desktop.png",
        "test": "..\\bitmaps_test\\20251231-053958\\playwright_backstop_Login_Page_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "playwright_backstop_Login_Page_0_document_0_desktop.png",
        "label": "Login Page",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://the-internet.herokuapp.com/login",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\playwright_backstop_Secure_Area_After_Login_0_content_0_desktop.png",
        "test": "..\\bitmaps_test\\20251231-053958\\playwright_backstop_Secure_Area_After_Login_0_content_0_desktop.png",
        "selector": "#content",
        "fileName": "playwright_backstop_Secure_Area_After_Login_0_content_0_desktop.png",
        "label": "Secure Area (After Login)",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://the-internet.herokuapp.com/secure",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "playwright_backstop"
});