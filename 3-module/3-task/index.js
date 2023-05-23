function camelize(str) {
  // ваш код...
    let arr = str.split("-");
    let result = arr[0];
    for (let i = 1; i < arr.length ; i++) {
     console.log((arr[i].charAt(0).toUpperCase()));
     result = result + ((arr[i].charAt(0).toUpperCase())) + arr[i].slice(1)
  }
    return result;
  }
