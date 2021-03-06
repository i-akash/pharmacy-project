import React, { Component } from 'react'
import ChooseItems from './ChooseItems'
import Modal from '../unitComp/modal  basic/Modal'
import {Form,Button,Label, Segment,Input } from 'semantic-ui-react'
import Table from '../unitComp/table/Table'
import api from '../api/Api'
import SearchCom from '../unitComp/search/Search'
import Maps from '../page/jsx/Maps'


const getConvert=(value)=>parseFloat(value,10).toFixed(2)

export default class VoucharForm extends Component {
    
    constructor(props){
        super(props)

        this.state={
            total:0,
            discount:0,
            header:["name","quantity","price",'discount','total'],
            list:{},
            selectedlist:[],
            modal:false,
            address:"nurani 6,subidbazar",
            contactNumber:'0000000000',
            date:null,
            time:null,
            options:[]
        }
    }

    componentWillMount=()=>{
        const {list}=this.props
        let modlist=[]
        list.map(drug=>modlist[drug['drugID']]={name:drug['name'],quantity:0,price:drug['price'],total:0,drugID:drug['drugID'],discount:drug['discount']})
        this.setState({selectedlist:modlist})
    }

    onIncDec=(drugID,quantity)=>{
        let list=this.state.selectedlist.slice(0)
        console.log(drugID);
        
      
        if(quantity>=0){
            const {total,discount}=this.state

            let temp=list[drugID].quantity

            list[drugID].quantity=quantity
            list[drugID].total=getConvert(list[drugID].quantity*list[drugID].price);
            

            let total1=(total+(quantity-temp)*list[drugID].price);
            let discount1=(discount+(quantity-temp)*list[drugID].discount);
            
            console.log(this.state.total,this.state.total+(quantity-temp)*list[drugID].price,temp);
            this.setState({selectedlist:list,total:total1,discount:discount1});
   
        }
}


    onInc=(drugID)=>{
        this.onIncDec(drugID,1)
    }


    onDec=(drugID)=>{
        this.onIncDec(drugID,-1)
    }


    toggle=()=>this.setState({modal:!this.state.modal})
     
    merge=(list1,list2)=>{

        for(let i=0;i<list2.length;i++){
             if(!(!!list1[i]) && list2[i]){
                    list1[i]=list2[i];
                }               
        }
        return list1;
    }

    onChoose=(selectedlist)=>{
        let list=[]
        selectedlist.map(drug=>list[drug['drugID']]={name:drug['name'],quantity:0,price:drug['price'],total:0,drugID:drug['drugID'],discount:drug['discount']})
        list= this.merge(this.state.selectedlist,list)
        this.setState({selectedlist:list})
        
    }

    onChange=(event)=>this.setState({[event.target.name] :event.target.value});
    

    // Confirmation 

    onSubmit=(ev)=>{
        ev.preventDefault();
        const {total,selectedlist}=this.state;
        const {userID,address,contactNumber}=this.props
        
        let vouchar=[]
        vouchar=selectedlist.filter(drug=>drug.quantity)
        
        this.props.confirmOrder({userID,address,contactNumber,totalPrice:total,list:vouchar})
    }

    onCancel=(ev)=>{
        ev.preventDefault();
        this.props.toggle()
    }


// Search

        selectResult=(e,{result})=>this.onChoose([{discount:result['discount'],drugID:result['id'],name:result['title'],price:parseInt(result['price'].substr(1),10)}]);

        queryChange=(value)=>new Promise(resolve=>{
                    api.search({query:value}).then(res=>{this.setState({options:res['list']});resolve()})
                    },reject=>{})
        
        

// setting address from maps
        setAddress=(address)=>this.setState({address})
// clickKey1={'drugID'} clickKey2={'drugID'} clickText1={'-'} clickText2={'+'}

    render() {
        const {selectedlist,header,total,address,contactNumber,date,time,options,discount}=this.state;
    return (
            <Form>
                <Segment  style={{width:'100%'}}>
                        <Label size='mini' color='teal' tag>Drugs</Label><br/><br/>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Button  size='tiny' color='teal' onClick={this.toggle} label={'Choose from cart'}></Button>
                            <SearchCom queryChange={this.queryChange} selectResult={this.selectResult}  options={options}/>
                        </div>
                        <Modal modal={this.state.modal} onToggle={this.toggle} basic={false}>
                                <ChooseItems onSubmit={this.onChoose}  toggle={this.toggle} userID={this.props.userID}/>  
                        </Modal>

                        <Table list={selectedlist} listIndex={header} header={header}  input={this.onIncDec}  >
                            <Label  color='blue'>Total :{getConvert(total)}</Label>
                            <Label  color='blue'>Discount :{getConvert(discount)}</Label>
                            <Label  color='blue'>Payable :{getConvert(total- discount)}</Label>
                        </Table>
                
                </Segment >
                <Segment style={{width:'100%'}}>
                        <Label size='mini' color='teal' tag>Info</Label><br/><br/>
                        <Label>Duration : <Label.Detail>{'40min'}</Label.Detail></Label><br/>
                        <Label>Address  :</Label><Input type="text" name="address" value={address}  onChange={this.onChange} size='mini' label={<Maps setAddress={this.setAddress}/>} labelPosition="right"/><br/>
                        <Label>Number   :</Label><Input type="text" name="contactNumber" value={contactNumber} onChange={this.onChange} size='mini'/><br/>
                        <Label>Cash on Delivary</Label><br/>
                </Segment>
                <Button.Group>
                        <Button onClick={this.onSubmit}  color='teal'>Confirm</Button><Button.Or/>
                        <Button onClick={this.onCancel} color='red'>Cancel</Button>                     
                </Button.Group>
    
            </Form>
    )
  }
}
