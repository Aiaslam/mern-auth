let test= async(req,res)=>{
    try{
        res.json({
            message:'api is working'
        })

    }catch(err){
        console.log(err);
    }
}
export default test