const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = SENDGRID_API_KEY
sgMail.setApiKey(sendgridAPIKey)

const sendFeedbackEmail = (email, feedback) => {

    sgMail.send({
        to: 'yasinsky2015@gmail.com',
        from: email,
        subject: 'feedback from portfolio',
        text: feedback
    })
}

module.exports = {
    sendFeedbackEmail
}