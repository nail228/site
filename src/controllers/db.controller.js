const db = require("@/db/models/db");


class dbController{
    async getAuth (req, res) {

        const {login,password}=req.body
        const user= await db.query(`SELECT login,password from users where login=$1 and password=md5($2)`,[login,password])
        res.json(user.rows[0])

}
    async checkAdmin(req,res){
        const {login,password}=req.body
        const user= await db.query(`SELECT login,password from users where login=$1 and password=$2 isAdmin=true`,[login,password])
        res.json(user.rows[0])
    }
    async findAll (req, res) {
        const data=await db.query(`select * from documents`)
        res.json(data.rows[0])

}
    async findOne(req, res){
        const id=req.param.id
        const document=await db.query(`select * from documents where id=$1`,[id])
        res.json(document.rows[0])

}
    async update(req, res) {
        const {d_id, d_date, d_type, d_log, d_url } = req.body
        const data=await db.query(`update document set  doc_date=$1, type=$2, log=$3, url=$4 where doc_id=$5,`,[ d_date, d_type, d_log, d_url,d_id])
        res.json(data.rows[0])
}

async delete (req, res) {
        const id=req.param.id
        const document=await db.query(`select * from documents where id=$1`,[id])
        res.json(document.rows[0])
}
    async findOnePer(req, res){
        const id=req.param.id
        const document=await db.query(`select * from users where id=$1`,[id])
        res.json(document.rows[0])

    }

}
module.exports=new dbController()


