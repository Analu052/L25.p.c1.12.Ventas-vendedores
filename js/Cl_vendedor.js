export default class Cl_vendedor {
    constructor(n,mV){
        this.nom=n;
        this.montoV=mV;
    }

    setNom(n){
        this.nom=n;
    }
    getNom(){
        return this.nom;
    }

    setMontoV(mV){
        this.montoV=mV;
    }
    getMontoV(){
        return this.montoV;
    }
}
        