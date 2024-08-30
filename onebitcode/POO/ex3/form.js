import { Component } from "./Component";

export class Form extends Component{
    constructor(parents,options){
        super('form', parents,options)
    }

    addChildren(...children){
        children.forEach(child =>{
            this.getElemnt().appendChild(child.getElemnt())
        })
    }
}