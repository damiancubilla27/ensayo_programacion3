function $(id){return document.getElementById(id)};
async function Consulta(){
    let urlBase = "https://api.scryfall.com/cards/named?fuzzy=";
    let urlConsulta = urlBase + $("txt_carta").value;
    try{
        const response = await fetch(urlConsulta, {method: 'GET',});
        if(response.ok){
            try{
                const contenido = await response.json();
                $("img_carta").setAttribute("src", contenido.image_uris.normal);
            }catch(ex){
                alert("No se pudo convertir");
            }
        }else{
            alert("Codigo Respuesta: "+ response.status);
        }  
    }catch(ex){
        alert("Fallo la consulta");
    }
}

$("btn_buscar").addEventListener("click", Consulta);

/*
const response = await fetch('http://tuUrl.com', {
method: 'POST', // *GET, POST, PUT, DELETE, etc.
mode: 'cors', // no-cors, *cors, same-origin
cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
credentials: 'same-origin', // include, *same-origin, omit
headers: {
'Content-Type': 'application/json'
// 'Content-Type': 'application/x-www-form-urlencoded',
},
redirect: 'follow', // manual, *follow, error
referrerPolicy: 'no-referrer',
// no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin,
//same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
body: JSON.stringify(data) // Tiene que coincidir con el Content-Type
});
*/

//---------------------- Ejemplo con POST

async function InsertarPersona() {
    let urlBase = "https://examenesutn.vercel.app/api/PersonasFutbolistasProfesionales";
    let persona = {nombre: "horacio", apellido:"serrano", edad: 22, titulo: "tec sup sistemas", facultad:"UTN", añoGraduacion:2018};
    const response = await fetch(urlBase, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:(JSON.stringify(persona)) // Tiene que coincidir con el Content-Type
    });
        console.log(persona);
        console.log("Codigo: ", response.status);
        let texto = await response.text();
        console.log(texto);
        let id = JSON.parse(texto);
        persona.id = id.id;
        console.log(persona);
        
}

$("btn_persona").addEventListener("click", InsertarPersona);