--------- тема Vue.js. Компоненты и маршрутизация ----------

    Set-Location F:\Stanislav\Workspace\GitHub\1c-front-end\example_19_2

    cd F:\Stanislav\Workspace\GitHub\1c-front-end\example_20


---------- Начало. Установка ----------

// 1) Установка Browserify

    npm install --global browserify

// 2) Создаем конфигурационнй фалй в папке проекта

    npm init --force

// 3) Утстанвливаем JQuery

    npm install jquery --save

// Компилируем main.js и JQuery  в файл bundle.js

    browserify main.js --outfile bundle.js

// 4) Устанавливаем Watchify для автоматической сборки

    npm install --global watchify

    watchify main.js --outfile bundle.js --verbose

// 5)Утстанвливаем Vue.js и модули необходимы для сборки компонентов

    npm install vue --save

    npm install vueify vue-hot-reload-api `
        babel-core babel-preset-es2015 `
        babel-runtime babel-plugin-transform-runtime `
        --save-dev

Завершаем ` // чтобы файл читался далее


// Компилируем код в bundle.js с vueify

    browserify main.js --outfile bundle.js --transform vueify



// 6) Устанавливаем маршрутизатор

    npm install vue-router --save





-------- Подробго --------------

// Проверяем версии Node и npm

    node --version

    npm --version

// Аудит пакетов npm

    npm audit

// Исправление пакетов (осторожно!)

    npm audit fix


// Установка Browserify

    npm install --global browserify

// Проверим устаеновку browserify

    browserify --version


// Создаем конфигурационнй фалй в папке проекта

    npm init --force


// Утстанвливаем JQuery

    npm install jquery --save

// Провераяем версию JQuery

    npm -v jquery


// Компилируем main.js и JQuery  в файл bundle.js


    browserify main.js --outfile bundle.js


------------------- Автоматическая сборка ------------------

// Устанавливаем Watchify с помощью NPM
// Watchify это стандартный инструмент для автоматической пересборки вашего bundle.js

    npm install --global watchify

// Автомагтическая сборка в момент сохраниния при помощи пакета Watchify
// Флаг -v приказывает Watchify уведомлять вас о каждой пересборке проекта.

watchify main.js --outfile bundle.js --verbose


----------- компоненты -----------------

// Утстанвливаем Vue.js

    npm install vue --save

// Провераяем версию Vue.js

    npm -v vue


// Устанавливаем модули необходимые для сборки компонентов

    npm install vueify vue-hot-reload-api `
        babel-core babel-preset-es2015 `
        babel-runtime babel-plugin-transform-runtime `
        --save-dev

// Компилируем код в bundle.js с vueify

    browserify main.js --outfile bundle.js --transform vueify



---------- Маршрутизация ----------

// Устанавливаем маршрутизатор

    npm install vue-router --save



------------ Команды node.js ---------------------

    npm uninstall <name> удаляет модуль из node_modules, но не package.json

    npm uninstall <name> --save также удаляет его из dependencies в package.json

    npm uninstall <name> --save-dev также удаляет его из devDependencies в package.json

    npm -g uninstall <name> --save также удаляет его глобально



    npm uninstall babel-preset-es2015 --save-dev


------ алтернативные варианты ------------



var Vue = require('vue').default;

или же

import Vue from 'vue';



/ import Vue from 'vue'
import Vue from 'vue/dist/vue.js'
import App from './src/app.vue'

import Vue from 'vue';
import App from './app.vue/';


var Vue = require('vue').default;


В моем случае я использую browserify, где вы можете использовать псевдоним для создания псевдонима. Добавьте следующее в ваш package.jsonфайл:

{
  // ...
  "browser": {
    "vue": "vue/dist/vue.common.js"
  }
}


browserify main.js --outfile bundle.js --transform vueify
Error: Cannot find module '../movie.vue' from 'F:\Stanislav\Workspace\GitHub\1c-front-end\example_19_2\pages'
    at C:\Users\Stanislav\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:55:21
    at load (C:\Users\Stanislav\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:69:43)
    at onex (C:\Users\Stanislav\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:92:31)
    at C:\Users\Stanislav\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:22:47
    at FSReqWrap.oncomplete (fs.js:153:21)
PS F:\Stanislav\Workspace\GitHub\1c-front-end\example_19_2>

Error: Cannot find module './app.vue' from 'F:\Stanislav\Workspace\GitHub\1c-front-end\example_19_3'
    at C:\Users\Stanislav\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:55:21
    at load (C:\Users\Stanislav\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:69:43)
    at onex (C:\Users\Stanislav\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:92:31)
    at C:\Users\Stanislav\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:22:47
    at FSReqWrap.oncomplete (fs.js:153:21)



new Vue({
    el: '#app',
    template: '<p>haaaa</p>'
});


import Vue from 'vue' //import App from './app.vue'

new Vue({
    el: '#app',
    render: function(createElement) {
        return createElement(
            'p',
            'haaaa'
        )
    }
});



import Vue from 'vue'
import Vue from './header.vue"'

var Vue = require("vue");
var Header = require("./header.vue");

var vm = new Vue({
    el: "body",
    components: {
        cTag: Header
    }
});
