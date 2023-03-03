const app = require('./app');
const http = require('http');
const server = http.createServer(app);
const models = require('./models');

models.sync().then( 
    () => {
        const PORT = process.env.PORT || 5000;
        server.listen(PORT, () => console.log(`Server is listening to http://localhost:${PORT}`))
    }
)