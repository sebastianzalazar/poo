class Auto extends Concesionaria{
    private km: number;
    private combustible: string;
    private modelo: number;
    private marca:string;
    private precio: number;
    private service: boolean;

    constructor(paramPersonal:number,paramLugar:string,paramKm:number,paramCombustible:string,paramModelo:number,paramMarca:string,paramPrecio:number,paramService:boolean){
        super(paramPersonal,paramLugar);
        this.km = paramKm;
        this.combustible = paramCombustible;
        this.modelo = paramModelo;
        this.marca = paramMarca;
        this.precio = paramPrecio;
        this.service = paramService;    
    }

    getKm():number{
        return this.km;
    }
    setKm(paramKm:number):void{
        this.km = paramKm;
    }
    getCombustible():string{
        return this.combustible
    }
    
    public setCombustible(paramCombustible : string) {
        this.combustible = paramCombustible;
    }
    
    getModelo():number {
        return this.modelo;
    }
    
    public setModelo(paramModelo : number):void {
        this.modelo = paramModelo;
    }
    
    public getMarca() : string {
        return this.marca;
    }
    
    public setMarca(paramMarca : string):void {
        this.marca = paramMarca;
    }
    
    public getPrecio() : number {
        return this.precio;
    }
    
    public setPrecio(paramPrecio : number):void {
        this.precio = paramPrecio;
    }
    
 Service() : void {
        if (this.service===true) {
            this.service=false;
        } else {this.service=true};
    }
}
    let auto=new Auto(7,"Tierra del Fuego",78000,"nafta",1998,"toyota",250.000,true);
       console.log(auto)
    
    
    
    
    
    
    
    