// 类型

// 类型注解
const title: string = 'type script';

// 基本类型 number string boolean null underfined symbol
let num: number | undefined | null = 12
let bool: boolean = false
let str: string = 'abc'
let sym: symbol = Symbol()
let sym1: symbol = Symbol()

console.log(sym === sym1) // false Symbol 是唯一

// null underfiend 是基本类型的子类型，可以通过tsconfig.json 设置是否严格执行检测
// bool = null
// str = undefined

// 其他类型 void any unknow never 类型别名
// 无返回类型
function run():void {
  console.log('void')
}

// any 任意类型，不做类型检查，any类型本质上是类型系统的一个逃逸舱，是一个顶级类型

/*

unknown 类型可以是任意变量，是另外一个顶级类型，但是比any严格，会执行类型检查，除非我们使用类型断言
TypeScript 不允许我们对类型为 unknown 的值执行任意操作。相反，我们必须首先执行某种类型检查以缩小我们正在使用的值的类型范围
unknown 类型只能被赋值给 any 类型和 unknown 类型本身。
直观的说，这是有道理的：只有能够保存任意类型值的容器才能保存 unknown 类型的值。毕竟我们不知道变量 value 中存储了什么类型的值。

*/

let unknowTitle: unknown;
unknowTitle = 'abc'
unknowTitle = 100
unknowTitle = true
unknowTitle = undefined

unknowTitle.tostring() // 报错
(unknowTitle as string).tostring() // 加了断言才不报错---》 指定类型

let anyTitle:any = null;
anyTitle.tostring() // 没有报错

let unknowTitle1: string = 'abc'
// unknowTitle1 = unknowTitle // error, 把unknown的变量赋值给其他类型只能是any 以及unknown本身

// never 从不、永远也没有返回值 如 异常
function exceptionDemo ():never {
  throw new Error('exception')
}

// 引用类型 数组 元组 枚举 接口 函数 
let arr: string[] = ['abc','abc']
let arr1: Array<string> = ['abc', 'abc'] // 另外一种声明方式--泛型数组

// 元组
let arr3: [number, string, boolean] = [12, 'abc', true] // 固定数量类型的数组

// 数值枚举
enum ERole {
  ADMIN,
  SUPADMIN,
  DEPTM,
  BOSS
}

let role: ERole = ERole.ADMIN // 值默认 0 开始递增
console.log('role，', role) // role,0

// 字符串枚举
enum ERole1 {
  ADMIN = 'admin',
  SUPADMIN = 'supadmin',
  DEPTM = 'deptm',
  BOSS = 'boss'
}

// 异构枚举：数值枚举跟字符串枚举一起
// 如果前面一个赋值了字符串，那么后面那个也要赋值（因为不赋值后面那个没有值啦，只要数值才能递增呢）
enum ERole2 {
  ADMIN = 0,
  SUPADMIN = 'abc',
  DEPTM ='abc',
  BOSS = 'abc'
}

// 常量枚举，在编译成js的时候不会有代码生成，而是用枚举的值替换使用了该枚举的地方
const enum ERole3 {
  ADMIN = 0,
  SUPADMIN = 'abc',
  DEPTM ='abc',
  BOSS = 'abc'
}

// 类型别名
interface IGetUser {
  name:string;
}

interface IGetUser1 {
  title:string;
}

interface IGetUser2 {
  age: number;
}

type userInfo = IGetUser & IGetUser1 & IGetUser2

let userLiset: userInfo = {
  name: 'joel',
  title: '类型别名',
  age: 27
}

console.log(userLiset)
