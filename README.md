# MEDPREV Frontend Challenge

URL https://medprev-challenge.netlify.app/

### Project setup
```
yarn install
```

#### Compiles and hot-reloads for development
```
yarn serve
```

#### Compiles and minifies for production
```
yarn build
```

#### Lints and fixes files
```
yarn lint
```


## Objetivos

- [ ] Desenvolvimento de um CRUD de pessoa;
- [ ] Protótipo completamente funcional, se possível publicado no Netlify;
- [x] Tentar utilizar a maior parte das tecnologias;
- [x] Mostrar domínio sobre criação e uso de componentes VueJS;
- [x] Ter uma tela para listar os cadastros com paginação;
- [ ] Ter uma tela para cadastro/edição dos cadastros;
- [x] Ter opção para excluir um cadastro;
- [ ] No cadastro de endereço, poder cadastrar mais de um;
- [ ] Aplicar validação dos campos obrigatórios nos formulários;
- [x] Aplicar máscaras nos campos de CPF, CNPJ, Data, Número e CEP;
- [x] Utilizar ESLint com a configuração AIRBNB;
- [x] Entregar código fonte em um repositório público (GitHub, Bitbucket, etc...)

### Tecnologias a serem utilizadas
- [x] VueJS
- [x] Vue Router
- [x] Vuex
- [ ] Vuelidate
- [x]  Spectre.css, Bootstrap, Vuetify ou outro (diferencial não usar lib de componentes)
- [x] SCSS
- [x] Git


#### Campos (*são obrigatórios)
- *Tipo: Pessoa física / Pessoa jurídica
- *Nome
- *Razão social (quando PJ)
- *CPF (quando PF)
- *CNPJ (quando PJ)
- *Sexo (quando PF)
- *Data de nascimento (quando PF)
- Email
- Telefone
- Celular
- Foto

##### Endereço (array de itens)
- *Endereço
- *Número
- Complemento
- Bairro
- *Cidade
- *Estado
- CEP


### Backend
Utilizar o JSONBox como backend (API REST)

*Referências*
- *Spectre.css*: https://picturepan2.github.io/spectre/index.html
- *JSONBox*: https://jsonbox.io/
- *Netlify*: https://www.netlify.com/

