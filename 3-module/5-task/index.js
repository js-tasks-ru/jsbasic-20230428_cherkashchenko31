function getMinMax(str) {
  // ваш код...
let arr = str.split(" ").filter(item => !isNaN(parseFloat(item)));
let min = Math.min(...arr);
let max = Math.max(...arr)
     return { min, max };
  
}
