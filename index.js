//Notas dos alunos
var notaTeste1, notaTeste2, quantidadeDias, quantidadeRepeticao, cont;
var mediaAluno, mediaDias;

function mediaAluno() {
    quantidadeRepeticao = prompt("Digite a quantidade de médias você vai calcular:");
    //O nosso bloco de repetição vai repetir todo o nosso código escrito anteriormente por quantas vezes foram digitadas pelo usuário, no inicio do algoritmo.    
    for(cont = 0; cont < quantidadeRepeticao; cont++){        
        notaTeste1 = prompt("Digite a 1ª nota:");
        notaTeste2 = prompt("Digite a 2ª nota:");  
        quantidadeDias = prompt("Digite a quantidade de dias de frequência escolar:");  
        //Calcula a soma das duas notas informadas e divida por 2, que é a quantidade de notas
        mediaAluno = (parseInt(notaTeste1) + parseInt(notaTeste2))/2;
        //Calcula a porcentagem de frequência com base em 200 dias de aulas
        mediaDias = (parseInt(quantidadeDias) * 100)/200;
        //Imprime Verdadeiro ou Falso na linha abaixo, se a média de notas for igual ou maior que 7 e a média de frequência for maior ou igual a 75%, vai ser impresso Verdadeiro
        if(parseInt(mediaAluno) >= 7 && parseInt(mediaDias) >= 75){
           alert("Você foi aprovado!") 
        }else{
            alert("Você foi reprovado!") 
        }
        //Imprime a soma das duas notas informadas e divida por 2, que é a quantidade de notas
        alert("A média final das notas do aluno é: " + mediaAluno);   //Imprime a porcentagem de frequência do aluno    
        alert("A porcentagem final da frequência escolar é: " + mediaDias);
    }    
}