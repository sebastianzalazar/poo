class Concesionaria{
    public Personal:number;
    public Lugar:string;
    constructor(paramPersonal:number,paramLugar:string){
         this.Personal=paramPersonal;
         this.Lugar=paramLugar;
    } 
    getPersonal():number{
        return this.Personal;
    }
    setPersonal(paramPersonal:number){
        this.Personal=paramPersonal;
    }
    getLugar():string{
        return this.Lugar;
    }
    setLugar(paramLugar:string):void{
        this.Lugar=paramLugar;
    }
}

