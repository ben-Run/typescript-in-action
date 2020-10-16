// 函数
function add(num1:number,num2:number) {
  return num1 + num2
}

// 函数表达式
// 类型还可以这样定义
let add1:(num1:number, num2:number) => number = add

console.log(add(1,2))

function run1 (name:string,age:number,address:string) {
  return `hello, ${name}, i am ${age}`
}
// 接口约束函数定义
interface IPerson {
  (name:string,age:number,address ?:string):string;
}

let run2:IPerson = run1
console.log(run2('joel',27,'gz'))

// rest 参数
function add2(num:number, ...rest:number[]):number {
  return num + rest.reduce((pre,curr) => pre + curr);
}

console.log(add2(1,2,3,4,5)) // 15


// 重载：函数名称相同，参数类型、个数、返回值不一样
// 重载匹配方式是从上开始匹配，所以最精准的写在前面
// 如果是数值 相加，如果是字符串拼接
function add3(...rest:number[]):number;
function add3(...rest:string[]):string;
function add3(...rest:any[]):any {
  const firstValue = rest[0]
  if (typeof firstValue === 'number') {
    return rest.reduce((pre, curr) => pre + curr)
  }
  if (typeof firstValue === 'string') {
    return rest.join('-')
  }

  return rest
}
console.log('重载，', add3(1,2,3,4,5,6))
console.log('重载，', add3('h','e','l','l','o','joel'))
console.log('重载，', add3(null,null,null,32))

// 解构
// 数组解构
let arr4 = [1,2,3,4]
let [a, b] = arr4
console.log('解构，', a)
console.log('解构，', b)


// 对象解构
let userInfo = {
  myName: 'joel',
  age: 27,
  address: 'gz'
}
let { myName, age, address } = userInfo
console.log('对象解构', myName)
console.log('对象解构', age)
console.log('对象解构', address)

// 在函数中使用时，语法跟es6 有点不一样， 还需要在写一次类型（因为ts 解构出来的时any 类型）
function sayInfo ({ myName, age, address }: { myName:string,age:number,address:string }):void {
  console.log(myName) // joel
  console.log(age) // 27
  console.log(address) // gz
}
sayInfo(userInfo)



