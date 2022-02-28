# Primeira vez
1. git config --global user.name "vagner.araujo" [para que todos os commits usem esse usuário]
2. git config --global user.email "vagner.araujo@tse.jus.br" [para que todos os commits usem esse email]
3. git clone https://git.tse.jus.br/eleitoral/sistema-totalizacao.git [para baixar o repositório - ou também pode ser usado o git pull]
4. git branch feature [git branch + nome, cria um novo universo paralelo da branch principal, assim você pode trabalhar localmente ]
5. git checkout feature [entra na banch]
6. git checkout -b feature [esse comando cria e já entra na branch]
7. git add . [para adicionar todos os arquivos ao commit]
8. git commit -m "descrição" [para commitar tudo que foi adicionado, e o "-m" para que o commit tenha uma descrição]
9. Q (a letra q) sai das telas de comparação, por exemplo: quando você usa o git diff, que exibe a dela de comparação.
10. origin é o nosso computador
11. git branch - master é a branch que está sendo usada [verifique o nome da branch com "git branch" e caso sejam exibidas mais de uma, repare naquela que contiver o asterisco, exemplo: *master]
12. git push origin master [é a master local], vai subir  (empurrar) da master local para a master remota]
13. git push --set-upstream origin redmine143987-manual-suplementar
14. git pull origin master [para puxar(baixar) tudo da branch remota para a local]
15. git status [diz como está a sua branch local com relação a branch remota, isto é, mostra os arquivos modificados e os arquivos que não são controlados pelo git]
16. git log [mostra as mudanças no projeto]
17. git show 70747a19db511f900651cab18326fdf4d9b48877 [git show + número do commit, detalha o que foi feito]
18. git merge feature [mescla a branch feature com a branch master]
19. git branch -d feature [deleta a branch feature]
20. git push -u origin master [para enviar a branch local para a remota]
21. git pull [Baixa as atualizações do repositório remoto]

gitInit (cria um novo repositório)
gitLog (Visualizar o Histórico De Alterações)
git Status (exibe as condições do diretório de trabalho e da área de staging)
git Add (salva as alterações, isto é, adiciona um item novo para o commit)

7. git add . [para adicionar todos os arquivos do diretório atual ao commit]
8. git commit -m "descrição" [para commitar tudo que foi adicionado, e o "-m" para que o commit tenha uma descrição]
9. git push origin HEAD:"nomeDaBranchRemota" [onde origin é a representação da branch local com tudo que vai subir (empurrar) para a branch remota

------------------
Segue os passos que faço TortoiseGit 
antes de atualizar qualquer documentação: 

1. Switch and Checkout (desenvolvimento)
2. Pull (desenvolvimento)
3. Switch and Checkout (sua branch)
4. Pull (sua branch)
5. Push Desenvolvimento para sua branch
6. Pull (sua branch)

Para atualizar um documento 

Git Commit (sua branch)
Push (sua branch local e remota) 
Acessar o GIT Lab apertar F5 ai soliciar  um merg request.

O comentário que coloco é o número da demanda que estou trabalhando. Ou número do BUG.