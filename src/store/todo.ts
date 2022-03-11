import { observable } from 'mobx';
export default class Todo{
    id = Math.random();
    @observable name:string;
    @observable status= "To-do";
    @observable finished= false;
    constructor(name: string){
        this.name = name;
    }
}