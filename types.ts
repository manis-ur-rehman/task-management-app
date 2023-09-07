export enum TaskPriority {
    LOW= 'low',
    MEDIUM= "medium",
    HIGH= "high"
}
export interface TaskListItem{
    taskName: string;
    taskPriority: TaskPriority;
    taskStatus: boolean;
    taskDate: Date;
  }