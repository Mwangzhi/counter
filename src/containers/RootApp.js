import React,{ Component } from 'react'
import { connect } from 'react-redux'
import Counter from '../components/Counter.js'
const mapStateToProps=(state)=>{
    return{
        state:state
    }
};
const mapDispatchToProps=(dispatch)=>{
    return{
        onIncrement:(obj)=>{
            if(obj.type=='+'){
                dispatch({type:'INCREMENT',value1:obj.value1,value2:obj.value2})
            }else if(obj.type=='-'){
                dispatch({type:'DECREMENT',value1:obj.value1,value2:obj.value2})
            }else if(obj.type=='*'){
                dispatch({type:'ONMULTIPLY',value1:obj.value1,value2:obj.value2})
            }else{
                dispatch({type:'ONDIVIDE',value1:obj.value1,value2:obj.value2})
            }
        }
    }
};
const RootApp=connect(mapStateToProps,mapDispatchToProps)(Counter);
export default RootApp