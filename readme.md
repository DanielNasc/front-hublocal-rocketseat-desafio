# Desafio Rocketseat + HubLocal

## Foi dado o seguinte desafio:

Nesse desafio você irá desenvolver uma aplicação utilizando **ReactJS** que deverá resolver o seguinte problema 👇

> "Explique por que as empresas devem ter a acesso e serem clientes da HubLocal"

Haviam dois caminhos diferentes, um de React e outro de Express, e eu optei por React, já que ando um pouco enferrujado com desenvolvimento web.

## Sobre o site

É dividido em 5 pequenas seções, onde cada uma tem um pequeno parágrafo, menos a última, que é a seção onde o usuário coloca seu email para que o site real da HubLocal seja enviado para ele.

Esse negócio de enviar o email deu muito trabalho, tentei usar a biblioteca nodemailer, mas tive um erro com `os.networkInterfaces()`, então criei uma API em Flask para fazer isso, porque era mais rápido de fazer usando Python, se não eu teria usado o NodeJS.

Provavelmente deve ter uns erros de iniciante, mas vou deixá-los aí, vai ser legal rir deles no futuro.