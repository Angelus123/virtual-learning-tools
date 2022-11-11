import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './documentation';
import cors from 'cors';
import path from "path";
import router from "./routes"
import globalErrorHandler from './controllers/errorController';
const app = express();
// filename

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.get("/uploads/:imageLink", (req,res) =>{
  let {imageLink} =req.params
  res.sendFile(path.join(__dirname,`../uploads/${imageLink}`))
})

app.get('/api/v1/', (req, res) => {
  res.status(200).json({
    message: 'welcome_message',
  });
});

app.use('/api/v1/', router);

// Gets natural language and returns code
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
      docExpansion: 'none',
      persistAuthorization: true,
    },
  })
);

//Error handling middleware
app.use(globalErrorHandler);

export default app

