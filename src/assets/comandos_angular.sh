
 
1. Clonar proyecto:

#git clone https://github.com/anderdavid/mobilityfrontend.git

2. Intalar dependencias:

#nmp install

3. traer ramas remotas desde github

#for remote in `git branch -r`; do git branch --track ${remote#origin/} $remote; done
#git fetch --all
#git pull --all

4. Merge entre master y bootstrap 4

#git merge bootstrap4

5. Crear componente barra de navegacion

#ng g c navbar -is --flat

6. Crear componente de visualizacion de usuario

#ng g c viewUser

7. Crear componente de creacion de usuario

#ng g c createUser

