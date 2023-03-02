class HashTable<T=any>{
  storage:[string,T][][] = []
  //定义数组的长度
  private length:number =7
  //记录已经存在元素的个数
  private count:number=0
  //hash函数
  private hashFunc(key:string,max:number):number{
    let hashCode = 0
    const length =key.length
    for(let i=0;i<length;i++){
      // 霍纳法则计算hashCode
      hashCode = 31*hashCode+key.charCodeAt(i)
    }
    //求出索引值
    const index= hashCode % max
    return index    
  }
  //插入元素
  put(key:string,value:T){
    let index = this.hashFunc(key,this.length)
    //取出索引位置对应位置的数组（桶）
    let bucket = this.storage[index]
    //3.判断桶内是否存在值
    if(!bucket){  
      bucket = []
      this.storage[index] =bucket
    }
    //4.确定已经有一个数组了，但是数组中是否已经存在key（判断是否存在）
    let isUpdate = false
    for(let i=0;i<bucket.length;i++){
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      if(tupleKey===key){
        //更新的操作 
        tuple[1] = value
        isUpdate=true
      }
    }
    // 如果桶中没有该元素，就直接加入桶中
    if(!isUpdate){
      bucket.push([key,value])
      this.count++
    }

  }
}
let hsTable = new HashTable()
hsTable.put("aaa",100)
hsTable.put("aaa",200)
hsTable.put("bbb",300)
console.log(hsTable.storage);