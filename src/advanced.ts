// 高级类型
// 联合类型 类型中的一个，当无法确定是什么类型时，只能访问这些集合的交集

let jx: 1 | 2 | 3 = 3 // 1 | 2 | 3 后面是值时表示取值范围
let js1: string | number = 123 // 后面时类型时当作类型处理

// 交叉类型 集合的并集
interface IJx1 {
  name:string;
  title: string;
}
interface IJx2 {
  age:number;
}
interface IJx3 {
  address:string;
}

let js2:IJx1 & IJx2 & IJx3 = {
  name: 'joel',
  title: 'ts',
  age: 27,
  address: 'gz'
}

type js3 = IJx1 & IJx2 & IJx3

let js3:IJx1 & IJx2 & IJx3 = {
  name: 'joel_coco',
  title: 'ts',
  age: 27,
  address: 'gz'
}

// 索引类型（注意区分索引签名）
// 当我们使用不存在的索引时，会返回undefined，没有约束，因此我们需要有对索引的约束。
// keyof T: 被ts 推断为T类型的公共属性的联合类型 a | b
interface Obj1 {
  a: number;
  b: string;
}

class Obj2 {
  a: string;
  b: string;
  private c: boolean;
}

let key: keyof Obj1 // key 被推断为 a | b （T类型的公共属性的联合类型）
let key1: keyof Obj2 // a | b

let objtemp = {
  a: 1,
  b: 2,
  c: 3
}
// 从objetemp对象拿对应的属性的值组成一个集合
function getVlues(obj:any, keys: string[]) {
  return keys.map(key =>obj[key])
}

function getValues<T, K extends keyof T>(obj:T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}

console.log(getValues(objtemp, ['a', 'b']))
// 条件类型
type TypeName<T> = 
    T extends string ? 'string' :
    T extends number ? 'number' :
    T extends boolean ? 'boolean' :
    T extends undefined ? 'undefined' :
    T extends Function ? 'Function' :
    'object'

// 定义类型T1为条件类型,传入参数string,指定t1为string类型
type T1 = TypeName<string>
// 定义类型T2为条件类型,传入参数string[]
type T2 = TypeName<string[]>

type Diff<T,U> = T extends U ? never : T;
 
type T5 = Diff< 'a'|'b'|'c', 'a'|'e' >; // 作用是过滤掉第一个参数中的'a' 。T5为 'b' | 'c'联合类型
// 解析过程：
let dif1:Diff<'a', 'a'|'e'> // never
let dif2:Diff<'b', 'a'|'e'> // b
let dif3:Diff<'c', 'a'|'e'> // c

// 内置类型 详情：https://www.typescriptlang.org/docs/handbook/utility-types.html
// let dif4:Exclude<'a', 'a'|'e'>  // 从T中剔除可以赋值给U的类型，相当于上面例子中的Diff
// let dif5:Extract<'a', 'a'|'e'>  // 提取T中可以赋值给U的类型。
// let dif6:NonNullable<'a'>  // 从T中剔除null和undefined。
// let dif7:ReturnType<T>   // 获取函数返回值类型。
// let dif8:InstanceType<T>  // 获取构造函数类型的实例类型。