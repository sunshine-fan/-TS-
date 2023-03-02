//顺序查找
function sequentialSearch(arr:number[],traget:number){
  for(let i=0;i<arr.length;i++){
    if(arr[i] === traget){
      return i
    }
  }
}
//二分查找
function binarySearch(arr:number[],traget:number){
  let left = 0
  let right=arr.length - 1
  while(left<=right){
    let mid = Math.floor((left+right)/2)
    if(arr[mid]===traget){
      return mid
    }else if(arr[mid]>traget){
      right = mid-1
    }else{
      left = left + 1 
    }
  }
  return -1
}
let arr = new Array(10000000).fill(0).map((x,i)=>i)
let traget = 5000000
let start = performance.now()
// let index = sequentialSearch(arr,traget)
// 目标元素的索引为：5000000
// 查找消耗的时间为：7.300499998033047 
//时间复杂度O（n）
let index = binarySearch(arr,traget) 
//目标元素的索引为：5000000
//查找消耗的时间为：0.10750000178813934
// 时间复杂度O(log n)
let end = performance.now()
console.log(`目标元素的索引为：${index}`);
console.log(`查找消耗的时间为：${end-start}`);

