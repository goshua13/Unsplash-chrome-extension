import { ADD_TASK } from './type';

export function addTask() {
    return {
        type: ADD_TASK,
        payload: task
    }
}