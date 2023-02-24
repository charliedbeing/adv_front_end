import { _ } from './_.js'

var test = _.unique([1,2,3,2,4,5,5,7]).map((x)=>2*x).filter(x=> x<10).getValue()

console.log(test)

