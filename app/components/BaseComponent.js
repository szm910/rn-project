import React,{Component} from 'react'
import {
    Dimensions
}
from 'react-native'

export default class BaseComponent extends Component{
    constructor(props) {  
        super(props);  
    }  
    goto(newcomponent,params){
        this.props.navigation.navigate(newcomponent,params);
    }
    goback(){
        this.props.navigator.pop();
    }
}