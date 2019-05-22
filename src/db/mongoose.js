const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
     useNewUrlParser: true,
     useCreateIndex: true,
     useFindAndModify: false
})

// const me = new User({
//     name: ' Yash ',
//     email: 'YASHSHARMA29034@gmail.com',
//     password: 'Yashsharma2904'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!',error)
// })


