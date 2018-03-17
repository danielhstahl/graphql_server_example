const resolverMap = {
    Query: {
      viewer:(obj, args)=>{
          console.log(obj)
          console.log(args)
          return Promise.resolve({id:1})
      },
      /*node:(obj, args)=>{
          console.log(obj)
          console.log(args)
          return Promise.resolve({id:1})
      }*/
    },
  };
module.exports={
    resolverMap
}