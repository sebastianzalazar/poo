class Gerente{
    public nombre:string;
    public apellido:string;
    public dni:number;

    constructor(paramNombre:string,paramApellido:string,paramDNI:number){
        this.nombre=paramNombre;
        this.apellido=paramApellido;
        this.dni=paramDNI;
    }
    getNombre():string{
        return this.nombre;
    }
    setNombre(paramNombre):void{
        this.nombre=paramNombre;

    }
    getApellido():string{
        return this.apellido;
    }
    setApellido(paramApellido):void{
        this.apellido=paramApellido;
    }
    getdni():number{
        return this.dni;
    }
    setdni(paramDNI):void{
        this.dni=paramDNI;
    }
}
    let Gerente1=new Gerente("Raul","Perez",26543213);
      console.log(Gerente1);
