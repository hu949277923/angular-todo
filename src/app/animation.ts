import { animate, animation, query, style, transition, trigger, useAnimation } from '@angular/animations';

let slideAnimationEnter = animation([
  // 定义 void 状态的样式
  style({
    opacity: 0,
    transform: "translateY(40px)"
  }),
  // 进场之后的样式
  animate(250)
])

let slideAnimationLeave = animation([
  animate(600, style({
    opacity: 0,
    transform: "translateX(100%)"
  }))
])

export let slideAnimation = trigger("slide", [
  // 入场动画
  transition("void => *", useAnimation(slideAnimationEnter)),
  // 出场动画
  transition("* => void", useAnimation(slideAnimationLeave))
])

export let todoAnimation = trigger("todoAnimations", [
  transition(":enter", [
    query("h2", [
      style({transform: "translateY(-30px)", opacity: 0}),
      animate(300)
    ])
  ])
])