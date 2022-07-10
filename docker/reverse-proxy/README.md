# Desafio Docker - NGINX (proxy reverso) com Node

Desafio do curso :rocket: Full Cycle para criar 3 :whale: containers:
- 1x NGINX atuando como proxy reverso para um servidor Node.js
- 1x servidor web Node.js
- 1x Banco de dados local MySQL

Requisitos:
- [x] Tudo deverá estar funcionando e disponível na porta: 8080
- [x] A aplicação deverá retornar a lista de nomes cadastrados no banco de dados

:bulb: Extras:
- [x] A aplicação cria a tabela do banco de dados automaticamente no primeiro acesso
- [x] Cada acesso à aplicação adiciona uma nova entrar na tabela

## :memo: Instruções

:computer: No terminal:

```
docker-compose up -d --build
```

:earth_americas: No navegador:
```
http://localhost:8080/
```