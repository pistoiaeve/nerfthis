//Constantes
let precioRemeraUnidadName = 3000
let precioRemeraUnidadDVA = 2500
let contador = 1
//Funciones Constructoras
function ModeloRemera (color, talle, cantidad){
    this.color = color;
    this.talle = talle;
    this.cantidad = cantidad;
}
const modelo1 = new ModeloRemera ("ROJO","S", 3);
const modelo2 = new ModeloRemera ("NEGRO","S", 2);
const modelo3 = new ModeloRemera ("GRIS", "L", 5);
const modelo4 = new ModeloRemera ("VIOLETA", "M", 7);
const modelo5 = new ModeloRemera ("AZUL", "L", 4);

function ModeloDva (color, talle, cantidad){
    this.color = color;
    this.talle = talle; 
    this.cantidad = cantidad;
}
const modelo6 = new ModeloDva ("AMARILLO", "L", 6)
const modelo7 = new ModeloDva ("ROJO", "M", 2)
const modelo8 = new ModeloDva ("NEGRO", "M", 3)
//Array
const arrayModelos = [modelo1, modelo2, modelo3, modelo4, modelo5]
const arrayModelosDva = [modelo6, modelo7, modelo8]
//Bienvenida
alert(`BIENVENIDO! Simula una compra en nuestra pagina web NERF THIS: Si sos nuevo utiliza el código WELCOME para
obtener un 10% OFF`)
//Función Array 
function mostrarCatalogo1(array){
    alert(`El catálogo disponible del modelo elegido es:`)
   array.forEach((ModeloRemera) => {alert(`Modelo ${contador++}: Color: ${ModeloRemera.color}, Talle: ${ModeloRemera.talle}`)    
    });  
    contador= 1
}
//Función Descuento
function descuento(precio){
    let codigoDescuento = prompt(`Ingrese su código de descuento`)
    if(codigoDescuento.toUpperCase() === "WELCOME"){
        let precioRemeraFinal = precio - (precio*0.1)
       alert(`El total de su compra será de ${precioRemeraFinal}`)
    }  
    else{
        alert(`El código introducido es incorrecto`)
    }
    return precio
}
//Catálogo full
let catalogoFull = arrayModelos.concat(arrayModelosDva)
//Funciones catálogo de compra
function lookColor(){
    let colorSeleccionado = prompt(`Ingrese el color que quiere para su look:`)
    const colorLook = catalogoFull.filter((modelo)=> modelo.color.includes
    (`${colorSeleccionado.toUpperCase()}`))
    if (colorLook == ""){
        alert(`Ese color no se encuentra en stock`)
    }
    else{
            alert(`Los talles disponibles de color 
            ${colorSeleccionado.toLocaleUpperCase()} 
            son :`) 
            colorLook.forEach((colorLook) => {alert(`${colorLook.talle}`)});
    }
}
//Función map array
function mapArray(){
    let arrayColor = catalogoFull.map (catalogoFull=> catalogoFull.color)
    alert(`Los colores disponibles en todos los modelos son:`) 
            arrayColor.forEach((arrayColor) => {alert(`${arrayColor}`)});
}
//Función catálogo
function remerasModelo(){
    let modeloRemera = prompt(`Ingrese el modelo: 
    1.Name of the game oversized tee $3000
    2.Definitive DVA $2500`)
    switch(modeloRemera){
        case "1":
            mostrarCatalogo1(arrayModelos)
            let modeloElegido = parseInt(prompt(`Seleccione el número del modelo elegido:`))
            if (modeloElegido == 1){  
                let cantidadRemeraModeloRojo = parseInt(prompt(`Usted seleccionó el modelo de NOTG oversized 
                tee en color ${modelo1.color} y talle ${modelo1.talle}, 
               ¿Qué cantidad desea comprar?:`))
            if (cantidadRemeraModeloRojo > modelo1.cantidad){
                alert(`No hay esa cantidad de remeras en stock, seleccione menor cantidad.`)
            }
            else{
                let precioRemeraModeloRojo = precioRemeraUnidadName * cantidadRemeraModeloRojo
                let respuestaDescuentoRojo = prompt(`El precio final es de: ${precioRemeraModeloRojo} , 
                ¿Desea utilizar algún código de descuento?(Si o no):`)
                if(respuestaDescuento.toLowerCase() == "si"){
                    descuento(precioRemeraModeloRojo)

                }
                else if (respuestaDescuento.toLocaleLowerCase() == "no"){
                alert(`El precio final es de: ${precioRemeraModeloRojo}`)
                }
                else{alert("Opcion no válida, vuelva a intentar")}}

            }
            else if (modeloElegido == 2){
                let cantidadRemeraModeloNegro = parseInt(prompt(`Usted seleccionó el modelo de
                      NOTG oversized tee en color ${modelo2.color} y talle ${modelo2.talle}, 
                     ¿Qué cantidad desea comprar?:`))
                         if (cantidadRemeraModeloNegro > modelo2.cantidad){
                             alert(`No hay esa cantidad de remeras en stock, seleccione menor cantidad.`)
                         }
                         else{
                             let precioRemeraModeloNegro = precioRemeraUnidadName * cantidadRemeraModeloNegro
                             let respuestaDescuentoNegro = prompt(`El precio final es de: ${precioRemeraModeloNegro} , 
                             ¿Desea utilizar algún código de descuento?(Si o no):`)
                             if(respuestaDescuentoNegro.toLowerCase() == "si"){
                                 descuento(precioRemeraModeloNegro)
         
                             }
                             else if (respuestaDescuentoNegro.toLocaleLowerCase() == "no"){
                             alert(`El precio final es de: ${precioRemeraModeloNegro}`)
                             }
                    else{
                        alert("Opcion no válida, vuelva a intentar")
                    }
                }
            }
            else if (modeloElegido == 3){
                let cantidadRemeraModeloGris = parseInt(prompt(`Usted seleccionó el modelo de
                      NOTG oversized tee en color ${modelo3.color} y talle ${modelo3.talle}, 
                     ¿Qué cantidad desea comprar?:`))
                         if (cantidadRemeraModeloGris > modelo3.cantidad){
                             alert(`No hay esa cantidad de remeras en stock, seleccione menor cantidad.`)
                         }
                         else{
                             let precioRemeraModeloGris = precioRemeraUnidadName * cantidadRemeraModeloGris
                             let respuestaDescuentoGris = prompt(`El precio final es de: ${precioRemeraModeloGris} , 
                             ¿Desea utilizar algún código de descuento?(Si o no):`)
                             if(respuestaDescuentoGris.toLowerCase() == "si"){
                                 descuento(precioRemeraModeloGris)
         
                             }
                             else if (respuestaDescuentoGris.toLocaleLowerCase() == "no"){
                             alert(`El precio final es de: ${precioRemeraModeloGris}`)
                             }
                    else{
                        alert("Opcion no válida, vuelva a intentar")
                    }
                }
            
            }
            else if (modeloElegido == 4){
                let cantidadRemeraModeloVioleta = parseInt(prompt(`Usted seleccionó el modelo de
                      NOTG oversized tee en color ${modelo4.color} y talle ${modelo4.talle}, 
                     ¿Qué cantidad desea comprar?:`))
                         if (cantidadRemeraModeloVioleta > modelo4.cantidad){
                             alert(`No hay esa cantidad de remeras en stock, seleccione menor cantidad.`)
                         }
                         else{
                             let precioRemeraModeloVioleta = precioRemeraUnidadName * cantidadRemeraModeloVioleta
                             let respuestaDescuentoVioleta = prompt(`El precio final es de: ${precioRemeraModeloVioleta} , 
                             ¿Desea utilizar algún código de descuento?(Si o no):`)
                             if(respuestaDescuentoVioleta.toLowerCase() == "si"){
                                 descuento(precioRemeraModeloVioleta)
         
                             }
                             else if (respuestaDescuentoVioleta.toLocaleLowerCase() == "no"){
                             alert(`El precio final es de: ${precioRemeraModeloVioleta}`)
                             }
                    else{
                        alert("Opcion no válida, vuelva a intentar")
                    }
                }

            }
            else if (modeloElegido == 5){
                let cantidadRemeraModeloAzul = parseInt(prompt(`Usted seleccionó el modelo de
                NOTG oversized tee en color ${modelo5.color} y talle ${modelo5.talle}, 
               ¿Qué cantidad desea comprar?:`))
                   if (cantidadRemeraModeloAzul > modelo5.cantidad){
                       alert(`No hay esa cantidad de remeras en stock, seleccione menor cantidad.`)
                   }
                   else{
                       let precioRemeraModeloAzul = precioRemeraUnidadName * cantidadRemeraModeloAzul
                       let respuestaDescuentoAzul = prompt(`El precio final es de: ${precioRemeraModeloAzul} , 
                       ¿Desea utilizar algún código de descuento?(Si o no):`)
                       if(respuestaDescuentoAzul.toLowerCase() == "si"){
                           descuento(precioRemeraModeloAzul)
   
                       }
                       else if (respuestaDescuentoAzul.toLocaleLowerCase() == "no"){
                       alert(`El precio final es de: ${precioRemeraModeloAzul}`)
                       }
              else{
                  alert("Opcion no válida, vuelva a intentar")
              }
          }
            }    
            else{ 
                alert("El modelo seleccionado no existe, vuelva a intentar")}
            break
        case "2":
            mostrarCatalogo1(arrayModelosDva)
            let modeloElegidoDva = parseInt(prompt(`Seleccione el número del modelo elegido:`))
            if (modeloElegidoDva == 1){  
                let cantidadRemeraModelo6 = parseInt(prompt(`Usted seleccionó el modelo de DefinitiveDVA
                 en color ${modelo6.color} y talle ${modelo6.talle}, 
               ¿Qué cantidad desea comprar?:`))
            if (cantidadRemeraModelo6 > modelo6.cantidad){
                alert(`No hay esa cantidad de remeras en stock, seleccione menor cantidad.`)
            }
            else{
                let precioRemeraModelo6 = precioRemeraUnidadDVA * cantidadRemeraModelo6
                let respuestaDescuento6 = prompt(`El precio final es de: ${precioRemeraModelo6} , 
                ¿Desea utilizar algún código de descuento?(Si o no):`)
                if(respuestaDescuento6.toLowerCase() == "si"){
                    descuento(precioRemeraModelo6)

                }
                else if (respuestaDescuento6.toLocaleLowerCase() == "no"){
                alert(`El precio final es de: ${precioRemeraModelo6}`)
                }
                else{alert("Opcion no válida, vuelva a intentar")}}

            }
            else if (modeloElegidoDva == 2){
                let cantidadRemeraModelo7 = parseInt(prompt(`Usted seleccionó el modelo de
                      DefinitiveDVA en color ${modelo7.color} y talle ${modelo7.talle}, 
                     ¿Qué cantidad desea comprar?:`))
                         if (cantidadRemeraModelo7 > modelo7.cantidad){
                             alert(`No hay esa cantidad de remeras en stock, seleccione menor cantidad.`)
                         }
                         else{
                             let precioRemeraModelo7 = precioRemeraUnidadDVA * cantidadRemeraModelo7
                             let respuestaDescuento7 = prompt(`El precio final es de: ${precioRemeraModelo7} , 
                             ¿Desea utilizar algún código de descuento?(Si o no):`)
                             if(respuestaDescuento7.toLowerCase() == "si"){
                                 descuento(precioRemeraModelo7)
         
                             }
                             else if (respuestaDescuento7.toLocaleLowerCase() == "no"){
                             alert(`El precio final es de: ${precioRemeraModelo7}`)
                             }
                    else{
                        alert("Opcion no válida, vuelva a intentar")
                    }
                }
            }
            else if (modeloElegidoDva == 3){
                let cantidadRemeraModelo8 = parseInt(prompt(`Usted seleccionó el modelo de
                      DefinitiveDVA en color ${modelo8.color} y talle ${modelo8.talle}, 
                     ¿Qué cantidad desea comprar?:`))
                         if (cantidadRemeraModelo8 > modelo8.cantidad){
                             alert(`No hay esa cantidad de remeras en stock, seleccione menor cantidad.`)
                         }
                         else{
                             let precioRemeraModelo8 = precioRemeraUnidadDVA * cantidadRemeraModelo8
                             let respuestaDescuento8 = prompt(`El precio final es de: ${precioRemeraModelo8} , 
                             ¿Desea utilizar algún código de descuento?(Si o no):`)
                             if(respuestaDescuento8.toLowerCase() == "si"){
                                 descuento(precioRemeraModelo8)
         
                             }
                             else if (respuestaDescuento8.toLocaleLowerCase() == "no"){
                             alert(`El precio final es de: ${precioRemeraModelo8}`)
                             }
                    else{
                        alert("Opcion no válida, vuelva a intentar")
                    }
                }
            
            }    
            else{ 
                alert("El modelo seleccionado no existe, vuelva a intentar")}
       
            break
         default:
            alert("Opcion no válida, vuelva a intentar")
            break
    }
}

//MENU
let salirMenu = true
do{
    let opcionMenu = prompt(`Ingrese opción indicada:
    1- Catálogo Remeras
    2- ¡Buscá los talles disponibles en el color que desees!
    3- ¡Descubre todos los colores disponibles!
    4- Salir del menú`)
    switch(opcionMenu){
        case "1":
            remerasModelo()
            break
        case "2": 
            lookColor()
            break
        case "3":
            mapArray()
            break
        case "4":
            salirMenu = false
            break
        default:
        alert("Opcion no válida, vuelva a intentar")
        break
    }
}while(salirMenu)