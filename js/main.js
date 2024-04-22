console.log("Para iniciar la aplicación primero debes registrate")
let nombre = prompt("Ingresa tu nombre: ")
let regusuario = prompt("Ingresa el nombre de tu cuenta: ")
let regcontraseña = prompt("Ingresa la contraseña: ")
console.log("Usted se ha registrado exitosamente")
let logusuario = prompt("Ingrese su usuario: ")
let logcontraseña = prompt(" Ingrese su contraseña: ")
while (logusuario !== regusuario || logcontraseña !== regcontraseña){
    alert("El usuario o contraseña ingresado son incorrectos")
    logusuario = prompt("Ingrese su usuario: ")
    logcontraseña = prompt(" Ingrese su contraseña: ")
}
alert ("¡Bienvenido " +nombre+ "!")
const jugadoresdisponibles = [  "Juancru07", "Paqnavarro", "Tolitoaguirre", "Titoillarra", "Atapia", "Reyarturo", "AleGalan", "JuanLebron12", "DiNenno"]
console.log("Los jugadores disponibles son: "+jugadoresdisponibles)
let confilista = confirm("¿Desea unirse a la lista de jugadores disponibles?")   
if (confilista){
    jugadoresdisponibles.push (+logusuario)
    alert("¡Listo! Ya estas en la lista de jugadores disponibles")
} else{
    alert("¡Entendido! Si cambias de opinion te esperamos!") 
}
function crearpartido() {
    const nombresAleatorios = [];
    while (nombresAleatorios.length < 3) {
        let indiceazar = Math.floor(Math.random() * jugadoresdisponibles.length);
        let nombreazar = jugadoresdisponibles[indiceazar];
        if (nombreazar !== logusuario && !nombresAleatorios.includes(nombreazar)) {
            nombresAleatorios.push(nombreazar);
        }
    }
    jugseleccionados= [logusuario, ...nombresAleatorios]
    let equipo1= jugseleccionados.slice(0, 2)
    let equipo2= jugseleccionados.slice(2, 4)
    console.log("El equipo 1 esta formado por: "+equipo1.join(", ") + ", y el equipo 2, lo conforman: "+ equipo2.join(", ") +".")  
    alert("¡Buen partido!")
}
let confipartido = confirm ("¿Desea crear un partido?")
if (confipartido){
    crearpartido()
} else {
    alert("¡Entendido! Si cambias de opinion te esperamos!") 
}







    

