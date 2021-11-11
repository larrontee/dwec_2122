class Carta {
    constructor(palo,valor){
        if(palo<1 || palo>4 || valor <1 || valor > 10){
            return null;
        }else{
            this._palo=palo;
            this._valor=valor;
        }
    }

}