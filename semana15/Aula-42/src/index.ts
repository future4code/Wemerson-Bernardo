import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from 'net';
import { countries } from "./countries";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get('/countries/all', (req: Request, res: Response) => {
    
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
      }))  
      res.status(200).send(result)
});

app.get('/countries/:id', (req: Request, res: Response) => {
    const id: number = Number(req.params.id)

    const nation = countries.find((country) => {
        return country.id === id
    })
    if (nation) {
    res.status(200).send(nation)
    } else {
        res.status(400).send("Não encontrado! :u(")
    }
})

app.get('/countries/search', (req: Request, res: Response) => {

    let result: country[] = countries

    try {
        if (req.query.name) {
            result = result.filter(
              country => country.name.includes(req.query.name as string)
            )}
        
            if (req.query.capital) {
            result = result.filter(
              country => country.capital.includes(req.query.capital as string)
            )}
        
            if (req.query.continent) {
            result = result.filter(
              country => country.continent.includes(req.query.continent as string)
            )}
    }catch (error) {
        res.status(400).send(error.message);
     }
     res.status(200).send(result);

})




const server = app.listen(process.env.PORT || 3005, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});