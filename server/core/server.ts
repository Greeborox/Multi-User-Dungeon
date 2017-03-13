import * as express from 'express'

export class Server {
    private app: express.Express;

    constructor() {
        this.app = express();
    }

    public setRoutes() {
        this.app.get('/', this.renderResponse)
    }

    public startServer() {
        this.app.listen(1337, function(){
            console.log('An adventurer joins the fight...')
        })
    }

    private renderResponse(req: express.Request, res: express.Response){
        res.send('Welcome Adventurer!')
    }
}