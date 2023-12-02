# Leilão de Centavos

Esse aplicativo web foi feito em NextJS, usando o mesmo como backend por meio da rota de `/api`.

## Roadmap

- [x] Criar identidade visual (frontend)
- [x] Coletar dados estáticos do servidor via socketIO
- [x] Criar autenticação simples

## Ambiente de Desenvolvimento

1. Clone o repositório
2. Instale as dependências usando `npm i`
3. Inicie o servidor do frontend usando `npm run dev`
4. Inicie o servidor do backend usando `npm run server`

## Eventos

|    Nome    | Descrição                                                                                      |
| :--------: | :--------------------------------------------------------------------------------------------- |
|  `items`   | Mostra todos os itens que ainda não foram vendidos e que já passaram da data de serem lançados |
| `winners`  | Mostra todos os itens que já foram vendidos                                                    |
| `add_item` | Adiciona um item                                                                               |
|   `bid`    | Dá um lance                                                                                    |

## Detalhes de Implementação

- O usuário é determinado pelo nome que for usado no login
  - Apenas o usuário `admin` pode adicionar itens por meio de uma janela que aparece no canto superior esquerdo
- O gerenciamento do número de lances restantes do usuário é realizado no client-side
- O banco de dados de itens é um [arquivo `.json`](./data/db.original.json) estático, para facilitar os testes. Durante a execução do servidor do backend, todas as modificações ficam na memória RAM. Ou seja, o banco de dados é reiniciado toda vez que se reinicia o servidor.
- A arquitetura escolhida para o desenvolvimento desse site foi a SPA (_Single Page Application_). Ao mesmo tempo que esse modelo é mais fácil de desenvolver, realizar testes e manter ele é um inferno, dado que seus estados não são facilmente reproduzíveis. No entanto, essa escolha permitiu um desenvolvimento rápido.
