import { Item } from "../Models/grcmodel.js";

export const addgrocery = (req, res) => {
    console.log("Adding item")
    const item1 = new Item(
        {
            groceryitem: req.body.groceryitem,
           
        })
    item1.save().then((result) => { res.send('{"result"  :  "Success"}') })
        .catch((err) => { console.log(err) })
}

export const getall = (req, res) => {
    console.log("done")
    Item.aggregate(
        [{ $sort: { Item: 1 } }]
    )
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const groceryupdatebyid = (req, res) => {
    Item.update(
        {where:{id:req.param.id},Ispurchased:req.body.Ispurchased}
    ).then((result) => { res.send('{"result"  :  "Success"}') })
    .catch((err) => { console.log(err) })
}


export const deletebyid=(req,res)=>{
    Item.deleteOne(req.param.id)
            .then(
            (result)=>{
                res.send('{"result"  :  "Success"}') 
            }
        )
        .catch(
            (err)=>{
                console.log(err)
            }
        )
    }

