const {detailModel} = require('../db/schema');

module.exports.getDetails = async function getDetails(req,res){
    const name = req.params.name;
    try{
        const details = await detailModel.findOne({name: name});
        const all = await detailModel.find({});
        if(details){
            return res.json({
                name: details.name,
                description: details.description,
                interests: details.interests,
                linkedIn: details.linkedIn,
                github: details.github
            });
        }
        else{
            return res.status(400).json({
                msg: "details not found"
            });
        }
    }catch(e){
        return res.status(500).json({
            msg: "server error " + e
        })
    }
}