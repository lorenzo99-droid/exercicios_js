class Carro{
    constructor(marca, modelo, cor, quantidadeDePortas){
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
        this.quantidadeDePortas = quantidadeDePortas
        
    }
    info(){
        console.log("Marca..............." + this.marca)
        console.log("Modelo.............." + this.modelo)
        console.log("Cor................." + this.cor)
        console.log("Quantidade de portas" + this.quantidadeDePortas)

    }

}

let c1 = new Carro("Honda", "HRV", "Prata", "4")
let c2 = new Carro("Jeep", "Compass", "Verde", "2")
let c3 = new Carro("Renault", "Kwid life", "Laranja", "4")
let c4 = new Carro("Ford", "Mustang GT V8", "Vermelho", "2")
