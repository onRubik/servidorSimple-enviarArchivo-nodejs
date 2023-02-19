const app = require('express')();
var fs = require('fs');

// para poder utilizar un metodo asincrono se puede usar 'async', por ejemplo:
// app.get('/', async (req, res ) => {
app.get('/', (req, res ) => {
    
    // la siguiente funcion tambien se puede sustituir por readFileSync() para una funcion asincrona
    fs.readFile('archivo_test.txt', (err, file) => {
        if(err){
            console.log(err);
            return res.status(500).send('archivo no encontrado');
        }
        
        res.setHeader('Content-Type', 'application/txt');
        res.setHeader('Content-Disposition', 'attachment; filename="archivo_test.txt"');
        res.send(file);
        console.log('el servidor esta funcionando')
    });
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );