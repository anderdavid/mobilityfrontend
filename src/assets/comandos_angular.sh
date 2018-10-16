
 
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

6. Crear componente de visualizacion de usuarios

#ng g c viewUser

6.1 Crear componente de visuaalizacion de usuario

#cd src/app/view-user/
#ng g c viewUserId --flat
#cd ..
#cd ..
#cd ..

7. Crear componente de creacion de usuario

#ng g c createUser

8. Crear service

#ng g s usuario

9. Insalar libreria rx/js

#npm install --save rxjs-compat

10. Crear componente de edicion de usuario

#ng g c editUser

11. Crear componente para test validaciond de formlarios

#ng g c testForm


