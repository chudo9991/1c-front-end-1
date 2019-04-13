var mongoClient = require("mongodb").MongoClient,
    url = "mongodb://localhost/sandbox";

// подключаемся к базе данных
mongoClient.connect(url, function(err, db) {
    if(err) console.log(err.stack); // получаем коллекцию humans
    var humans = db.collections("humans");
    // совершаем запрос insert
    humans.insert({
        name: "Алексей",
        age: 18
    }, function(err, result) {
        if(err) console.log(err.stack); // функйция обратного вызова
        console.log(result);
    });
});