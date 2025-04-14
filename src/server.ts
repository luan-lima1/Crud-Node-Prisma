import express from 'express';
import router from './router';
import userRouter from './router/user-router';
import errorHandler from './middleware/error-handler';

const app = express();
app.use(express.json());
app.use(router);

router.use(userRouter);
app.use(errorHandler);
app.listen(3000, () => console.log('Servidor ativo!'));
