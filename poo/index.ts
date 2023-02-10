class Concesionaria{
    public auto: string;
    private moto: string;
    protected camioneta:string;

    constructor(paramAuto:string,paramMoto:string,paramCamioneta:string){
         this.auto = paramAuto;
         this.moto = paramMoto;
         this.camioneta = paramCamioneta;
    }
    getAuto():string{
        return this.auto;
    }
    setAuto(paramAuto:string):void{
         this.auto = paramAuto;
    }
    getMoto():string{
        return this.moto;
    }
    setMoto(paramMoto:string):void{
        this.moto=paramMoto;
    }
    getCamioneta():string{
        return this.camioneta;
    }
    setCamioneta(paramCamioneta:string):void{
        this.camioneta = paramCamioneta;
    }
}
let concesionaria = new Concesionaria("ford","honda","hilux");
console.table(concesionaria);