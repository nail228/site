const Router=require('express')
const router=new Router()
const dbController=require('@/controllers/db.controller')

router.post('/user',dbController.getAuth)
router.post('/user',dbController.checkAdmin)
router.post('/document',dbController.create)
router.get('/document/:id',dbController.findOne)
router.get('/document',dbController.findAll)
router.put('/document',dbController.update)
router.delete('/document/:id',dbController.delete)

module.exports=router