const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter) 
app.use(taskRouter)

app.listen(port, () => {
     console.log('Server is up on port ' + port)
}) 

// app.use((req, res, next) => {
//      if(req.method === 'GET') {
//           res.send('GET requests are disable')
//      } else {
//           next()
//      }
// })

// app.use((req, res, next) => {
//      res.status(503).send('site is currently down. Check back soon!')
// })

// const multer = require('multer')
// const upload = multer({
//      dest: 'images',
//      limits: {
//           fileSize: 1000000
//      },
//      fileFilter(req, file, cb) {
//        if(!file.originalname.match(/\.(doc|docx)$/)) {
//            return cb(new Error('Please upload Word document'))
//        }

//        cb(undefined, true)
//      }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//      res.send()
// }, (error, req, res, next) => {
//       res.status(400).send({error: error.message })
// }) 

//
//Without middleware: new request -> run route handler
//
//With middleware:    new request -> do something -> run route handler
//

// const pet = {
//      name: 'Hal'
// }

// pet.toJSON = function() {
//      return {}
// }

// console.log(JSON.stringify(pet))

// const main = async () => {
//      // const task = await Task.findById('5cde977ac4f0166dacd7e7da')
//      // await task.populate('owner').execPopulate()
//      // console.log(task.owner)

//      const user = await User.findById('5cde9771c4f0166dacd7e7d8')
//      await user.populate('tasks').execPopulate()
//      console.log(user.tasks)
// }

// main() 
