import { isBlank, isPresent, isArray } from 'angular2/src/facade/lang';
import { BaseException } from 'angular2/src/facade/exceptions';
import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
    name: 'visibleTodos'
})
export class VisibleTodosPipe {
    transform(todos, args) {
        if (isBlank(args) || args.length == 0) {
            throw new BaseException('VisibleTodosPipe requires one argument');
        }
        if (isPresent(todos) && !isArray(todos)) {
            throw new BaseException('VisibleTodosPipe requires an Array as input');
        }
        return this.getVisibleTodos(args[0]);
    }

    private getVisibleTodos(todos, filter) {
        switch(filter){
            case 'SHOW_ACTIVE':
                return todos.filter(t => !t.completed);
            case 'SHOW_COMPLETED':
                return todos.filter(t => t.completed);
            case 'SHOW_ALL':
            default:
                return todos;
        }
    }
}