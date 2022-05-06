// Exercicio 1 - Crie um novo projeto utilizando npx create-react-app nome-app e acesse a pasta nome-app (nome que desejar)

/* Exercicio 2 - Crie uma lista de tarefas simples seguindo os passos abaixo:

 - insira a função Task a seguir acima do seu   componente App dentro do arquivo App.js

 - agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!).Insira o valor que você quiser, salve a página e inicie-a rodando o comando npm start.
 
 - por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App . */


// import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Estudar React', 'Fazer Resumos', 'Treinar BJJ', 'Ler um livro']

const mapTasks = tasks.map((task) => Task(task))

function App() {
  return (
    <div className="App">
      <ul>
        {mapTasks}
      </ul>
    </div>
  );
}

export default App;
