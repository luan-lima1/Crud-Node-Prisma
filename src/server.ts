import express from 'express';
import router from './router';
import userRouter from './router/user-router';

const app = express();
app.use(express.json());
app.use(router);

router.use(userRouter);

app.listen(3000, () => console.log('Servidor ativo!'));
