var arr = [];
var example = {};

console.log(!!example);

if (arr.length) {
  console.log('Condição verdadeira')
}else{
  console.log('Condição falsa')
}

// Valores Truthy -->

// if (true)
// if ({})
// if ([])
// if (42)
// if ("foo")
// if (new Date())
// if (-42)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)

// Valores Falsy -->

// if (false)
// if (null)
// if (undefined)
// if (0)
// if (NaN)
// if ('')
// if (document.all) [1]