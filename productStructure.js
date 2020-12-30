const products = [
  "preto-PP", 
  "preto-M", 
  "preto-G", 
  "preto-GG", 
  "preto-GG", 
  "branco-PP", 
  "branco-G", 
  "vermelho-M", 
  "azul-XG", 
  "azul-XG", 
  "azul-XG", 
  "azul-P"
]

module.exports = () => {
 
  const newArray ={};

  products.forEach((product) => {
    const attributes = product.split('-');
    const[color, size] =attributes;

    if(typeof newArray[color] !== 'object')
    newArray[color]= {};
    if(newArray[color].hasOwnProperty(size))
    newArray[color][size] +=1;

    else newArray[color][size] =1;
  });

   return newArray; 
}