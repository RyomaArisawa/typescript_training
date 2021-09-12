export{};

function error(message: string): never{
  throw new Error(message);
};

try{
  let result = error('test');
}catch(error){
  console.log(error);
}