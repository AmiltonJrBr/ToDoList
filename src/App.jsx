// importa o estado de atualização
import { useState } from "react";
// importa o css
import "./App.css";
// importa o componente botão
import Button from './components/button';

// carrega todo o projeto react para a main
function App() {

  // criar o estado de atualização da atividade
  const [atividade, setAtividade] = useState("");
  // criar o estado de atualização da lista de atividades
  const [listAtividade, setListaAtividade] = useState([]);

  // função para inserir um valor a atividade
  function atualizarAtividade(valor) {
    setAtividade(valor);
  }

  // função para inserir a atividade na lista
  function adicionarAtividade() {
    // verifica se o input da atividade não está vazio, trim() remove espaços vazios
    if (atividade.trim() === "0") return;

    // atualiza a lista, os tres pontos é o spread operator, que vai copiar tudo que já existe e adicionar a nova atividade ao final, isto garante a imutabilidade do react
    setListaAtividade([...listAtividade, atividade]);
    // limpa o input para um melhor UX
    setAtividade("");
  }

  // carrega o html
  return (
    <div className="container">

      <h1>Lista de Atividades</h1>

      <div className="input-area">

        <input
          type="text"
          placeholder="Digite uma atividade..."
          // faz a interação entre o HTML e o JavaScript, fazendo a variável atividade receber o value do input
          value={atividade}
          // toda vez que o usuario digita (onChange) atualiza a informação inserida na variavel atividade
          onChange={(evento) => atualizarAtividade(evento.target.value)}
        />

        
        <Button
        // quando clica no botao chama a função de adicionar atividade
          funcao={adicionarAtividade}
          btnText="Adicionar"
        />

      </div>

      <ul className="lista">
        {/* o map percorre a lista para transformar cada item em um elemento html */}
        {listAtividade.map((atv, index) => (
          <li key={index} className="item">
            {atv}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;