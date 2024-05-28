export const json = {
    "checkErrorsMode": "onValueChanged",
    "title": "Thank you for entrusting us with your printing needs. Fill out this short survey for $10 towards your future purchase.",
    "description": "We know you'll probably need to buy toner again in the future, and our mission is to bring cheap and reliable printing to the masses.",
    "pages": [
        {
        "name": "page1",
        "elements": [
            {
                "type": "text",
                "name": "first_last_name",
                "title": "Full Name",
                "placeholder": "John Smith",
                "isRequired": true,
            },
            {
                "type": "text",
                "name": "order_email",
                "title": "Email Address",
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
                "title": "How satisfied were you with your original purchase?",
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
    // {
    //     "name": "page2",
    //     "elements": [
    //         {
    //             "type": "html",
    //             "name": "amazon_feedback_link",
    //             "html": 
    //                 "<div\">We love to see our customers happy! <br><br>\
    //                 At Cartra, we're always striving to improve and value your opinion more than anything.\
    //                 So much so that if you tell us how everything went, we'll send you a gift.<br><br>\
    //                 If this sounds like a deal, please find your order from us under your Amazon orders and click <b>\"Write a product review\"</b> \
    //                 or hit the button below. <br><br> \
    //                 <button style=\"background-color: #9e85ef; color: #323232; padding: 15px 25px; border: none; border-radius: 2px; cursor: pointer;\" \
    //                     onmouseover=\"this.style.backgroundColor='#bca9f7';\" \
    //                     onmouseout=\"this.style.backgroundColor='#9e85ef';\" \
    //                     onclick=\"window.open('https://www.amazon.com/gp/css/order-history', '_blank');\">Take me to my orders.\
    //                 </button> \
    //                 </div>",
    //             "visibleIf": "{satisfaction_rating} >= 1",
    //         },
    //         {
    //             "type": "radiogroup",
    //             "name": "submitted_feedback_radio",
    //             "title": "I gave a review.",
    //             "choices": [
    //                 {
    //                     "value": true,
    //                     "text": "Yes! 😄",
    //                 },
    //                 {
    //                     "value": false,
    //                     "text": "No 😟",
    //                 },
    //             ],
    //             "isRequired": true,
    //             "visibleIf": "{satisfaction_rating} >= 1",
    //         },
    //         {
    //             "type": "comment",
    //             "name": "bad_feedback",
    //             "isRequired": false,
    //             "title": "We're really sorry you didn't have the positive experience that we strive for. \
    //             Please leave us feedback on what happened and what we can do to make things right and we'll be in touch shortly. \
    //             Thank you so much.",
    //             "visibleIf": "{satisfaction_rating} < 1",
    //         },
    //     ]
    // }
    ],
    "completeText":  "Next",
    "completedHtml": "<p>Thank you for the information! We'll email you shortly with a $10 Amazon gift card that you can use towards a future purchase. <br><br> \
    Don't forget to <a href=\"https://www.cartratech.com\" target=\"_blank\">visit our website</a> too! <br><br>Thank you for choosing Cartra :)</p>",
    "completedHtmlOnCondition": [],
    "showQuestionNumbers": "off"
};