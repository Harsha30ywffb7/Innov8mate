import express, { request, response } from "express";
const app = express();
app.get('/api',(request, response)=>{
    console.log(request);
    return response.status(234).send("Hello harsha, This MERN");
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});