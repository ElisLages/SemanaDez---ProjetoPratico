const colaboradoras = require("../model/livros.json");
const fs = require("fs")


const getAll = (req, res) => {
  console.log(req.url);
  res.status(200).send(livros);
};

const getById = (req, res) => {
  const id = req.params.id;

  res.status(200).send(livros.find((livro) => livro.id == id));
};

const postLivros = (req, res) => {
    console.log(req.body)
    const { id, titulo, autoria, editora, noemEstoque } = req.body
    tarefas.push({ id, titulo, autoria, editora, noemEstoque })
    
    fs.writeFile("./src/model/livros.json", JSON.stringify(tarefas), 'utf8', function(err) {
      if (err) {
        return res.status(424).send({message: err})
      }

      console.log("Arquivo atualizado!")
    })

    res.status(201).send(livros)
    

}

const deleteLivros = (req, res) => {
  const id = req.params.id
  const livroFiltrado = livros.find((livro) => livro.id == id)
  const index = livros.indexOf(livroFiltrado)
  livro.splice(index, 10)

  fs.writeFile(".src/model/livros.json", JSON.stringify(livros), 'utf8', function(err) {
    if(err){
      return res.status(424).send({message: err})
    }

    console.log("Arquivo atualizado")
  })   

  res.status(200).send(livros)
}


module.exports = {
  getAll,
  getById,
  postLivros,
  deleteLivros,
  
};
