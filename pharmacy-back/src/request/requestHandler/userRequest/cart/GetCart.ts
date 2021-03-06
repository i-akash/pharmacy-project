import RequestHandlers from '../../RequestHandler'

export default class GetCart extends RequestHandlers{
    
    handle(req: any, res: any): void {
        const {userID}=req.body
        const query='select d.DRUG_ID,d.DRUG_NAME,d.PRICE from Drugs as d inner join Cart as c using(DRUG_ID)  where c.USER_ID=?'
        this.pool.query(query,[userID]).then((DRUGS_LIST:any)=>res.json(DRUGS_LIST))
        
    }

}