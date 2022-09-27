 const express = require('express')
 const app = express();
 app.use(express.json());

 const items = [] ;

 app.get('/', (req, res) => {
  res.send("this is shipping box API")}) ;



app.listen(6005, () => {
    console.log('Server running in port 6005')
});

//Read items
app.get('/items', (req, res) => {
    try {
        res.send(items)
    } catch (error) {
       res.send(error);
    }
} );

//create items
app.post('/items', (req, res) => {
    try {
        const item = req.body;
        items.push(item);
        res.send(items)
    } catch (error) {
        res.send(error);
    }
})

//
app.put('/items/:id', (req, res) =>{
    try {
        const id = req.params.id;
        const index = items.findIndex((item) => item.id == id) ;
        items[index] = req.body;
        res.send(items);
    } catch (error) {
        res.send(error);
    }
});

//Getting details of particular item
app.get('/items/:id', (req, res ) => {
    try {
        const item = items.find((item) => item.id == req.params.id);
        res.send(item);
    } catch (error) {
        res.send(error);
    }
});

//Deleting Items
app.delete('/items/:id', (req, res) => {
    try {
        const index = items.findIndex((item) => item.id == req.params.id );
        items.splice(index, 1);
        res.send("Deleted ");
    } catch (error) {
       res.send(error) 
    }
})
