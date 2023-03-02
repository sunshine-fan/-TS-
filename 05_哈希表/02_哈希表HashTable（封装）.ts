class hashTable<T>{
  private storage:[string,T][] = []
  //定义数组的长度
  private length:number =7
  //记录已经存在元素的个数
  private count:number=0
}
const hTable = new hashTable()
console.log(hTable);
