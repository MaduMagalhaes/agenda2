const prompt = require('prompt-sync')();

class Contato {
    constructor(nome1, telefone1, email1) {
      this.nome = nome1;
      this.telefone = telefone1;
      this.email = email1;
    }

      exibirDetalhes() {
        return `
        Nome: ${this.nome}
        Telefone: ${this.telefone}
        Email: ${this.email}
        `;
      }
    }

    class Cliente extends Contato {
      constructor (nome1, telefone1, email1, empresa1) {
        super(nome1, telefone1, email1);
        this.empresa = empresa1;
      }

      exibirDetalhes() {
        super.exibirDetalhes();
        return `
        Empresa: ${this.empresa}
        `;
      }
    }

    class Amigo extends Contato {
      constructor (nome1, telefone1, email1, dataNasc1) {
        super(nome1, telefone1, email1);
        this.dataNasc = dataNasc1;
      }

      exibirDetalhes() {
        super.exibirDetalhes();
        return `
        Data de nascimento: ${this.dataNasc}
        `;
      }
    }

    class ColegaDeTrabalho extends Contato {
     constructor (nome1, telefone1, email1, departamento1) {
       super(nome1, telefone1, email1);
       this.departamento = departamento1;
      }

      exibirDetalhes() {
        super.exibirDetalhes();
        return `
        Departamento: ${this.departamento}
        `;
      }
    }

    class AgendaDeContatos {
      constructor() {
        this.agenda = [];
      }

      adicionarContato() {
        const nome1 = prompt("Digite o nome do contato:");
        const telefone1 = prompt("Digite o telefone do contato:");
        const email1 = prompt("Digite o email do contato:");
        
        const contato = new Contato(nome1, telefone1, email1);
        contatos.agenda.push(contato);

      }

      adicionarCliente() {
        const nome1 = prompt("Digite o nome do contato:");
        const telefone1 = prompt("Digite o telefone do contato:");
        const email1 = prompt("Digite o email do contato:");
        const empresa1 = prompt("Digite o nome da empresa:");
        const contato = new Cliente(nome1, telefone1, email1, empresa1);
        this.agenda.push(contato);
      }

      adicionarAmigo() {
        const nome1 = prompt("Digite o nome do contato:");
        const telefone1 = prompt("Digite o telefone do contato:");
        const email1 = prompt("Digite o email do contato:");
        const dataNasc1 = prompt("Digite a data de nascimento do contato:");
        const contato = new Amigo(nome1, telefone1, email1, dataNasc1);
        this.agenda.push(contato);
      }

      adicionarColegaDeTrabalho() {
        const nome1 = prompt("Digite o nome do contato:");
        const telefone1 = prompt("Digite o telefone do contato:");
        const email1 = prompt("Digite o email do contato:");
        const departamento1 = prompt("Digite o departamento do contato:");
        const contato = new ColegaDeTrabalho(nome1, telefone1, email1, departamento1);
        this.agenda.push(contato);
      }

      visualizarContatos() {
        if (this.agenda.length === 0) {
          console.log("Não há contatos na agenda!");
        } else {
          this.agenda.forEach((contato) => {
            console.log(contato.exibirDetalhes());
          });
        }
      }

      editarContato(novoNome, novoTelefone, novoEmail) {
        const nomeContato = prompt("Informe o nome do contato que você deseja editar:");
        const nomeContato = this.agenda.find((contatos) => contatos.nome1 === nome1);
        if (contatos) {
          contatos.nome = novoNome;
          contatos.telefone = novoTelefone;
          contatos.email = novoEmail;
        console.log("Informações de contato atualizadas com sucesso!");
        } else {
          console.log("Contato não encontrado!");
        }
        }

      removerContato(nome1) {
        this.agenda = this.agenda.filter(contatos => contatos.nome !== nome1);
        console.log(`O contato nomeado "${nome1}" foi removido da agenda. \n`);
        }

        pesquisarContatos() {
          const consulta = prompt("Digite o nome do contato: ");
          const resultados = this.agenda.filter((contatos) =>
            contatos.nome1.includes(consulta) ||
            contatos.telefone1.includes(consulta) ||
            contatos.email1.includes(consulta));

          if (resultados.length === 0) {
              console.log("Nenhum contato encontrado.");
          } else {
              resultados.forEach((contatos) => {
                  console.log(contatos.exibirDetalhes());
              });
          }
        }
    }

const contatos = new AgendaDeContatos();

let sair = false;

  while (sair != true) {
    const opcao = Number(prompt(`\n Funcionalidades:\n \n 1 - Adicionar novo contato\n 2 - Adicionar novo contato de cliente\n 3 - Adicionar novo contato de amigo \n 4 - Adicionar novo contato de colega de trabalho\n 5 - Visualizar a lista de contatos cadastrados de forma organizada\n 6 - Editar os detalhes de um contato existente\n 7 - Excluir um contato da lista\n 8 - Pesquisar contatos por nome\n 9 - Encerrar\n\n`));

    switch (opcao) {
        case 1:
        contatos.adicionarContato();
          break;

        case 2:
        contatos.adicionarCliente();
          break;

        case 3:
        contatos.adicionarAmigo();
          break;

        case 4:
        contatos.adicionarColegaDeTrabalho();
          break;

        case 5: 
          console.log(contatos);
          break;

        case 6:
        contatos.editarContato();
          break;

        case 7:
        const contatoRemocao = prompt("Digite o nome do contato para fazer a remoção: ");
        contatos.removerContato(contatoRemocao);
          break;

        case 8:
          contatos.pesquisarContatos();
          break;

        case 9:
          sair = true;
          console.log(contatos);
        break;

        default: 
          console.log("Opção inválida!"); 
        break;
    }
}
