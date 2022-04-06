                    Aplicando os conhecimentos sobre Api Rest
O pacote utilizado nesse caso foi o 'Express'.<br>
Neste caso em específico os dados se consistem numa lista de atores e suas funções. 

<b>É possível:</b>
  
✅Visualizar a lista; <br>
✅Pesquisar pelo Id do ator; <br>
✅Editar algum dado do ator; <br>
✅Criar um novo;<br>
❌Excluir se necessário. <br>
  
Foi criado um Middleware(intermediário) de segurança a fim de proteger determinadas alterações  no documento. Para visualizar a lista não é necessário a utilização de senha, apenas para as demais requisições. <br>
Caso tenha interesse em testar a senha é: 'teste123'
  
Para acessar: http://localhost:8000/atores    (Porta: 8000)

  
Print do Insomnia.  05/04/2022
  ![image](https://user-images.githubusercontent.com/85734491/141789600-82f5e50d-1678-4c1e-93d4-2f5805589ccc.png)
