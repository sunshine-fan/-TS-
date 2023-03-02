function hashFunc(key:string,max:number):number{
  let hashCode = 0
  const length =key.length
  for(let i=0;i<length;i++){
    hashCode = 31*hashCode+key.charCodeAt(i)
  }
  const index= hashCode % max
  return index
}
console.log(hashFunc("abc",7));
