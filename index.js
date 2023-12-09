const express=require('express');
const app=express();
const port= process.env.PORT;
app.listen(3000,()=>console.log(`app is listening on ${port}`));
app.use(express.static('public'));
app.use(express.urlencoded({urlencoded:false}))
app.use(express.json({limit:'1mb'}));
const Datastore=require('nedb');
app.post('/api',(req,res)=>{
    console.log("i got req");
    if(req.body.delete == 1){
        console.log('returndelete');
        console.log(req.body);
        var recordIdToDelete=req.body.userID;
        UsersRegisteration.remove({ _id: recordIdToDelete }, {}, function (err, numRemoved) {
            if (err) {
                console.error('Error deleting record:', err);
            } else {
                console.log('Number of records deleted:', numRemoved);
            }
        });
        return;
    }else{
        console.log("not deleted");
    }
    UsersRegisteration.insert(req.body);
    console.log(req.body);
    res.json({
        status: 'successful',
    })
    
})
const UsersRegisteration=new Datastore('userRegistration.db');
UsersRegisteration.loadDatabase();

app.get('/api',(req,res)=>{
    UsersRegisteration.find({},(err,data)=>{
        if(err){
            res.end();
            return;
        }
        res.json(data);
    })
})
    
