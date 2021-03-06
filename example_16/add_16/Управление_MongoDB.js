// Переходим к папке bin

    Set-Location D:\MongoDB\Server\4.0\bin

// Переход к папке example_16\mongo

    Set-Location F:\Stanislav\Workspace\GitHub\1c-front-end\example_16\mongo

// По умолчанию CD в PowerShell является псевдонимом для Set-Location

    sd F:\Stanislav\Workspace\GitHub\1c-front-end\example_16\mongo

    Set-Location F:\Stanislav\Workspace\GitHub\1c-front-end\example_16_form\server

// mkdir - команда для создания новых каталогов (например для базы данных db)

    mkdir

// rm - команда для удаления файлов и папок

    rm

// Установка модуля mongodb для связи Node.js с базами данных MongoDB

    npm install mongodb --save

// Устанвливаем нужную версию MongoDB

    npm install mongodb@2.2.33 --save

// Вывод списка баз данных

    show databases

    show dbs

// запустить сервер MongoDB. Сервер представляет приложение mongod, которое находится в папке bin.
// mongod: сервер баз данных MongoDB. Он обрабатывает запросы, управляет форматом данных и выполняет различные операции в фоновом режиме по управлению базами данных

    mongod

// Выбор базы данных

    use sanbox

// Чтобы проверить какая база данных выбрана в данный момент, выполните

    db

// Просмотр коллекций(таблиц) в выбранной базе данных

    show collections

    db.getCollectionNames()

// Получить статистику по текущей базе данных

    db.stats()

// Добавление данных в коллекцию

    insert()

// Добавляет несколько документов

    insertMany()

// Добавляет один документ

    insertOne()

//  Смотрим документ в БД

    db.humans.find()

// Чтобы вывести документ в более читабельном виде добавим метод pretty()

    db.humans.find().pretty()

// Для загузки файла в текущую базу данных применяется функция load(),
// в которую в качестве параметра передается путь к файлу.
// В данном случае предполагается, что файл располагается по пути "D:/users.js".

    load("D:/users.js")


    db.sanbox.find().pretty()
