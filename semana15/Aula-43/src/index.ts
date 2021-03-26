//importando express com Request e Response e cors
import express, { Request, Response } from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
import { type } from 'node:os';
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

enum userType {
    ADMIN = 'ADMIN',
    NORMAL = 'NORMAL'
}

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}


let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: userType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: userType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: userType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: userType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: userType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: userType.ADMIN,
        age: 60
    }
]

//Exercício 1 
//a. Qual método HTTP você deve utilizar para isso?
//O método GET, ele é o verbo que busca informações em uma API.

//b. Como você indicaria a entidade que está sendo manipulada?
//Indicaria como users, para ficar padronizada com o enunciado.

app.get("/users/all", (req: Request, res: Response) => {
    const myUsers: user[] = users
    res.status(200).send(myUsers)
})

app.get("/users/search", (req: Request, res: Response) => {
    let errorCode: number = 400;
    let result: user[] = users
    let type = req.query.type as string

    try {
        if (!(type in userType)) {
            errorCode = 404;
            throw new Error("Type not found")
        }
        result = result.filter(
            user => user.type === (type as string)
        )
        res.status(200).send(result)
    } catch (error) {
        res.status(errorCode).send(error.message);
    }
})

app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const name: string = req.query.name as string;
        const myUsers = users
        const myUser = myUsers.find((usr) => { return usr.name === name })

        if (!myUser) {
            errorCode = 404;
            throw new Error("User not found")
        }

        res.status(200).send(myUser)

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.post("/users", (req: Request, res: Response) => {

    let errorCode: number = 400

    try {
        const reqBody: user = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age
        };

        if (!reqBody.age ||
            !reqBody.email ||
            !reqBody.id ||
            !reqBody.name ||
            !reqBody.type) {
            errorCode = 422
            throw new Error("Please check the fields.")
        }

        users.push(reqBody);
        res.status(201).send("User created successfully")

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.put("/users/edit", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const reqBody: user = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age
        };

        if (!reqBody.age ||
            !reqBody.email ||
            !reqBody.id ||
            !reqBody.name ||
            !reqBody.type) {
            errorCode = 422
            throw new Error("Please check the fields.")
        }

        users.push(reqBody);
        res.status(201).send("User modifed successfully") 

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.patch("/users/re-edit", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const reqBody: user = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age
        };

        if (!reqBody.age ||
            !reqBody.email ||
            !reqBody.id ||
            !reqBody.name ||
            !reqBody.type) {
            errorCode = 422
            throw new Error("Please check the fields.")
        }

        users.push(reqBody);
        res.status(201).send("User remodifed successfully") 

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.delete("/users/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {

        const authorization = req.headers.authorization;
        if (!authorization) {
            errorCode = 401;
            throw new Error("Invalid authorization. Please fill the field");
        }

        const id = Number(req.params.id);
        if (isNaN(id)) {
            throw new Error("Invalid id type. Please send a number");
        }

        const myUsers = users

        const userIndex = myUsers.findIndex((usr) => {
            return usr.id === id;
        });

        if (userIndex < 0) {
            errorCode = 404;
            throw new Error("User not found");
        }

        users.splice(userIndex, id);

        res.status(200).send("User delete successfully");

    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: error.message });
    }

});


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

