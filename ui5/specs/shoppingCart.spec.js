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

  it("Step 05: show shopping cart", async function () {
    const selector = {
      "elementProperties": {
        "metadata": "sap.m.ToggleButton",
        "mProperties": {
          "icon": "sap-icon://cart",
          "pressed": [{
            "path": "appView>/layout"
          }],
          "tooltip": [{
            "path": "i18n>toCartButtonTooltip"
          }],
          "bindingContextPath": "/Products('HT-2001')"
        }
      }
    };
    await ui5.userInteraction.click(selector);
  });

  it("Step 06: click 'Proceed'", async function () {
    const selector = {
      "elementProperties": {
        "metadata": "sap.m.Button",
        "mProperties": {
          "type": "Accept",
          "text": [{
            "path": "i18n>cartProceedButtonText"
          }],
          "visible": [{
            "path": "cfg>/notInDelete"
          }],
          "enabled": [{
            "path": "cartProducts>/cartEntries"
          }]
        }
      }
    };
    await ui5.userInteraction.click(selector);
  });

  it("Step 07: go to step 2", async function () {
    const selector = {
      "elementProperties": {
        "metadata": "sap.m.Button",
        "mProperties": {
          "text": "Step 2",
          "type": "Emphasized"
        }
      }
    };
    await ui5.userInteraction.click(selector);
  });

  it("Step 08: go to step 3", async function () {
    const selector = {
      "elementProperties": {
        "metadata": "sap.m.Button",
        "mProperties": {
          "text": "Step 3",
          "type": "Emphasized"
        }
      }
    };
    await ui5.userInteraction.click(selector);
  });

//   it("Step 09: enter 'Cartholders Name'", async function () {
//     const selector = {
//       "elementProperties": {
//         "metadata": "sap.m.Input",
//         "mProperties": {
//           "value": [{
//             "path": "/CreditCard/Name"
//           }],
//           "placeholder": [{
//             "path": "i18n>creditCardHolderText"
//           }]
//         }
//       }
//     };
//     await ui5.userInteraction.fill(selector, data.creditCardDetails.cartholdersName);
//   });
//
//   it("Step 10: enter 'Card Number'", async function () {
//     const selector = {
//       "elementProperties": {
//         "metadata": "sap.m.MaskInput",
//         "mProperties": {
//           "mask": "CCCC-CCCC-CCCC-CCCC",
//           "value": [{
//             "path": "/CreditCard/CardNumber"
//           }],
//           "placeholder": [{
//             "path": "i18n>creditCardNumberText"
//           }]
//         }
//       }
//     };
//     await ui5.userInteraction.clearAndFill(selector, data.creditCardDetails.cartNumber);
//   });
//
//   it("Step 11: enter 'Security Code'", async function () {
//     const selector = {
//       "elementProperties": {
//         "metadata": "sap.m.MaskInput",
//         "mProperties": {
//           "mask": "CCC",
//           "value": [{
//             "path": "/CreditCard/SecurityCode"
//           }],
//           "placeholder": [{
//             "path": "i18n>creditCardSecurityNumberText"
//           }]
//         }
//       }
//     };
//     util.console.log(data.creditCardDetails.securityCode);
//     await ui5.userInteraction.clearAndFill(selector, data.creditCardDetails.securityCode);
//   });
//
//   it("Step 12: enter 'Expiration Date'", async function () {
//     const selector = {
//       "elementProperties": {
//         "metadata": "sap.m.DatePicker",
//         "mProperties": {
//           "value": [{
//             "path": "/CreditCard/Expire"
//           }]
//         }
//       }
//     };
//     const date = new Date();
//     await ui5.date.pick(selector, date);
//   });
//
//   it("Step 13: got to step 4", async function () {
//     const selector = {
//       "elementProperties": {
//         "metadata": "sap.m.Button",
//         "mProperties": {
//           "text": "Step 4",
//           "type": "Emphasized"
//         }
//       }
//     };
//     await ui5.userInteraction.click(selector);
//   });
//
//   it("Step 14: enter 'Address'", async function () {
//     const selector = {
//       "elementProperties": {
//         "metadata": "sap.m.Input",
//         "mProperties": {
//           "value": [{
//             "path": "/InvoiceAddress/Address"
//           }],
//           "placeholder": [{
//             "path": "i18n>addressText"
//           }]
//         }
//       }
//     };
//     await ui5.userInteraction.clearAndFill(selector, data.invoiceAdress.adress);
//   });
//
//   it("Step 15: enter 'City'", async function () {
//     const selector = {
//       "elementProperties": {
//         "metadata": "sap.m.Input",
//         "mProperties": {
//           "value": [{
//             "path": "/InvoiceAddress/City"
//           }],
//           "placeholder": [{
//             "path": "i18n>cityText"
//           }]
//         }
//       }
//     };
//     await ui5.userInteraction.clearAndFill(selector, data.invoiceAdress.city);
//   });
//
//   it("Step 16: enter 'Zip Code'", async function () {
//     const selector = {
//       "elementProperties": {
//         "metadata": "sap.m.Input",
//         "mProperties": {
//           "value": [{
//             "path": "/InvoiceAddress/ZipCode"
//           }],
//           "placeholder": [{
//             "path": "i18n>zipCodeText"
//           }]
//         }
//       }
//     };
//     await ui5.userInteraction.clearAndFill(selector, data.invoiceAdress.zipCode);
//   });
//
//   it("Step 17: enter 'Country'", async function () {
//     const selector = {
//       "elementProperties": {
//         "metadata": "sap.m.Input",
//         "mProperties": {
//           "value": [{
//             "path": "/InvoiceAddress/Country"
//           }],
//           "placeholder": [{
//             "path": "i18n>countryText"
//           }]
//         }
//       }
//     };
//     await ui5.userInteraction.clearAndFill(selector, data.invoiceAdress.country);
//     await common.userInteraction.pressEnter();
//   });
//
//   it("Step 18: go to step 5", async function () {
//     const selector = {
//       "elementProperties": {
//         "metadata": "sap.m.Button",
//         "mProperties": {
//           "text": "Step 5",
//           "type": "Emphasized"
//         }
//       }
//     };
//     await ui5.userInteraction.click(selector);
//   });
//
//   it("Step 19: click 'Order Summary'", async function () {
//     const selector = {
//       "elementProperties": {
//         "metadata": "sap.m.Button",
//         "mProperties": {
//           "text": "Order Summary",
//           "type": "Emphasized"
//         }
//       }
//     };
//     await ui5.userInteraction.click(selector);
//   });
//
//   it("Step 20: click 'Submit'", async function () {
//     const selector = {
//       "elementProperties": {
//         "metadata": "sap.m.Button",
//         "mProperties": {
//           "type": "Accept",
//           "text": [{
//             "path": "i18n>checkoutSummarySubmit"
//           }]
//         }
//       }
//     };
//     await ui5.userInteraction.click(selector);
//   });
//
//   it("Step 21: confirm submit", async function () {
//     await ui5.confirmationDialog.clickYes();
//   });
//
//   it("Step 22: check success", async function () {
//     const selector = {
//       "elementProperties": {
//         "metadata": "sap.m.Title",
//         "mProperties": {
//           "level": "Auto",
//           "text": "Order Completed"
//         }
//       }
//     };
//     await ui5.assertion.expectToBeVisible(selector);
//   });
//
//   it("Step 23: export order number", async function () {
//     const elem = await nonUi5.element.getByCssContainingText("p", "Your order number:");
//     const text = await nonUi5.element.getAttributeValue(elem);
//     const orderNumber = await util.formatter.sliceStringAfter(text, ": ", 8);
//     references.orderNumber = orderNumber;
//     util.console.log("Order Number --> ", orderNumber);
//   });
//
 });
