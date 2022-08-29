
export default class  CheckList {
    #_id: number
    #type: string
    #amount_of_milk_produced: string
    #farmer: object
    #from: object
    #to: object
    #number_of_cows_head: number
    #had_supervision: boolean
    #location: object
    #created_at: string
    #updated_at: string
    #__v: number

    constructor(
      _id: number,
      type: string,
      amount_of_milk_produced: string,
      farmer: object,
      from: object,
      to: object,
      number_of_cows_head: number,
      had_supervision: boolean,
      location: object,
      created_at: string,
      updated_at: string,
      __v: number
    ){
        this.#_id = _id
        this.#type = type
        this.#amount_of_milk_produced = amount_of_milk_produced
        this.#farmer = farmer
        this.#from = from
        this.#to = to
        this.#number_of_cows_head = number_of_cows_head
        this.#had_supervision = had_supervision
        this.#location = location
        this.#created_at = created_at
        this.#updated_at = updated_at
        this.#__v = __v
    }   

    get id(){
        return this.#_id
    }

    get type(){
      return this.#type
    }

    get amount_of_milk_produced(){
      return this.#amount_of_milk_produced
    }

    get farmer(){
      return this.#farmer
    }

    get from(){
      return this.#from
    }

    get to(){
      return this.#to
    }

    get number_of_cows_head(){
      return this.#number_of_cows_head
    }

    get had_supervision(){
      return this.#had_supervision
    }

    get location(){
      return this.#location
    }

    get created_at(){
      return this.#created_at
    }

    get updated_at(){
      return this.#updated_at
    }
}
