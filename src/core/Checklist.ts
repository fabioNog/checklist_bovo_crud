
export default class  CheckList<ICheckListProps> {
     #id: string
     #nameFarmer: string
     #nameFarm: string
     #cityFarm: string
     #nameSupervisor: string
     #type: string 
     #amountMilk: number
     #headOfCattle: number

    constructor(
        id: string,
        nameFarmer: string,
        nameFarm: string,
        cityFarm: string,
        nameSupervisor: string,
        type: string,
        amountMilk: number,
        headOfCattle: number 
    ){
        this.#id = id
        this.#nameFarmer = nameFarmer
        this.#nameFarm = nameFarm
        this.#cityFarm = cityFarm
        this.#nameSupervisor = nameSupervisor
        this.#type = type
        this.#amountMilk = amountMilk
        this.#headOfCattle = headOfCattle
    }

    static empty(){
        return new CheckList('','','','','','',0,0)
    }

    get id(){
        return this.#id
    }

    get nameFarmer(){
        return this.#nameFarmer
    }

    get nameFarm(){
        return this.#nameFarm
    }

    get cityFarm (){
        return this.#cityFarm 
    }

    get nameSupervisor(){
        return this.#nameSupervisor
    }

    get type (){
        return this.#type 
    }

    get amountMilk(){
        return this.#amountMilk
    }

    get headOfCattle(){
        return this.#headOfCattle
    }
}