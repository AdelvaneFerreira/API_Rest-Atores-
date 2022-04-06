
function senha(req, res, next){
   
  if(req.method === "GET" || req.query.senha === 'teste123'){
    next()
  } else {
    res.status(401)
    res.json('Você não tem permissão para acessar este arquivo.')
  }
}

module.exports = {senha}