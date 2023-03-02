class Graph<T>{
  //顶点
  private verteces:T[] = []
  //边,邻接表
  private adjList:Map<T,T[]> = new Map()
  /**添加顶点跟边的方法*/
  addVertex(vertex:T){
    //保存顶点
    this.verteces.push(vertex)
    //创建邻接表
    this.adjList.set(vertex,[])
  }

   /**添加边*/
  addEdge(v1:T,v2:T){
    this.adjList.get(v1)?.push(v2)
    this.adjList.get(v2)?.push(v1)
  }

  /**遍历*/
  traverse(){
    this.verteces.forEach((vertex)=>{
      const edges = this.adjList.get(vertex)
      console.log(`${vertex} -> ${edges?.join(" ")}`);
    }
  )}
  /**BFS*/ 
  bfs(){
    if(this.verteces[0]===0) return
    let queue:T[] = []
    queue.push(this.verteces[0])
    //访问过后的顶点插入set中
    let visited = new Set()
    visited.add(this.verteces[0])
    while(queue.length){
      //拿到队列头部元素
      const vertex = queue.shift()! 
      this.adjList.get(vertex)?.forEach(item=>{
        if(!visited.has(item)){
          visited.add(item)
          queue.push(item)
        }
      })
    }
    return visited
  }
  /**DFS*/  
  //无论是从哪个方向开始深层次挖掘最终结果是一样的
  dfs(){
    if(this.verteces[0]===0) return
    //模拟栈结构 循环
    let stack:T[] = []
    stack.push(this.verteces[0])
    //创建set结构
    let visited = new Set<T>()
    visited.add(this.verteces[0])

    while(stack.length){
      const vertex = stack.pop()!
      this.adjList.get(vertex)!.forEach(ele=>{
        if(!visited.has(ele)){
          stack.push(ele)
          visited.add(ele)
        }
      })
    }
    return visited
  }
}
const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addVertex("G")
graph.addVertex("H")

graph.addEdge("A","B")
graph.addEdge("B","C")
graph.addEdge("C","D")
graph.addEdge("D","E")
graph.addEdge("E","F")
graph.addEdge("F","G")
// graph.traverse()
//todo 广度队列结构一层一层 深度while循环，类递归 
console.log(graph.bfs());
console.log(graph.dfs());
export {}