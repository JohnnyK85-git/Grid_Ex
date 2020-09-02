const express = require('express');
const index = express();

index.use(express.static("/home/oem/Documents/Grid_Ex/Grid_Ex"));

const port = 2025;
index.listen(port, function () {
    console.log(`server is listening to port :${port}`);
});