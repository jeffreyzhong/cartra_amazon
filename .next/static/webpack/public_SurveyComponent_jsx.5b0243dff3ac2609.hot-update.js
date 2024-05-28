"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("public_SurveyComponent_jsx",{

/***/ "./public/SurveyComponent.jsx":
/*!************************************!*\
  !*** ./public/SurveyComponent.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core */ \"./node_modules/survey-core/survey.core.js\");\n/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-react-ui */ \"./node_modules/survey-react-ui/survey-react-ui.js\");\n/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var survey_core_defaultV2_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! survey-core/defaultV2.min.css */ \"./node_modules/survey-core/defaultV2.min.css\");\n/* harmony import */ var survey_core_defaultV2_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(survey_core_defaultV2_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./json */ \"./public/json.js\");\n/* harmony import */ var survey_core_themes_layered_dark_panelless__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! survey-core/themes/layered-dark-panelless */ \"./node_modules/survey-core/themes/layered-dark-panelless.js\");\n/* harmony import */ var survey_core_themes_layered_dark_panelless__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(survey_core_themes_layered_dark_panelless__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction SurveyComponent() {\n    const survey = new survey_core__WEBPACK_IMPORTED_MODULE_2__.Model(_json__WEBPACK_IMPORTED_MODULE_5__.json);\n    survey.applyTheme(survey_core_themes_layered_dark_panelless__WEBPACK_IMPORTED_MODULE_6__.LayeredDarkPanelless);\n    survey.onComplete.add(async function(sender, options) {\n        try {\n            const keys = [\n                \"first_last_name\",\n                \"order_email\",\n                \"satisfaction_rating\"\n            ];\n            //\"amazon_order_id\", \n            //\"order_date\", \"sent_gift_card\", \"survey_submission_date\", \"satisfaction_rating\", \"submitted_feedback_radio\", \"bad_feedback\"]\n            var answers_dict = {};\n            const survey_keys = Object.keys(survey.data);\n            for (const key of keys){\n                if (survey_keys.includes(key)) {\n                    if (key === \"satisfaction_rating\") {\n                        const satisfaction_number = survey.data[key];\n                        var satisfaction_description = \"\";\n                        switch(satisfaction_number){\n                            case 2:\n                                satisfaction_description = \"Very Satisfied\";\n                                break;\n                            case 1:\n                                satisfaction_description = \"Satisfied\";\n                                break;\n                            case 0:\n                                satisfaction_description = \"Neutral\";\n                                break;\n                            case -1:\n                                satisfaction_description = \"Dissatisfied\";\n                                break;\n                            case -2:\n                                satisfaction_description = \"Very Dissatisfied\";\n                                break;\n                            default:\n                                satisfaction_description = \"None\";\n                        }\n                        answers_dict[key] = satisfaction_description;\n                    } else if (key === \"submitted_feedback_radio\") {\n                        const submitted_feedback_boolean = survey.data[key];\n                        if (submitted_feedback_boolean === true) {\n                            answers_dict[key] = \"Yes\";\n                        } else if (submitted_feedback_boolean === false) {\n                            answers_dict[key] = \"No\";\n                        } else {\n                            answers_dict[key] = \"None\";\n                        }\n                    } else if (key === \"amazon_order_id\") {\n                        const amz_link = \"https://sellercentral.amazon.com/orders-v3/order/\" + String(survey.data[key]);\n                        answers_dict[key] = amz_link;\n                    } else {\n                        answers_dict[key] = survey.data[key];\n                    }\n                } else if (key === \"survey_submission_date\") {\n                    var currentDate = new Date();\n                    var options = {\n                        year: \"numeric\",\n                        month: \"numeric\",\n                        day: \"numeric\"\n                    };\n                    const currentDateString = currentDate.toLocaleDateString(\"en-US\", options);\n                    answers_dict[key] = currentDateString;\n                } else if (key === \"order_date\") {\n                    answers_dict[key] = \"ADD ORDER DATE MANUALLY\";\n                } else if (key === \"sent_gift_card\") {\n                    answers_dict[key] = null;\n                } else {\n                    answers_dict[key] = \"None\";\n                }\n            }\n            const answers = Object.values(answers_dict);\n            const response = await fetch(\"/api/gsheets\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify([\n                    answers\n                ])\n            });\n            if (!response.ok) {\n                console.log(\"here\", response.status);\n                throw new Error(\"Error: \".concat(response.status));\n            }\n            const responseData = await response.json();\n        } catch (error) {\n            // Handle errors here\n            console.log(\"here 2\", error);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(survey_react_ui__WEBPACK_IMPORTED_MODULE_3__.Survey, {\n        model: survey,\n        isExpanded: true,\n        closeOnCompleteTimeout: -1\n    }, void 0, false, {\n        fileName: \"/Users/jeff/Library/Mobile Documents/com~apple~CloudDocs/cartra/cartra_amazon_site/public/SurveyComponent.jsx\",\n        lineNumber: 94,\n        columnNumber: 13\n    }, this);\n}\n_c = SurveyComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SurveyComponent);\nvar _c;\n$RefreshReg$(_c, \"SurveyComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvU3VydmV5Q29tcG9uZW50LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUMwQjtBQUNVO0FBQ0s7QUFDRjtBQUNUO0FBQ21EO0FBR2pGLFNBQVNLO0lBQ0wsTUFBTUMsU0FBUyxJQUFJTCw4Q0FBS0EsQ0FBQ0UsdUNBQUlBO0lBQzdCRyxPQUFPQyxVQUFVLENBQUNILDJGQUFvQkE7SUFDdENFLE9BQU9FLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLGVBQWVDLE1BQU0sRUFBRUMsT0FBTztRQUNoRCxJQUFJO1lBQ0EsTUFBTUMsT0FBTztnQkFBQztnQkFBbUI7Z0JBQWU7YUFBc0I7WUFDdEUscUJBQXFCO1lBQ3BCLDhIQUE4SDtZQUMvSCxJQUFJQyxlQUFlLENBQUM7WUFDcEIsTUFBTUMsY0FBY0MsT0FBT0gsSUFBSSxDQUFDTixPQUFPVSxJQUFJO1lBQzNDLEtBQUssTUFBTUMsT0FBT0wsS0FBTTtnQkFDcEIsSUFBSUUsWUFBWUksUUFBUSxDQUFDRCxNQUFNO29CQUMzQixJQUFJQSxRQUFRLHVCQUF1Qjt3QkFDL0IsTUFBTUUsc0JBQXNCYixPQUFPVSxJQUFJLENBQUNDLElBQUk7d0JBQzVDLElBQUlHLDJCQUEyQjt3QkFDL0IsT0FBUUQ7NEJBQ0osS0FBSztnQ0FDREMsMkJBQTJCO2dDQUMzQjs0QkFDSixLQUFLO2dDQUNEQSwyQkFBMkI7Z0NBQzNCOzRCQUNKLEtBQUs7Z0NBQ0RBLDJCQUEyQjtnQ0FDM0I7NEJBQ0osS0FBSyxDQUFDO2dDQUNGQSwyQkFBMkI7Z0NBQzNCOzRCQUNKLEtBQUssQ0FBQztnQ0FDRkEsMkJBQTJCO2dDQUMzQjs0QkFDSjtnQ0FDSUEsMkJBQTJCO3dCQUNuQzt3QkFDQVAsWUFBWSxDQUFDSSxJQUFJLEdBQUdHO29CQUN4QixPQUFPLElBQUlILFFBQVEsNEJBQTRCO3dCQUMzQyxNQUFNSSw2QkFBNkJmLE9BQU9VLElBQUksQ0FBQ0MsSUFBSTt3QkFDbkQsSUFBSUksK0JBQStCLE1BQU07NEJBQ3JDUixZQUFZLENBQUNJLElBQUksR0FBRzt3QkFDeEIsT0FBTyxJQUFJSSwrQkFBK0IsT0FBTzs0QkFDN0NSLFlBQVksQ0FBQ0ksSUFBSSxHQUFHO3dCQUN4QixPQUFPOzRCQUNISixZQUFZLENBQUNJLElBQUksR0FBRzt3QkFDeEI7b0JBQ0osT0FBTyxJQUFJQSxRQUFRLG1CQUFtQjt3QkFDbEMsTUFBTUssV0FBVyxzREFBc0RDLE9BQU9qQixPQUFPVSxJQUFJLENBQUNDLElBQUk7d0JBQzlGSixZQUFZLENBQUNJLElBQUksR0FBR0s7b0JBQ3hCLE9BQU87d0JBQ0hULFlBQVksQ0FBQ0ksSUFBSSxHQUFHWCxPQUFPVSxJQUFJLENBQUNDLElBQUk7b0JBQ3hDO2dCQUNKLE9BQU8sSUFBSUEsUUFBUSwwQkFBMEI7b0JBQ3pDLElBQUlPLGNBQWMsSUFBSUM7b0JBQ3RCLElBQUlkLFVBQVU7d0JBQUVlLE1BQU07d0JBQVdDLE9BQU87d0JBQVdDLEtBQUs7b0JBQVU7b0JBQ2xFLE1BQU1DLG9CQUFvQkwsWUFBWU0sa0JBQWtCLENBQUMsU0FBU25CO29CQUNsRUUsWUFBWSxDQUFDSSxJQUFJLEdBQUdZO2dCQUN4QixPQUFPLElBQUlaLFFBQVEsY0FBYztvQkFDN0JKLFlBQVksQ0FBQ0ksSUFBSSxHQUFHO2dCQUN4QixPQUFPLElBQUlBLFFBQVEsa0JBQWtCO29CQUNuQ0osWUFBWSxDQUFDSSxJQUFJLEdBQUc7Z0JBQ3RCLE9BQU87b0JBQ0hKLFlBQVksQ0FBQ0ksSUFBSSxHQUFHO2dCQUN4QjtZQUNKO1lBRUEsTUFBTWMsVUFBVWhCLE9BQU9pQixNQUFNLENBQUNuQjtZQUM5QixNQUFNb0IsV0FBVyxNQUFNQyxNQUFNLGdCQUFnQjtnQkFDN0NDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFDUjtpQkFBUTtZQUM5QjtZQUVBLElBQUksQ0FBQ0UsU0FBU08sRUFBRSxFQUFFO2dCQUNkQyxRQUFRQyxHQUFHLENBQUMsUUFBUVQsU0FBU1UsTUFBTTtnQkFDdkMsTUFBTSxJQUFJQyxNQUFNLFVBQTBCLE9BQWhCWCxTQUFTVSxNQUFNO1lBQ3pDO1lBRUEsTUFBTUUsZUFBZSxNQUFNWixTQUFTOUIsSUFBSTtRQUM1QyxFQUFFLE9BQU8yQyxPQUFPO1lBQ1oscUJBQXFCO1lBQ3JCTCxRQUFRQyxHQUFHLENBQUMsVUFBVUk7UUFDMUI7SUFDSjtJQUNBLHFCQUFRLDhEQUFDNUMsbURBQU1BO1FBQUM2QyxPQUFPekM7UUFBUTBDLFlBQVk7UUFBTUMsd0JBQXdCLENBQUM7Ozs7OztBQUM5RTtLQXJGUzVDO0FBdUZULCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9TdXJ2ZXlDb21wb25lbnQuanN4P2ZmOGEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgU3VydmV5IH0gZnJvbSBcInN1cnZleS1yZWFjdC11aVwiO1xuaW1wb3J0IFwic3VydmV5LWNvcmUvZGVmYXVsdFYyLm1pbi5jc3NcIjtcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwiLi9qc29uXCI7XG5pbXBvcnQgeyBMYXllcmVkRGFya1BhbmVsbGVzcyB9IGZyb20gXCJzdXJ2ZXktY29yZS90aGVtZXMvbGF5ZXJlZC1kYXJrLXBhbmVsbGVzc1wiO1xuXG5cbmZ1bmN0aW9uIFN1cnZleUNvbXBvbmVudCgpIHtcbiAgICBjb25zdCBzdXJ2ZXkgPSBuZXcgTW9kZWwoanNvbik7XG4gICAgc3VydmV5LmFwcGx5VGhlbWUoTGF5ZXJlZERhcmtQYW5lbGxlc3MpO1xuICAgIHN1cnZleS5vbkNvbXBsZXRlLmFkZChhc3luYyBmdW5jdGlvbihzZW5kZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBbXCJmaXJzdF9sYXN0X25hbWVcIiwgXCJvcmRlcl9lbWFpbFwiLCBcInNhdGlzZmFjdGlvbl9yYXRpbmdcIl1cbiAgICAgICAgICAgIC8vXCJhbWF6b25fb3JkZXJfaWRcIiwgXG4gICAgICAgICAgICAgLy9cIm9yZGVyX2RhdGVcIiwgXCJzZW50X2dpZnRfY2FyZFwiLCBcInN1cnZleV9zdWJtaXNzaW9uX2RhdGVcIiwgXCJzYXRpc2ZhY3Rpb25fcmF0aW5nXCIsIFwic3VibWl0dGVkX2ZlZWRiYWNrX3JhZGlvXCIsIFwiYmFkX2ZlZWRiYWNrXCJdXG4gICAgICAgICAgICB2YXIgYW5zd2Vyc19kaWN0ID0ge307XG4gICAgICAgICAgICBjb25zdCBzdXJ2ZXlfa2V5cyA9IE9iamVjdC5rZXlzKHN1cnZleS5kYXRhKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3VydmV5X2tleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcInNhdGlzZmFjdGlvbl9yYXRpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2F0aXNmYWN0aW9uX251bWJlciA9IHN1cnZleS5kYXRhW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2F0aXNmYWN0aW9uX2Rlc2NyaXB0aW9uID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc2F0aXNmYWN0aW9uX251bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F0aXNmYWN0aW9uX2Rlc2NyaXB0aW9uID0gXCJWZXJ5IFNhdGlzZmllZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdGlzZmFjdGlvbl9kZXNjcmlwdGlvbiA9IFwiU2F0aXNmaWVkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F0aXNmYWN0aW9uX2Rlc2NyaXB0aW9uID0gXCJOZXV0cmFsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgLTE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdGlzZmFjdGlvbl9kZXNjcmlwdGlvbiA9IFwiRGlzc2F0aXNmaWVkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgLTI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdGlzZmFjdGlvbl9kZXNjcmlwdGlvbiA9IFwiVmVyeSBEaXNzYXRpc2ZpZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F0aXNmYWN0aW9uX2Rlc2NyaXB0aW9uID0gXCJOb25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJzX2RpY3Rba2V5XSA9IHNhdGlzZmFjdGlvbl9kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwic3VibWl0dGVkX2ZlZWRiYWNrX3JhZGlvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1pdHRlZF9mZWVkYmFja19ib29sZWFuID0gc3VydmV5LmRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWJtaXR0ZWRfZmVlZGJhY2tfYm9vbGVhbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcnNfZGljdFtrZXldID0gXCJZZXNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3VibWl0dGVkX2ZlZWRiYWNrX2Jvb2xlYW4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2Vyc19kaWN0W2tleV0gPSBcIk5vXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcnNfZGljdFtrZXldID0gXCJOb25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcImFtYXpvbl9vcmRlcl9pZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbXpfbGluayA9IFwiaHR0cHM6Ly9zZWxsZXJjZW50cmFsLmFtYXpvbi5jb20vb3JkZXJzLXYzL29yZGVyL1wiICsgU3RyaW5nKHN1cnZleS5kYXRhW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2Vyc19kaWN0W2tleV0gPSBhbXpfbGluaztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcnNfZGljdFtrZXldID0gc3VydmV5LmRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcInN1cnZleV9zdWJtaXNzaW9uX2RhdGVcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ251bWVyaWMnLCBkYXk6ICdudW1lcmljJyB9O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZVN0cmluZyA9IGN1cnJlbnREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgYW5zd2Vyc19kaWN0W2tleV0gPSBjdXJyZW50RGF0ZVN0cmluZztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJvcmRlcl9kYXRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5zd2Vyc19kaWN0W2tleV0gPSBcIkFERCBPUkRFUiBEQVRFIE1BTlVBTExZXCJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJzZW50X2dpZnRfY2FyZFwiKSB7XG4gICAgICAgICAgICAgICAgICBhbnN3ZXJzX2RpY3Rba2V5XSA9IG51bGw7ICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbnN3ZXJzX2RpY3Rba2V5XSA9IFwiTm9uZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYW5zd2VycyA9IE9iamVjdC52YWx1ZXMoYW5zd2Vyc19kaWN0KTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZ3NoZWV0cycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoW2Fuc3dlcnNdKSxcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiLCByZXNwb25zZS5zdGF0dXMpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvcnMgaGVyZVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZXJlIDJcIiwgZXJyb3IpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiAoPFN1cnZleSBtb2RlbD17c3VydmV5fSBpc0V4cGFuZGVkPXt0cnVlfSBjbG9zZU9uQ29tcGxldGVUaW1lb3V0PXstMX0vPik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1cnZleUNvbXBvbmVudDsiXSwibmFtZXMiOlsiUmVhY3QiLCJNb2RlbCIsIlN1cnZleSIsImpzb24iLCJMYXllcmVkRGFya1BhbmVsbGVzcyIsIlN1cnZleUNvbXBvbmVudCIsInN1cnZleSIsImFwcGx5VGhlbWUiLCJvbkNvbXBsZXRlIiwiYWRkIiwic2VuZGVyIiwib3B0aW9ucyIsImtleXMiLCJhbnN3ZXJzX2RpY3QiLCJzdXJ2ZXlfa2V5cyIsIk9iamVjdCIsImRhdGEiLCJrZXkiLCJpbmNsdWRlcyIsInNhdGlzZmFjdGlvbl9udW1iZXIiLCJzYXRpc2ZhY3Rpb25fZGVzY3JpcHRpb24iLCJzdWJtaXR0ZWRfZmVlZGJhY2tfYm9vbGVhbiIsImFtel9saW5rIiwiU3RyaW5nIiwiY3VycmVudERhdGUiLCJEYXRlIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiY3VycmVudERhdGVTdHJpbmciLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJhbnN3ZXJzIiwidmFsdWVzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsIkVycm9yIiwicmVzcG9uc2VEYXRhIiwiZXJyb3IiLCJtb2RlbCIsImlzRXhwYW5kZWQiLCJjbG9zZU9uQ29tcGxldGVUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/SurveyComponent.jsx\n"));

/***/ })

});