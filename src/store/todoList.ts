import { action,computed,observable } from 'mobx';
import Todo from './todo';
interface todo{
    name: string,
    status: string,
    finished: boolean,
    id: number
}
export default class TodoList{
    @observable
    availableStatus=['To-do','In Progress', 'Finished'];
    @observable 
    tasks: todo[]=[];
    @computed
    get undones(){
        if(this.tasks.length)
        //having prolems with type: object
        return this.tasks.filter((todo:any) => !todo['finished']).length;
    } 
    @action
    submitTask(name: string){
        this.tasks.push(new Todo(name));
    }
    @action
    deleteTask(index:number){
        this.tasks.splice(index,1);
    }
    @action
    editTask(e:any,index:number) {
        e.preventDefault();
        this.tasks[index].name=e.target.innerText;
        e.target.blur();
    }

    @action
    changeStatus(index:number) {
      const idx = this.availableStatus.indexOf(this.tasks[index].status);
      this.tasks[index].status = this.availableStatus[(idx+1)%3];
      if(this.tasks[index].status==='Finished') this.tasks[index].finished=true;
      else this.tasks[index].finished=false;
    }
}
export const store = new TodoList();