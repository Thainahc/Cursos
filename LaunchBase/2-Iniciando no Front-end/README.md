<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Desafio 2-1: Primeiro HTML & Desafio 2-2: Página de descrição & Página de posts e iframe & Desafio 2-3: Página de posts e iframe 
</h3>

<p align="center">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%23F8952D">
  </a>

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o desafio

Criar um arquivo html que contenha um [favicon](favicon.ico) e um header com 3 links: Sobre, Rocketseat e Conteúdos.

### Favicon

O favicon é o ícone que aparece na aba do navegador. O arquivo está disponível com o nome favicon.ico. Para utilizá-lo é necessário importá-lo com a tag link no html. ser dada a dica de utilizar a tag link na head do html.

```html
<link rel="icon" href="favicon.ico" type="image/x-icon" />
```

### Links

- `Sobre`: Página contendo:
   - Sua imagem de perfil
   - Seu nome
   - Uma breve descrição sobre você
   - Links para as redes sociais, telefone e email

- `Rocketseat`: Página contendo:
    - Uma imagem da logo da empresa
    - O nome da empresa
    - Uma breve descrição da empresa
    - Uma lista com as principais tecnologias utilizadas. Dica: utilize a tag `ul` para lista e `li` para o item da lista.
    - Links para as redes sociais da empresa (Github, Instagram, Facebook e Comunidade)

- `Conteúdos`: Página contendo
    - Título da página
    - Grid com 3 colunas e 1 linha onde serão apresentados os cards dos posts do blog da Rocketseat
    - Informações do card:
      - Imagem de destaque do Post (Tutorial de como pegar os links das imagens)
      - Título do Post
      - Autor do Post
      - Tempo de Leitura
    - Modal: deve conter um iframe que busca a página do post, com um botão maximizar e um botão fechar.

### Estilização

- Deve ser aplicado um background
- Deve ser utilizada a fonte Roboto
- O header precisa ocupar todo o espaço lateral e superior (body sem margin)
- O header precisa ter um espaçamento interno de 30px em todas as direções
- Os links devem ter um espaçamento de 30px entre si
- Os links devem ter alguma alteração visual quando o cursor do mouse passar por cima
- As imagens devem ter uma borda e um formato circular
- O nome e a imagem devem ser destacar do restante

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.

---

Feito com :purple_heart: by [Thainá](https://github.com/Thainahc)