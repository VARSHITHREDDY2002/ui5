"use strict";

describe("shoppingCart - Purchase '10 Portable DVD Player' in 'Shopping Cart' App", function () {

  const references = browser.config.params.import.data["references"]; // stores all references created during runtime
  const data = browser.config.params.import.data["02_shoppingCart"]; // stores all test data


  it("Step 01: navigate to the 'Shopping Cart' App", async function () {
    await common.navigation.navigateToUrl("https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/index.html");
  });

  it("Step 02: select category 'Accessories'", async function () {
    const selector = {
      "elementProperties": {
        "metadata": "sap.m.StandardListItem",
        "mProperties": {
          "type": "Active",
          "title": [{
            "path": "CategoryName"
          }],
          "counter": [{
            "path": "NumberOfProducts"
          }],
          "tooltip": [{
            "path": "i18n>openCategoryProducts"
          }, {
            "path": "CategoryName"
          }],
          "bindingContextPath": "/ProductCategories('AC')"
        }
      }
    };
    await ui5.userInteraction.click(selector);
  });

  it("Step 03: open details for '10 Portable DVD Player'", async function () {
    const selector = {
      "elementProperties": {
        "metadata": "sap.m.ObjectListItem",
        "mProperties": {
          "type": [{
            "path": "device>/system/phone"
          }],
          "icon": [{
            "path": "PictureUrl"
          }],
          "title": [{
            "path": "Name"
          }],
          "number": [{
            "path": "Price"
          }],
          "numberUnit": [{
            "path": "CurrencyCode"
          }],
          "tooltip": [{
            "path": "i18n>openProductDetails"
          }, {
            "path": "Name"
          }],
          "bindingContextPath": "/Products('HT-2001')"
        }
      }
    };
    await ui5.userInteraction.click(selector);
  });

  it("Step 04: add item to cart", async function () {
    const selector = {
      "elementProperties": {
        "metadata": "sap.m.Button",
        "mProperties": {
          "type": "Emphasized",
          "text": [{
            "path": "i18n>addToCartShort"
          }],
          "bindingContextPath": "/Products('HT-2001')"
        }
      }
    };
    await ui5.userInteraction.click(selector);
  });
});
