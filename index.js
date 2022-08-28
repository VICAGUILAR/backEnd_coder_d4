const fs = require ('fs')


class Contenedor {
    constructor (name){
        this.name = name
    }
     
    async Save (information){
        let id
        try {
            let contents = await fs.promises.readFile(`./${this.name}`, 'utf-8')
            let contentsJson = JSON.parse(contents)
            let ultimoIndice= contentsJson.length -1
            let ultimoId = contentsJson [ultimoIndice].id
            information.id = ultimoId +1
            let id = information.id
            contentsJson.push(information)
            await fs.promises.writeFile(`./${this.name}`, JSON.stringify(contentsJson))
            return id


            
        } 
        catch (error) {
            console.log(error);
        }

        
    }

    async GetById(id){
        try {
           let contents = await fs.promises.readFile(`./${this.name}`, 'utf-8')
           let contentsJson = JSON.parse(contents)
           let contExtraido
           contentsJson.forEach(element => {
                if(element.id == id) {
                    contExtraido = element
                }
           });
           return contExtraido

            
        } 
        catch (error) {
            console.log(error)
        }

    }

    async GetAll(){
       try {
        let contents = await fs.promises.readFile(`./${this.name}`, 'utf-8')
        let contentsJson = JSON.parse(contents)

        return contentsJson
       } 
       catch (error) {
        
       }
    }

    DeleteById(){
        
    }

    DeleteAll(){

    }
}

let contenedor = new Contenedor("productos.json")

let informationNueva = {
        "id": 4,
        "title": "Melón",
        "price": 45
}

/*contenedor.Save(informationNueva).then(respuesta => {
    console.log(respuesta)
})*/

/*contenedor.GetById(3).then(result => {
    console.log(result)
})*/


contenedor.GetAll().then(result => {
    console.log(result)
})