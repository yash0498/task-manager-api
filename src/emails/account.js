const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sgMail.send({
    to: 'yashs12363.ys@gmail.com',
    from: 'yash0498@gmail.com',
    subject: 'This is ,y first creation',
    text: 'I hope this ine actually get to you'
})

const sendWelcomeEmail = (email, name) => {
     sgMail.send({
         to: email,
         from: 'yash0498@gmail.com',
         subject: 'Thanks for joining in!',
         text: `welcome to the app, ${name}. Let me know how you get along with the app.`
        })
}

const cancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'yash0498@gmail.com',
        subject: 'Thanks for being with us!',
        text: `Thanks, ${name} for using our app is there any thing you want us to improve`
    })
}

module.exports = {
     sendWelcomeEmail,
     cancelationEmail
}
