//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type client = {
    name: string,
    cpf: number,
    birthDate: string,
    balance: number,
    extract: extract[]
}

type extract = {
    value: number,
    inicial_date: string,
    description: string
}

let clients: client[] = [
    {
        name: "Roberta Fiúza",
        cpf: 23458645633,
        birthDate: "13/08/1889",
        balance: 0,
        extract: []
    },
]

app.get("/clients/all", (req: Request, res: Response) => {
    const allClients: client[] = clients
    res.status(200).send(allClients)
})

app.post("/clients", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const reqBody: client = {
            name: req.body.name,
            cpf: req.body.cpf,
            birthDate: req.body.birthDate,
            balance: req.body.balance,
            extract: req.body.extract
        };

        let data = req.body.birthDate.replace(/\//g, "-")
        const data_array = data.split("-")

        if(data_array[0].length != 4){
            data = data_array[2]+"-"+data_array[1]+"-"+data_array[0]
         }

        const today = new Date()
        const born = new Date(data)
        let age = today.getFullYear() - born.getFullYear()
        const month = today.getMonth() - born.getMonth()
        if (month < 0 || (month === 0 && today.getDate() < born.getDate())) {
            age--
        }

        if (!reqBody.name ||
            !reqBody.cpf ||
            age < 18 ||
            reqBody.balance < 0 ||
            !reqBody.extract) {
            errorCode = 422
            throw new Error("Please check the fields.")
        }

        clients.push(reqBody);
        res.status(201).send("Client created successfully")

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.get("/clients/cpf", (req: Request, res: Response) => {
    
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
