import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from 'path';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as Services from "./service";



const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/',Services.default);


app.use((err:any, req:express.Request, res:express.Response, next:express.NextFunction)=> {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err);
  });


app.listen(process.env.PORT || 8001, () => {
    console.log("opened on port 8001");
});

export default app;