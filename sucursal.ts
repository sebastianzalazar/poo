class Sucursal{
    public horarios:number;
    public direccion:string;
    public gerente:Gerente[];

    constructor(paramhorarios:number,paramdireccion:string,paramgerente:Gerente[]){
        this.horarios=paramhorarios;
        this.direccion=paramdireccion;
        this.gerente=paramgerente;
    }
    gethorarios():number{
        return this.horarios;
    }
    sethorarios(paramhorarios):void{
        this.horarios=paramhorarios;
    }
    getdireccion():string{
        return this.direccion;
    }
    setdireccion(paramdireccion):void{
        this.direccion=paramdireccion;
    }


    }
    

