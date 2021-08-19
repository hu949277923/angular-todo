import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { fromEvent, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { slideAnimation, todoAnimation } from './animation';
import { AppState } from './store';
import { async_increment, decrement, increment } from './store/actions/counter.actions';
import { addTodo, deleteTodo } from './store/actions/todo.actions';
import { Todo } from './store/reducers/todo.reducer';
import { selectTodos } from './store/selector/todo.selectors';
import { selectCount } from './store/selectors/counter.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  animations: [slideAnimation, todoAnimation]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('AddTodoInput') AddTodoInput!: ElementRef
  // count: Observable<number>
  todos: Observable<Todo[]>
  constructor(private store: Store<AppState>) {
    // this.count = this.store.pipe(select(selectCount))
    this.todos = this.store.pipe(select(selectTodos))
  }

  ngAfterViewInit() {
    fromEvent<KeyboardEvent>(this.AddTodoInput.nativeElement, "keyup")
      .pipe(
        filter(event => event.key === "Enter"),
        map(event => (<HTMLInputElement>event.target).value),
        map(title => title.trim()),
        filter(title => title !== '')

      ).subscribe(title => {
        this.store.dispatch(addTodo({title}))
        this.AddTodoInput.nativeElement.value = ""
      })
  }

  addTodo () {
    let title = this.AddTodoInput.nativeElement.value.trim()
    if (!title) return 
    this.store.dispatch(addTodo({title}))
    this.AddTodoInput.nativeElement.value = ""
  }

  deleteTodo (id: string) {
    this.store.dispatch(deleteTodo({id}))
  }
  // increment () {
  //   this.store.dispatch(increment())
  // }
  // decrement () {
  //   this.store.dispatch(decrement())
  // }
  // async_increment () {
  //   this.store.dispatch(async_increment())
  // }
}
