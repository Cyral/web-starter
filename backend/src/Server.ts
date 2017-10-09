import * as Koa from 'koa';
import * as Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', function (ctx, next) {
   ctx.body = {
      success: true,
       message: 'Hello'
   }
});


app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
console.log('Running webserver.');