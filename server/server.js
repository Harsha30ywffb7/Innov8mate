const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const data = {users:["user1","user2","user3","user4","user5"]}
app.get('/api',(request, response)=>{
    console.log("server is running");
    console.log(request);
    response.status(234).send(data);
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});