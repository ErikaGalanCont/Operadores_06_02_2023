let a = confirm("Variable A\n\t\tSelecciona Aceptar si deseas el boleano True\n\t\tSelecciona Cancelar si deseas el booleano False")
let b = confirm("Variable B\n\t\tSelecciona Aceptar si deseas el boleano True\n\t\tSelecciona Cancelar si deseas el booleano False")

let cuerpo = document.querySelector("#myAND");
cuerpo.insertAdjacentHTML("beforeend", `<tr>
                                            <td>${a}</td>
                                            <td>${b}</td>
                                            <td>${a || b}</td>
                                        </tr>`);