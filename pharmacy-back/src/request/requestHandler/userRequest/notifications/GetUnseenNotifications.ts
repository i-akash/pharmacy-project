import RequestHandlers from '../../RequestHandler'

export default class GetUnseenNotifications extends RequestHandlers{
    
    handle(req: any, res: any): void {
        const {userID}=req.body;
        

        let query=`select * from Notifications where  STATUS=? and USER_ID=? order by DATE_TIME desc`
        this.pool.query(query,[false,userID]).then((response:any)=>res.json({notification:response}))
    }
}