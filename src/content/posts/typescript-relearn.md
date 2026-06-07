---
title: "我重新学了一遍 TypeScript，这次终于搞懂了"
description: "从一开始的「这是 JS 加了什么类型」到真正理解类型系统的设计思路，聊聊我的 TypeScript 学习路径。"
date: 2026-05-28
tags: ["前端", "TypeScript", "学习"]
---

第一次接触 TypeScript 的时候，我的反应是：「JavaScript 不是挺好的吗，加类型干嘛，多此一举。」

那时候我连 `interface` 和 `type` 的区别都说不清楚，写出来的东西全是 `any`，等于没用。

后来换了两次实习，被现实教育了几次，才慢慢意识到：**TypeScript 不是 JavaScript 的补丁，它是一种新的思维方式。**

## 重新学一遍的过程

我是按这个顺序重新学 TS 的，亲测对新人比较友好：

### 第一阶段：理解「为什么」

不要直接上手语法，先看几个真实的痛点：

```javascript
// JS 时代
function add(a, b) {
  return a + b;
}

add(1, '2'); // '12'，这不报错，但根本不是我们想要的
```

类型系统就是为了**在写代码的时候就阻止这种错误**。它不是给运行时加锁，是给**写代码的人**加锁。

### 第二阶段：基础类型

这部分不复杂，但要扎实：

```typescript
// 基础
let count: number = 0;
let name: string = 'guancii';
let isReady: boolean = false;
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ['age', 18];

// 对象
interface User {
  id: number;
  name: string;
  email?: string;  // 可选
  readonly createdAt: Date;  // 只读
}

// 函数
function greet(user: User): string {
  return `Hello, ${user.name}`;
}
```

### 第三阶段：联合类型和类型守卫

这是 TS 真正开始有意思的地方：

```typescript
type Result<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

function handle(result: Result<User>) {
  if (result.success) {
    // 这里 result.data 自动是 User 类型
    console.log(result.data.name);
  } else {
    // 这里 result.error 自动是 string 类型
    console.error(result.error);
  }
}
```

**类型守卫让编译器知道你处理了每一种情况。** 这就是 TS 的核心价值——把运行时的错误搬到编译时。

### 第四阶段：泛型

泛型一开始会觉得抽象，**用几次就懂了**：

```typescript
// 不用泛型，每个类型都要写一遍
function firstNumber(arr: number[]): number | undefined {
  return arr[0];
}
function firstString(arr: string[]): string | undefined {
  return arr[0];
}

// 用泛型，一份代码搞定
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

first([1, 2, 3]);      // T = number
first(['a', 'b']);     // T = string
```

> 泛型的本质是**「让调用者决定类型」**。

### 第五阶段：Utility Types

TS 内置了一堆工具类型，记几个常用的就够：

```typescript
Partial<User>      // 所有字段可选
Required<User>     // 所有字段必填
Pick<User, 'id' | 'name'>   // 取出部分字段
Omit<User, 'email'>         // 排除部分字段
Record<string, User>        // { [key: string]: User }
```

## 我学到的几个「反常识」

1. **`any` 是 TS 的失败模式**。用了 `any` 就等于回到 JS，而且失去了所有类型提示。新人很容易一遇到错误就 `as any`，千万别这样。
2. **类型不是越严越好**。我一开始追求「所有类型都明确」，结果写得很累。后来学会在边界处（API 入口）严格，内部可以适当宽松。
3. **好的 TS 代码是读起来像英文的**。比如 `User[]` 读作 "array of User"，`Record<string, User>` 读作 "map from string to User"。

## 推荐资源

- [TypeScript 官方文档](https://www.typescriptlang.org/docs/) - 第一手资料，比任何教程都全
- [Type Challenges](https://github.com/type-challenges/type-challenges) - 刷题，强烈推荐
- 任何中型开源项目的 `src/types` 目录 - 看真实项目怎么组织类型

## 写在最后

我学 TS 最大的感悟是：**类型不是负担，是工具。** 当你写代码时不再去想「这个类型对不对」，而是自然地写出正确的类型，TS 才算真正学会了。

这条路我走了大概半年，中间反复放弃又捡起来。如果你也在学的过程中，**别急，认认真真过一遍，比囫囵看十遍有用。**

有什么问题欢迎留言交流 👇
