import React, { Component } from 'react'
import {connect} from 'react-redux'

import {getBrandDrugs} from '../../action/DrugsAction' 
import Drugs from '../../unitComp/specificDrug/SpecificDrugs'
import api from '../../api/Api'

class Brands extends Component {
    
    state={
        offset:0,
        loading:false
    }

    componentWillMount=()=>{
        const {brand}=this.props.match.params;
        this.setState({loading:true})
        this.props.getBrandDrugs({brand}).then(res=> this.setState({loading:false})) 
    }
    
   
    onDrugClick=(drugID)=>{
        this.props.history.push(`/Drug/${drugID}`)
    }

    onAddCart=(drugID)=>api.addToCart({userID:this.props.user.USER_ID,drugID})


    render() {
        const {drugs}=this.props
        console.log();
        
        return (
            <div>
                {
                    drugs.DRUGS_LIST &&
                    <Drugs drugs={drugs.DRUGS_LIST} onDrugClick={this.onDrugClick} onAddCart={this.onAddCart}/>
                }
                </div>
        )
    }
}

const mapStatesToProps=state=>(
    {
        drugs:state.Drugs,
        user:state.User
    }
)

export default  connect(mapStatesToProps,{getBrandDrugs})(Brands);