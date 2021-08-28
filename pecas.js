var ListadePecas = ["filtro de ar", "filtro de oleo", "bomba de combustivel" , "amortecedor" , "disco de freio"]

if (ListadePecas.length <=10)
console.log("É possível cadastrar peças");
else { 
    console.log("Não é possivel cadastrar peças");

}
let PesoPeca = 120;
if (PesoPeca <100) {
    console.log("A peça não possui o peso adequado");
} else {

    console.log("A peça possui o peso adequado");
}
let NomePeca = ("amortecedor");
  //verificar se o nome da peça tem mais que 3 caracteres
  if(NomePeca.length >= 3){
      console.log("O nome da peça é ideal")

  }else if(NomePeca.length == 0){
      console.log("o nome da peça não pode ser vazio")

  }else{
      console.log("o nome da peça é curto digite um nome acima de 3 caracteres")
  }