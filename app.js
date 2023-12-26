var pool = require("./bd")

pool.query("select * from producto").then(function(resultados) {
  console.log(resultados)
})

