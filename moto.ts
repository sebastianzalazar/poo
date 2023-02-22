class Moto extends Concesionaria{
    public kilometraje:number;
    public modelo:number;
    public marca:string;
    public combustible:string;
    public precio:number;
    public service:boolean;

    constructor(paramPersonal:number,paramLugar:string,paramKilometraje:number,paramModelo:number,paramCombustible:string,paramPrecio:number,paramService:boolean,paramMarca:string){
        super(paramPersonal,paramLugar);
        this.kilometraje=paramKilometraje;
        this.modelo=paramModelo;
        this.marca=paramMarca;
        this.combustible=paramCombustible;
        this.precio=paramPrecio;
        this.service=paramService;
    }
    getKilometraje():number{
        return this.kilometraje;
    }
    setKilometraje(paramKilometraje:number):void{
        this.kilometraje=paramKilometraje;
    }
    getModelo():number{
        return this.modelo;
    }
    setModelo(paramModelo:number):void{
        this.modelo=paramModelo;
    }
    getMarca():string{
        return this.marca;
    }
    setMarca(paramMarca:string):void{
        this.marca=paramMarca;
    }
    getCombustilbe():string{
        return this.combustible;
    }
    setCombustible(paramCombustible:string){
         this.combustible=paramCombustible;
    }
    getPrecio():number{
        return this.precio;
    }
    setPrecio(paramPrecio:number){
         this.precio=paramPrecio;
    }
    Service():void{
        if (this.service===true) {
            this.service=false
            
        } else(this.service=true) 
            
        
    }
}
    let honda = new Moto(7,"Tierra del Fuego",28.000,1990,"nafta",250.000,true,"toyota");
    console.table(honda);
        
