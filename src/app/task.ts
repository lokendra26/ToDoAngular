import { Users } from "./users";

export class Task {
    taskId:number|undefined;
    taskName:string|undefined;
    taskDate:string|undefined;
    taskTime:string|undefined;
    taskPriority:number|undefined;
    user:Users|undefined;
    taskCategory:string|undefined;
    taskStatus:string|undefined;
    taskRemainder:string|undefined;
    taskDescription:string|undefined;
    taskLabel:string|undefined;
}
