export default class Cl_venta{
    constructor(){
        this.contVM=0;
        this.contVm=0;
        this.acumVt=0;
    }

    procesarvendedor(ven){
        this.acumVt+=ven.getMontoV();
        if(ven.getMontoV()<=100){
            this.contVm++;}
            if(ven.getMontoV()>100){
                this.contVM++;
        }
    }
    cantVm(){
        return this.contVm;
    }
    cantVM(){
        return this.contVM;
    }
    montoT(){
        return this.acumVt;
    }
}
