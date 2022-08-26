
export default class  CheckList {
     #checklist: Array<object>

    constructor(
        checklist: Array<object>
    ){
        this.#checklist = checklist
    }

    static empty(){
        return new CheckList([])
    }

   

    get checklist(){
        return this.#checklist
    }
}