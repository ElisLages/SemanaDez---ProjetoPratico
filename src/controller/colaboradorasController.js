const colaboradoras = require("../model/colaboradoras.json");
const fs = require("fs")


const getAll = (req, res) => {
  console.log(req.url);
  res.status(200).send(colaboradoras);
};

const getById = (req, res) => {
  const id = req.params.id;

  res.status(200).send(colaboradoras.find((tarefa) => colaboradora.id == id));
};

const postColaboradoras = (req, res) => {
    console.log(req.body)
    const { id, dataInclusao, concluido, descricao, nomeColaboradora } = req.body
    tarefas.push({ id, dataInclusao, concluido, descricao, nomeColaboradora })
    
    fs.writeFile("./src/model/colaboradoras.json", JSON.stringify(tarefas), 'utf8', function(err) {
      if (err) {
        return res.status(424).send({message: err})
      }

      console.log("Arquivo atualizado!")
    })

    res.status(201).send(colaboradoras)
    

}

const deleteColaboradora = (req, res) => {
  const id = req.params.id
  const colaboradoraFiltrada = colaboradoras.find((colaboradora) => colaboradora.id == id)
  const index = colaboradoras.indexOf(colaboradoraFiltrada)
  colaboradoras.splice(index, 10)

  fs.writeFile(".src/model/colaboradoras.json", JSON.stringify(colaboradoras), 'utf8', function(err) {
    if(err){
      return res.status(424).send({message: err})
    }

    console.log("Arquivo atualizado")
  })   

  res.status(200).send(colaboradoras)
}


module.exports = {
  getAll,
  getById,
  postColaboradoras,
  deleteColaboradora,
  
};
