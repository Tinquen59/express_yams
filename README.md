# express_yams

After cloning project on github, run :

```bash
npm i
```

```bash
mongod
```

open new bash and run:

```bash
mongo
...
...
...

> use yams

> const patries = [
    { 
        "name" : "Fondant supreme",
        "number" : 10,
        "order" : 1
    },
    { 
        "name" : "Cake tout Chocolat",
        "number" : 10,
        "order" : 2
    },
    { 
        "name" : "Cake Framboise chocolat",
        "number" : 10,
        "order" : 3
    },
    { 
        "name" : "Brioche sucrée avec chocolat",
        "number" : 10, 
        "order" : 4
    },
    { 
        "name" : "Cake glacé fondant au chocolat",
        "number" : 10,
        "order" : 5
    },
    {
        "name" : "Eclairs au chocolat",
        "number" : 10,
        "order" : 6
    },
    {
        "name" : "Tarte poire chocolat",
        "number" : 10,
        "order" : 7
    },
    {
        "name" : "Banana  au chocolat",
        "number" : 10,
        "order" : 8
    }
];

db.patries.inserMany(patries);
```

Now you can run

```bash
npm start
```

and open website.