class HashTable<T=any>{
  storage:[string,T][][] = []
  //定义数组的长度
  private limit:number =7
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
    let index = this.hashFunc(key,this.limit)
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
      //判断数组是否扩容
      if(this.count>this.limit*0.75){
        this.resize(this.limit*2)
      }
    }
  }
  //获取元素
  get(key:string){
    //生成对应的key值
    const index = this.hashFunc(key,this.limit)
    //根据索引获取桐bucket
    const bucket = this.storage[index]
    if(!bucket) return null
    //3.遍历桶中的数据
    for(let i =0;i<bucket.length;i++){
      const tuple = bucket[i]
      if(tuple[0] === key){
        return tuple[1]
      }
    }
    return null
  }
  //删除数据
  delete(key:string){
    //生成对应的key值
    const index = this.hashFunc(key,this.limit)
    //根据索引获取桐bucket
    const bucket = this.storage[index]
    if(!bucket) return null
    //3.遍历桶中的数据
    for(let i =0;i<bucket.length;i++){
      const tuple = bucket[i]
      if(tuple[0] === key){
        bucket.splice(i,1)
        this.count--
         //判断数组是否扩容
        if(this.count>8 && this.count<this.limit*0.25){
          this.resize(Math.floor(this.limit/2))
        }
        return tuple[1]
      }
    }
    return null
  }
  //扩容
  resize(newlimit:number){
    //1.保存旧数组中的内容
    const oldStorage = this.storage
    
    //2.重置属性
    this.limit = newlimit
    this.count = 0
    this.storage =[]

    //3.遍历原来数组中的所有数据
    oldStorage.forEach(bucket=>{
      //如果没有数据直接返回
      if(!bucket)return

      //3.1bucket中存在数据，那么将所有数据重置hash
      for(let i=0;i<bucket.length;i++) {
        const tuple = bucket[i]
        this.put(tuple[0],tuple[1]) 
      }
    })
  }
}
let hsTable = new HashTable()
hsTable.put("aaa",100)
hsTable.put("asd",200)
hsTable.put("bns",300)
hsTable.put("abc",300)
console.log(hsTable.delete("abc"));
console.log(hsTable.get("bns"));
console.log(hsTable.storage);