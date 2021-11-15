const atores = require('../Dados/atores')

const areas = ['Antagonista', 'Protagonista', 'Coadjuvante', 'Diretor(a)', 'Ex-presidente', 'Ex-primeira-dama']
let proximoId = 8

//Permite apenas a  visualização dos atores
function consultaAtores(req, res){
  res.json(atores)
}

//Permite a consulta através do ID
function consultaID(req, res){
  const ator = atores.find(
    (ator) => ator.id === Number(req.params.idConsultado))

    if(!ator){
      res.status(404)
      res.json(`Erro: ator ${req.params.idConsultado} não foi encontrado.`)
      return
    }
  res.json(ator)
}

//Regras de validação
function validarAtor(ator){
  if(!ator.nome){
  return  "O campo 'nome' é obrigatório. Por favor preencha!"
  }
  
  if(!ator.idade){
    return "O campo 'idade' é obrigatório. Por favor preencha!"
  }

  if(!ator.area){
    return "O campo 'área' é obrigatório. Por favor preencha!"
  }
  if(typeof ator.nome != 'string'){
    return "O nome deve ser preenchido por um texto! Corrija e tente novamente."
  }

  if(typeof ator.idade != 'number'){
    return "A idade deve ser preenchido por um número! Corrija e tente novamente."
  }

  if(typeof ator.area != 'string'){
    return "A área deve ser preenchido por um texto! Corrija e tente novamente."
  }

  if(ator.idade < 18){
    return "O ator deve ser maior de idade."
  }

  if(!areas.includes(ator.area)){
    return "Área de atuação inválida. Verifique."
  }

  if(!ator.nome.includes(" ")){
    return "Deve ser preenchido com nome e sobrenome."
  }
}

//Permite que seja criado um novo ator
function criarNovo(req, res) {
  const erro = validarAtor(req.body)

  if(erro){
    res.status(400)
    res.json({erro})
    return
  }

  const novoAtor = {
    nome: req.body.nome,
    idade: req.body.idade,
    area: req.body.area,
    id: proximoId,
  }
    atores.push(novoAtor)
    proximoId += 1
    res.json(novoAtor)
}
  // Permite a edição dos dados do ator
  function editarAtor (req, res){
  
    const ator = atores.find(
      (ator) => ator.id === Number(req.params.idConsultado))

    if(!ator){
      res.status(404)
      res.json(`Erro: Ator ${req.params.idConsultado} não foi encontrado. O ID deve ser o mesmo na rota e no body da requisição.`)
      return
    }

    if(req.body.nome != undefined){
      ator.nome = req.body.nome
    }
    if(req.body.idade != undefined){
      ator.idade = req.body.idade
    }
    res.json(ator)
  }

  function substituir(req, res){
    const ator = atores.find(
      (ator) => ator.id === Number(req.params.idConsultado))
  
    if(ator){
      ator.nome = req.body.nome
      ator.idade = req.body.idade
      ator.area = req.body.area

    } else{
      const novoAtor = req.body

      atores.push(novoAtor)
      res.json(novoAtor)
    }
  }

  function excluir(req, res){
    const ator = atores.find((ator) => ator.id === Number(req.params.idConsultado))
    

    const indice = atores.indexOf(ator)
    atores.splice(indice, 1)
  
    // res.json(`O ID ${req.params.idConsultado} foi excluído com sucesso.`)
    res.json("Excluído")
  }
    

module.exports = {consultaAtores,
   consultaID, criarNovo,
   editarAtor, substituir,
  excluir
}
