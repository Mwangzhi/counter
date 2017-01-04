
const counter=(count=0,action={})=>{
    switch(action.type){
        case "INCREMENT":
            return Number(action.value1)+Number(action.value2);
        case "DECREMENT":
            return action.value1-action.value2;
        case "ONMULTIPLY":
            return action.value1*action.value2;
        case "ONDIVIDE":
            return action.value1/action.value2;
        default :
            return count
    }
};
export default counter