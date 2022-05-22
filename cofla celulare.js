class celulares {
    constructor (modelo,color,peso,rdp,rdc,ram){
        this.modelo = modelo;
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
        //this.info =`el ${modelo}, es de color ${color}, pesa aproximadamente ${peso},
        //la resolucion de pantalla es ${rdp}, trae ${rdc} megapixeles y ${ram} de memoria ram`;
    }
    verInfo(){
        document.write(this.info + "<br>")
    }
    presionarBotonEncendido(){
        if (this.encendido == false) {
            alert("El celular esta prendido");
            this.encendido = true;
            
        } else {
            alert("El celular esta apagado");
            this.encendido = false;
        }
    }
    reinicio(){
        if (this.reinicio == false) {
            alert("El celular se va a reinciiar");

        }   else {
            alert("El celular se va apagar");
        }
    }
    tomarFoto (){
        alert(`foto tomada en la resolucion ${this.rdc}`)
    }
    grabarVideo(){
        alert(`grabando video en la resolucion ${this.rdc}`)
    } 
    mobileInfo(){
        return`
        Modelo: <b>${this.modelo}</b></br>
        Color: <b>${this.color }</b></br>
        Peso: <b>${this.peso}</b></br>
        Resolusion de camara: <b>${this.rdc}</b></br>
        Resolusion de pantalla: <b>${this.rdp}</b></br>
        Memoria ram: <b>${this.ram}</b></br>
        `
    }

}
const motorola = new celulares ("Motorola","gris","205 gr","1200","15 mpx","6 gb");
const iphone = new celulares ("Iphone","negro","182 gr","1500","12 mpx","6 gb");
const nokia = new celulares ("Nokia","blanco", "190 gr", "1300"," 10 mpx","4 gb");

//motorola.mobileInfo();
//iphone.mobileInfo();
//nokia.mobileInfo();
//motorola.presionarBotonEncendido();
//motorola.tomarFoto();
//motorola.grabarVideo();
//motorola.reinicio();
//motorola.presionarBotonEncendido();
document.write(`
${motorola.mobileInfo()} </br>
${iphone.mobileInfo()} </br>
${nokia.mobileInfo()}</br>


`
);
