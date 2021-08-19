import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { timer } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { async_increment, increment } from '../actions/counter.actions';



@Injectable()
export class CounterEffects {
  // 约定的规则 $ 表示是一个可观察的 observer 对象
  constructor(private actions$: Actions) { }
  // 用于处理副作用
  async_increment_effect = createEffect(() => {
    // 监听管道的变换
    return this.actions$.pipe(
      // 需要处理的 action 类型
      ofType(async_increment),
      // 处理需要执行的副作用 返回 action 给到 createEffect
      mergeMap(() => timer(2000).pipe(map(() => increment())))
    )
  })
}
