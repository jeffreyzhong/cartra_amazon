export const json = {
    "checkErrorsMode": "onValueChanged",
    "title": "Feedback is a gift. Write us a review and we'll send a gift back.",
    "description": "Printing unlocks productivity, and we sincerely hope we've helped to unlock yours.",
    "pages": [
        {
        "name": "page1",
        "elements": [
            {
                "type": "text",
                "name": "first_last_name",
                "title": "Whose name is the order under?",
                "placeholder": "John Smith",
                "isRequired": true,
            },
            {
                "type": "text",
                "name": "order_email",
                "title": "Which email was the order under?",
                "placeholder": "jsmith@gmail.com",
                "isRequired": true,
                "validators": [
                    {
                        "type": "regex",
                        "text": "Your email address is invalid.",
                        "regex": ".+@.+\\..+",
                    }
                ]
            },
            // {
            //     "type": "text",
            //     "name": "amazon_order_id",
            //     "title": "What was your Amazon Order ID? You can find this by going to your order history on Amazon or on your order confirmation email and looking for the ID in 3-7-7 (xxx-xxxxxxx-xxxxxxx) format. It should be all numbers and no letters.",
            //     "placeholder": "123-1234567-7654321",
            //     "isRequired": true,
            //     "validators": [
            //         {
            //             "type": "regex", 
            //             "text": "Your Amazon Order ID should be all numbers and in the following format: xxx-xxxxxxx-xxxxxxx",
            //             "regex": "^\\d{3}-\\d{7}-\\d{7}$",
            //         }
            //     ]
            // },
            {
                "type": "radiogroup",
                "name": "satisfaction_rating",
                "title": "How satisfied are you with your purchase?",
                "isRequired": true,
                "choices": [
                    {
                        "value": 2,
                        "text": "Very Satisfied 😄",
                    },
                    {
                        "value": 1,
                        "text": "Satisfied 🙂",
                    },
                    {
                        "value": 0,
                        "text": "Neutral 😐",
                    },
                    {
                        "value": -1,
                        "text": "Dissatisfied 😕",
                    },
                    {
                        "value": -2,
                        "text": "Very Dissatisfied 😟",
                    },
                ]
            }
        ]
    },
    {
        "name": "page2",
        "elements": [
            {
                "type": "html",
                "name": "amazon_feedback_link",
                "html": 
                    "<div\">We love to see our customers happy! <br><br>\
                    At Cartra, we're always striving to improve and value your opinion more than anything.\
                    So much so that if you tell us how everything went, we'll send you a gift.<br><br>\
                    If this sounds like a deal, please find your order from us under your Amazon orders and click <b>\"Write a product review\"</b> \
                    or hit the button below. <br><br> \
                    <button style=\"background-color: #9e85ef; color: #323232; padding: 15px 25px; border: none; border-radius: 2px; cursor: pointer;\" \
                        onmouseover=\"this.style.backgroundColor='#bca9f7';\" \
                        onmouseout=\"this.style.backgroundColor='#9e85ef';\" \
                        onclick=\"window.open('https://www.amazon.com/gp/css/order-history', '_blank');\">Take me to my orders.\
                    </button> \
                    </div>",
                "visibleIf": "{satisfaction_rating} >= 1",
            },
            {
                "type": "radiogroup",
                "name": "submitted_feedback_radio",
                "title": "I gave a review.",
                "choices": [
                    {
                        "value": true,
                        "text": "Yes! 😄",
                    },
                    {
                        "value": false,
                        "text": "No 😟",
                    },
                ],
                "isRequired": true,
                "visibleIf": "{satisfaction_rating} >= 1",
            },
            {
                "type": "comment",
                "name": "bad_feedback",
                "isRequired": false,
                "title": "We're really sorry you didn't have the positive experience that we strive for. \
                Please leave us feedback on what happened and what we can do to make things right and we'll be in touch shortly. \
                Thank you so much.",
                "visibleIf": "{satisfaction_rating} < 1",
            },
        ]
    }
    ],
    "completeText":  "Next",
    "completedHtml": "<p>Thank you for taking the time to fill out our survey! It truly means a lot to us. <br><br> If you wrote us\
    feedback, good or bad, you'll receive an email from us within 24 hours with a $10 Amazon gift card. <br><br>\
    Feedback is the gift that keeps on giving.<br><br> Don't forget to <a href=\"https://www.cartratech.com\" target=\"_blank\">visit our website</a> to continue to unlock \
    your productivity.<br><br>Thank you for choosing Cartra :)</p>",
    "completedHtmlOnCondition": [],
    "showQuestionNumbers": "off"
};