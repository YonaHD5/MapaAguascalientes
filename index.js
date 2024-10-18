const express =  require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
    resizeBy.sendfile(path.join(__dirnamedirname,'public/index.html'));
});

const PORT = process.env.PORT  || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecutandose en http://localhost:${PORT}`);
});


