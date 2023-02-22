class Camioneta extends Concesionaria{
    public Kilometraje:number;
    public Modelo:number;
    public Marca:string;
    public Combustible:string;
    public Precio:number;
    public service:boolean;

    constructor(paramPersonal:number,paramLugar:string,paramKilometraje:number,paramModelo:number,paramMarca:string,paramCombustible:string,paramPrecio:number,paramService:boolean){
        super(paramPersonal,paramLugar);
        this.Kilometraje=paramKilometraje;
        this.Modelo=paramModelo;
        this.Marca=paramMarca;
        this.Combustible=paramCombustible;
        this.Precio=paramPrecio;
        this.service=paramService;
    }
    getKilometraje():number{
        return this.Kilometraje;
    }
    setKilometraje(paramKilometraje:number):void{
        this.Kilometraje=paramKilometraje;
    }
    getModelo():number{
        return this.Modelo;
    }
    setModelo(paramModelo:number):void{
        this.Modelo=paramModelo;
    }
    getMarca():string{
        return this.Marca;
    }
    setMarca(paramMarca:string):void{
        this.Marca=paramMarca;
    }
    getCombustilbe():string{
        return this.Combustible;
    }
    setCombustible(paramCombustible:string){
         this.Combustible=paramCombustible;
    }
    getPrecio():number{
        return this.Precio;
    }
    setPrecio(paramPrecio:number){
         this.Precio=paramPrecio;
    }
    Service():void{
        if (this.service===true) {
            this.service=false
            
        } else(this.service=true) 
            
        
    }
}
     let toyota = new Camioneta(7,"Tierra del Fuego",14.0000,2019,"toyota","diesel",350.000,false,)
       console.log(toyota);