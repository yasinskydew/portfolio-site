const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY
sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'yasinsky2015@gmail.com',
    from: 'yasinsky2015@gmail.com',
    subject: 'Portfolio site email',
    text:'jbfkfewj'
})