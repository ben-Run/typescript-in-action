// ts 一些内置工具类型

// 映射类型：Readonly、Partial，映射出一个新的类型
// 特点：有时候需要一个类型，是依赖于上一个类型，新类型对属性的要求不一样
class Obj {
  name:string;
  age:number
}
interface IObj {
  name:string;
  age:number
}
// 只读
type readonlyObj = Readonly<Obj>
type readonlyIObj = Readonly<IObj>

// Partial
interface Todo {
  title: string;
  description: string;
  age:number;
  address: string;
}
type partialTodo = Partial<Todo>

function updateTodo(todo: Todo, fieldsToUpdate: partialTodo) {
  return { ...todo, ...fieldsToUpdate };
}



// Record<K,T>
type petsGroup = 'dog' | 'cat' | 'fish';

// Record<K,T> 他会将一个类型的所有属性值都映射到另一个类型上（变成一个联合类型）并且返回一个新的类型(T)
// [p in K]:T  K中的每个属性([P in K])，都转为T类型
// 源码：
// type Record<K extends keyof any, T> = {
//   [P in K]: T;
// };
interface IPetInfo {
    name:string,
    age:number,
}

type IPets = Record<petsGroup, IPetInfo>;

const animalsInfo:IPets = {
    dog:{
        name:'dogName',
        age:2
    },
    cat:{
        name:'catName',
        age:3
    },
    fish:{
        name:'fishName',
        age:5
    }
}

// pick
interface Todo {
  title: string;
  description: string;
  age: number;
}

type TodoPreview = Pick<Todo, "title" | "age">;

const todo: TodoPreview = {
  title: "ts",
  age: 27,
};

// 原始类型
interface ITState {
	name: string;
	age: number;
	like: string[];
}
// 如果我只想要name和age怎么办，最粗暴的就是直接再定义一个（我之前就是这么搞得）
interface ITSingleState {
	name: string;
	age: number;
}
// 这样的弊端是什么？就是在Tstate发生改变的时候，ITSingleState并不会跟着一起改变，所以应该这么写
type tempType1 = Pick<ITState, 'name' | 'age'>;

interface ITSingleState extends tempType1 {};

// 这里的extends 不要理解为继承，要理解为泛型约束
// keyof: 索引类型查询操作符 =》 构成联合类型
// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P]
// }

