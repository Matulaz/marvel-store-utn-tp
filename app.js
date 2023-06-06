import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import livereload from 'livereload'
import connectLiveReload from 'connect-livereload'


const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});



const app= express()

app.use(connectLiveReload());

const producto={
    nombre:"Iron Man",
    img:"imagen",
    precio:"37.95",
    descripcion: "The most amazing comic from all over the years",
    new: true,
    exclusive: true,
    bestseller: true,
}

app.set('view engine', 'ejs')
app.use(express.static('public')) 

app.get('/', (req,res)=>{
    res.render('pages/index', {producto:producto}) //si aca pedimos info externa como una API usamos el asyn/await/try/catch
})

app.listen(3032, ()=>{
    console.log("el servidor se esta ejecutando")
})

