///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Importamos librerias
import './App.css';
import * as Tone from "tone"
import * as react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faWrench, faXmark  } from '@fortawesome/free-solid-svg-icons'

import { claveAPI } from './claves';

import {} from "@fortawesome/free-regular-svg-icons"


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Declaramos constantes, declaramos e inicializamos variables


// Variables Globales
let editar = true

let nota1 
let nota2 
let nota3 
let nota4
let nota5
let nota6



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Código principal


function App() {
// Variables de estado, cambiar cualquiera de estas recarga el componente
const [ready,setReady] = react.useState(false)
const [orientation, setOrientation] = react.useState()


let fuente1 = react.useRef(null)
let fuente2 = react.useRef(null)
let fuente3 = react.useRef(null)
let fuente4 = react.useRef(null)
let fuente5 = react.useRef(null)
let fuente6 = react.useRef(null)

let filtro1 = react.useRef(null)
let filtro2 = react.useRef(null)
let filtro3 = react.useRef(null)
let filtro4 = react.useRef(null)
let filtro5 = react.useRef(null)
let filtro6 = react.useRef(null)

let bitcrusher1 = react.useRef(null)
let bitcrusher2 = react.useRef(null)
let bitcrusher3 = react.useRef(null)
let bitcrusher4 = react.useRef(null)
let bitcrusher5 = react.useRef(null)
let bitcrusher6 = react.useRef(null)

let reverb1 = react.useRef(null)
let reverb2 = react.useRef(null)
let reverb3 = react.useRef(null)
let reverb4 = react.useRef(null)
let reverb5 = react.useRef(null)
let reverb6 = react.useRef(null)

let paramX1 = react.useRef(null)
let paramX2 = react.useRef(null)
let paramX3 = react.useRef(null)
let paramX4 = react.useRef(null)
let paramX5 = react.useRef(null)
let paramX6 = react.useRef(null)

let paramY1 = react.useRef(null)
let paramY2 = react.useRef(null)
let paramY3 = react.useRef(null)
let paramY4 = react.useRef(null)
let paramY5 = react.useRef(null)
let paramY6 = react.useRef(null)

let numeroXY = react.useRef(null)



function getOrientation(){
    let orientation = window.innerWidth > window.innerHeight ? "Landscape" : "Portrait";
    setOrientation(orientation)
}

window.onresize = function(){ getOrientation(); }

react.useEffect(()=> {

    bitcrusher1.current = new Tone.BitCrusher({wet: 0})
    bitcrusher2.current = new Tone.BitCrusher({wet: 0})
    bitcrusher3.current = new Tone.BitCrusher({wet: 0})
    bitcrusher4.current = new Tone.BitCrusher({wet: 0})
    bitcrusher5.current = new Tone.BitCrusher({wet: 0})
    bitcrusher6.current = new Tone.BitCrusher({wet: 0})

    reverb1.current = new Tone.Reverb({wet: 0})
    reverb2.current = new Tone.Reverb({wet: 0})
    reverb3.current = new Tone.Reverb({wet: 0})
    reverb4.current = new Tone.Reverb({wet: 0})
    reverb5.current = new Tone.Reverb({wet: 0})
    reverb6.current = new Tone.Reverb({wet: 0})

    filtro1.current = new Tone.BiquadFilter({
        frequency: 0,
        type: "highpass"
    })
    filtro2.current = new Tone.BiquadFilter({
        frequency: 0,
        type: "highpass"
    })
    filtro3.current = new Tone.BiquadFilter({
        frequency: 0,
        type: "highpass"
    })
    filtro4.current = new Tone.BiquadFilter({
        frequency: 0,
        type: "highpass"
    })
    filtro5.current = new Tone.BiquadFilter({
        frequency: 0,
        type: "highpass"
    })
    filtro6.current = new Tone.BiquadFilter({
        frequency: 0,
        type: "highpass"
    })

    fuente1.current = new Tone.FMSynth({volume: -6}).toDestination()
    fuente2.current = new Tone.FMSynth({volume: -6}).toDestination()
    fuente3.current = new Tone.FMSynth({volume: -6}).toDestination()
    fuente4.current = new Tone.FMSynth({volume: -6}).toDestination()
    fuente5.current = new Tone.FMSynth({volume: -6}).toDestination()
    fuente6.current = new Tone.FMSynth({volume: -6}).toDestination()

    paramX1.current = ""
    paramX2.current = ""
    paramX3.current = ""
    paramX4.current = ""
    paramX5.current = ""
    paramX6.current = ""

    paramY1.current = ""
    paramY2.current = ""
    paramY3.current = ""
    paramY4.current = ""
    paramY5.current = ""
    paramY6.current = ""

    getOrientation()
}, [])


const [xy, setXY] = react.useState(false)
const [xy2, setXY2] = react.useState(false)
const [menu, setMenu] = react.useState(false)
const [numeroMenu, setNumeroMenu] = react.useState()

// función para iniciar el audio. El audio web necesita el permiso del usuario para poder inicializarse.

async function iniciar() {
    await Tone.start()
    console.log("ready")
    setReady(true)
}



// Estado inicial, al clickar en el botón se llama la función que inicia el audio y se renderiza la interfaz
if (orientation === "Portrait") {
    return(<h1 id="apaisado"> Pon el teléfono en apaisado</h1>)
} else {



if (!ready) {
    return(
    <div id="divInicio">
        <button id="botonInicio" onClick={iniciar}>Iniciar</button>
    </div>
)} else{

    // Interfaz principal, aparece si no se está editando un menu
if (xy) {

    function cerrarMenuXY() {
        setXY(false)
    }

    function abrirPad1 () {
        numeroXY.current = 1
        setXY2(true)
    }

    function abrirPad2 () {
        numeroXY.current = 2
        setXY2(true)
    }

    function abrirPad3 () {
        numeroXY.current = 3
        setXY2(true)
    }

    function abrirPad4 () {
        numeroXY.current = 4
        setXY2(true)
    }

    function abrirPad5 () {
        numeroXY.current = 5
        setXY2(true)
    }

    function abrirPad6 () {
        numeroXY.current = 6
        setXY2(true)
    }

    if (!xy2) {
    return(
        
        <div id = "menuXY">
            <div id= "headerXY">
                <h1 id= "infoMenuXY">Selecciona un pad</h1>
                <button id = "botonCerrarXY" onClick={cerrarMenuXY}>Aceptar</button>

            </div>
            <div id = "menuXYRow1">
                <button id= "PadUno" onClick={abrirPad1}></button>
                <button id = "PadDos" onClick={abrirPad2}></button>
                <button id = "PadTres" onClick={abrirPad3}></button>
            </div>
            <div id = "menuXYRow2">
                <button id = "PadCuatro" onClick={abrirPad4}></button>
                <button id = "PadCinco" onClick={abrirPad5}></button>
                <button id = "PadSeis" onClick={abrirPad6}></button>
            </div>
        </div>
    )} else {
        return (<MenuXY setXY2 = {setXY2} numeroXY = {numeroXY} paramX1 = {paramX1} paramX2 = {paramX2} paramX3 = {paramX3}  paramX4 = {paramX4}  
            paramX5 = {paramX5} paramX6 = {paramX6}  paramY1 = {paramY1} paramY2 = {paramY2} paramY3 = {paramY3}
            paramY4 = {paramY4} paramY5 = {paramY5} paramY6 = {paramY6}/>)
    }
/*
)*/
} else {
if (!menu) {
return (
<div>
    <div id="header">
        <HelloWorld/>
        <div id = "botones">
            <BotonXY setXY = {setXY} />
            <BotonModo />
        </div>
    </div>
    <div id = "pads">
        <div id= "row1">
            <Pad id="PadUno" setMenu = {setMenu} setNumeroMenu = {setNumeroMenu} numeroPad = {1} fuente = {fuente1} nota = {nota1} 
            paramX = {paramX1} paramY = {paramY1} filtro = {filtro1} bitcrusher = {bitcrusher1} reverb = {reverb1}/> 
            <Pad id="PadDos" setMenu = {setMenu} setNumeroMenu = {setNumeroMenu} numeroPad = {2} fuente = {fuente2} nota = {nota2}
            paramX = {paramX2} paramY = {paramY2} filtro = {filtro2} bitcrusher = {bitcrusher2} reverb = {reverb2}/>
            <Pad id="PadTres" setMenu = {setMenu} setNumeroMenu = {setNumeroMenu} numeroPad = {3} fuente = {fuente3} nota = {nota3}
            paramX = {paramX3} paramY = {paramY3} filtro = {filtro3} bitcrusher = {bitcrusher3} reverb = {reverb3}/>
        </div>

        <div id = "row2">
            <Pad id="PadCuatro" setMenu = {setMenu} setNumeroMenu = {setNumeroMenu} numeroPad = {4} fuente = {fuente4} nota = {nota4}
            paramX = {paramX4} paramY = {paramY4} filtro = {filtro4} bitcrusher = {bitcrusher4} reverb = {reverb4}/>
            <Pad id="PadCinco" setMenu = {setMenu} setNumeroMenu = {setNumeroMenu} numeroPad = {5} fuente = {fuente5} nota = {nota5}
            paramX = {paramX5} paramY = {paramY5} filtro = {filtro5} bitcrusher = {bitcrusher5} reverb = {reverb5} />
            <Pad id="PadSeis" setMenu = {setMenu} setNumeroMenu = {setNumeroMenu} numeroPad = {6} fuente = {fuente6} nota = {nota6}
            paramX = {paramX6} paramY = {paramY6} filtro = {filtro6} bitcrusher = {bitcrusher6} reverb = {reverb6} />
        </div>   
    </div>
</div>

)} else {
    return(<Menu numeroMenu = {numeroMenu} setMenu = {setMenu}  fuente1 = {fuente1} fuente2 = {fuente2} fuente3 = {fuente3}
    fuente4 = {fuente4} fuente5 = {fuente5} fuente6 = {fuente6} filtro1 = {filtro1} filtro2 = {filtro2} filtro3 = {filtro3} 
    filtro4 = {filtro4} filtro5 = {filtro5} filtro6 = {filtro6} bitcrusher1 = {bitcrusher1}  bitcrusher2 = {bitcrusher2} 
    bitcrusher3 = {bitcrusher3}  bitcrusher4 = {bitcrusher4}  bitcrusher5 = {bitcrusher5}  bitcrusher6 = {bitcrusher6} 
    reverb1 = {reverb1} reverb2 = {reverb2} reverb3 = {reverb3} reverb4 = {reverb4} reverb5 = {reverb5} reverb6 = {reverb6}/>)
}
}}}}

export default App;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funciones de ayuda



function convertRange( value, r1, r2 ) { 
    return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}

// título de la página
function HelloWorld() {
    return (<h1 id= "titulo" className='prevent-select'>6P</h1>)
}


// Componente para cada Pad
function Pad(props){
   
    let canvas
    let rect

    let rangox 
    let rangoy
    let harmSeteada
    let modISeteado

    if (props.fuente.current.harmonicity !== undefined) {
        harmSeteada = props.fuente.current.harmonicity.value
        modISeteado = props.fuente.current.modulationIndex.value
    }
    
    let cutoffSeteado = props.filtro.current.frequency.value
    let decaySeteado = props.reverb.current.decay
    let bitsSeteado = props.bitcrusher.current.bits.value
    let wetSeteado = props.reverb.current.wet.value



    // Función para detectar la posición del toque
    function getTouchPos(event) {
        let x = event.touches[0].clientX - rect.left
        if (x > rect.width) {
            x = rect.width
        }
        if (x < 0) {
            x = 0
        }
        let y = Math.abs(event.touches[0].clientY - rect.bottom)
        
        if (y > rect.height) {
            y = rect.height
        }

        if (event.touches[0].clientY > rect.bottom) {
            y = 0
        }

        let posicion = [x,y]
        return (posicion)
   
    }

    // Función callback para cuando se inicia un toque
    function padOnTouchStart(event) {
        
        if (!editar) {
        canvas = document.getElementById(props.id)
        rect = canvas.getBoundingClientRect()
        let toque = getTouchPos(event)
        rangox = [0,rect.width]
        rangoy = [0,rect.height]
        
        if (props.paramX.current === "volumen") {
            
            let volumen = convertRange(toque[0], rangox, [-48,0])
            props.fuente.current.set({volume: volumen})
            
        }
        if (props.paramY.current === "volumen") {
            
            let volumen = convertRange(toque[1], rangoy, [-48,0])
            props.fuente.current.set({volume: volumen})
            
        }
        if (props.paramX.current === "harm") {
           
            let harm = convertRange(toque[0], rangox, [0, harmSeteada])
            props.fuente.current.set({harmonicity: harm})
        }
        if (props.paramY.current === "harm") {
            
            let harm = convertRange(toque[1], rangoy, [0, harmSeteada])
            props.fuente.current.set({harmonicity: harm})
        }
        if (props.paramX.current === "modI") {
            let modI = convertRange(toque[0], rangox, [0, modISeteado])
            props.fuente.current.set({modulationIndex: modI})
        }
        if (props.paramY.current === "modI") {
            let modI = convertRange(toque[1], rangoy, [0, modISeteado])
            props.fuente.current.set({modulationIndex: modI})
        }
        if (props.paramX.current === "cut-off") {
            let cutoff = convertRange(toque[0], rangox, [0, cutoffSeteado])
            props.filtro.current.set({frequency: cutoff})
        }
        if (props.paramY.current === "cut-off") {
            let cutoff = convertRange(toque[1], rangoy, [0, cutoffSeteado])
            props.filtro.current.set({frequency: cutoff})
        }
        if (props.paramX.current === "bits") {
            let bits = convertRange(toque[0], rangox, [1, bitsSeteado])
            props.bitcrusher.current.set({bits: bits})
        }
        if (props.paramY.current === "bits") {
            let bits = convertRange(toque[1], rangoy, [1, bitsSeteado])
            props.bitcrusher.current.set({bits: bits})
        }
        if (props.paramX.current === "tiempo") {
            let decay = convertRange(toque[0], rangox, [0.001, decaySeteado])
            props.reverb.current.set({decay: decay})
        }
        if (props.paramY.current === "tiempo") {
            let decay = convertRange(toque[1], rangoy, [0.001, decaySeteado])
            props.reverb.current.set({decay: decay})
        }
        if (props.paramX.current === "wet") {
            let wet = convertRange(toque[0], rangox, [0, wetSeteado])
            props.reverb.current.set({wet: wet})
        }
        if (props.paramY.current === "wet") {
            let wet = convertRange(toque[1], rangoy, [0, wetSeteado])
            props.reverb.current.set({wet: wet})
        }


        console.log(props.fuente.current.get())
        console.log(props.filtro.current.get())
        console.log(props.reverb.current.get())
        console.log(props.bitcrusher.current.get())
        console.log(window["nota" + props.numeroPad])

        
        
        props.fuente.current.triggerAttack(window["nota" + props.numeroPad], Tone.now(), 1)
 
        } else {
          props.setMenu(true)
          props.setNumeroMenu(props.numeroPad)
        }

    }

    // Función callback para cuando se modifica un toque
    function padOnTouchMove(event) { 
        if (!editar) {
        let toque = getTouchPos(event)

        if (props.paramX.current === "volumen") {
            
            let volumen = convertRange(toque[0], rangox, [-48,0])
            props.fuente.current.set({volume: volumen})
            
        }
        if (props.paramY.current === "volumen") {
            
            let volumen = convertRange(toque[1], rangoy, [-48,0])
            props.fuente.current.set({volume: volumen})
            
        }
        if (props.paramX.current === "harm") {
            
            let harm = convertRange(toque[0], rangox, [0, harmSeteada])
            props.fuente.current.set({harmonicity: harm})
        }
        if (props.paramY.current === "harm") {
            
            let harm = convertRange(toque[1], rangoy, [0, harmSeteada])
            props.fuente.current.set({harmonicity: harm})
        }
        if (props.paramX.current === "modI") {
            let modI = convertRange(toque[0], rangox, [0, modISeteado])
            props.fuente.current.set({modulationIndex: modI})
        }
        if (props.paramY.current === "modI") {
            let modI = convertRange(toque[1], rangoy, [0, modISeteado])
            props.fuente.current.set({modulationIndex: modI})
        }
        if (props.paramX.current === "cut-off") {
            let cutoff = convertRange(toque[0], rangox, [0, cutoffSeteado])
            props.filtro.current.set({frequency: cutoff})
        }
        if (props.paramY.current === "cut-off") {
            let cutoff = convertRange(toque[1], rangoy, [0, cutoffSeteado])
            props.filtro.current.set({frequency: cutoff})
        }
        if (props.paramX.current === "bits") {
            let bits = convertRange(toque[0], rangox, [1, bitsSeteado])
            props.bitcrusher.current.set({bits: bits})
        }
        if (props.paramY.current === "bits") {
            let bits = convertRange(toque[1], rangoy, [1, bitsSeteado])
            props.bitcrusher.current.set({bits: bits})
        }
      
        if (props.paramX.current === "wet") {
            let wet = convertRange(toque[0], rangox, [0, wetSeteado])
            props.reverb.current.set({wet: wet})
        }
        if (props.paramY.current === "wet") {
            let wet = convertRange(toque[1], rangoy, [0, wetSeteado])
            props.reverb.current.set({wet: wet})
        }
        } 
    }
       
    // Función callback para cuando se finaliza un toque
    function padOnTouchEnd() {
        
        if (props.fuente.current.harmonicity === undefined) {
        props.fuente.current.triggerRelease(window["nota" + props.numeroPad],Tone.now())
        } else {
        props.fuente.current.triggerRelease(Tone.now())
        }
    }

    
    return(
        <canvas id = {props.id} onTouchStart={padOnTouchStart} onTouchMove={padOnTouchMove} onTouchEnd={padOnTouchEnd} ></canvas>
    )

}

// Componente, botón para cambiar el modo del sinte
function BotonModo() {
   
    const [modo, setModo] = react.useState("editar")
    const [icono, setIcono] = react.useState(faWrench)
    let imagen = <FontAwesomeIcon icon={icono} id = "imagen"/>
    
    // cambio de modo al clickar sobre el botón
    function handleClick() {

        if (modo === "editar") {
            setModo("tocar")
            editar = false
            setIcono(faPlay)
           
        } else {
            setModo("editar")
            editar = true
            setIcono(faWrench)
            
        }
        
    }


    return (
         <button id= "botonModo" onClick={handleClick}>{imagen}</button>
    );
}

function BotonXY(props) {

    function abrirMenuXY () {
        props.setXY(true)
    }
    let imagen = <FontAwesomeIcon icon= {faXmark} id = "imagenX"/>
    
    return(
        <button id= "botonXY" onClick={abrirMenuXY}>{imagen}</button>
    )
}


// Componente para el menú, carga un menú diferente según la prop que se le pase.

function Menu(props) {

    let botonFuente
    let botonADSR
    let botonFiltros
    let botonEfectos

    const [pestaña,setPestaña] = react.useState()
   
    react.useEffect(()=>{
        botonFuente = document.getElementById("botonFuente")
        botonADSR = document.getElementById("botonADSR")
        botonFiltros = document.getElementById("botonFiltros")
        botonEfectos = document.getElementById("botonEfectos")
    }, [pestaña])

    function cerrarMenu() {
        props.setMenu(false)
    }

    function abrirFuenteSonora() {
        setPestaña("FuenteSonora") 
        botonFuente.style.backgroundColor = "#ffb6a9";
        botonFuente.style.color = "#eb300f"
        botonADSR.style.backgroundColor = "rgb(25,25,25)";
        botonADSR.style.color = "rgb(75, 255, 165)";
        botonFiltros.style.backgroundColor = "rgb(25,25,25)";
        botonFiltros.style.color = "rgb(255, 73, 234)";
        botonEfectos.style.backgroundColor = "rgb(25,25,25)";
        botonEfectos.style.color = "rgb(253, 255, 125)";
        
    }

    function abrirADSR() {
        setPestaña("ADSR")
        botonFuente.style.backgroundColor = "rgb(25,25,25)";
        botonFuente.style.color = "#ff674d"
        botonADSR.style.backgroundColor = "rgb(161, 250, 205)";
        botonADSR.style.color = "rgb(0, 171, 26)";
        botonFiltros.style.backgroundColor = "rgb(25,25,25)";
        botonFiltros.style.color = "rgb(255, 73, 234)";
        botonEfectos.style.backgroundColor = "rgb(25,25,25)";
        botonEfectos.style.color = "rgb(253, 255, 125)";
    }

    function abrirFiltros() {
        setPestaña("Filtros")
        botonFuente.style.backgroundColor = "rgb(25,25,25)";
        botonFuente.style.color = "#ff674d"
        botonADSR.style.backgroundColor = "rgb(25,25,25)";
        botonADSR.style.color = "rgb(75, 255, 165)";
        botonFiltros.style.backgroundColor = "rgb(255, 170, 245)";
        botonFiltros.style.color = "rgb(170, 0, 150)";
        botonEfectos.style.backgroundColor = "rgb(25,25,25)";
        botonEfectos.style.color = "rgb(253, 255, 125)";
    }

    function abrirEfectos () {
        setPestaña("Efectos")
        botonFuente.style.backgroundColor = "rgb(25,25,25)";
        botonFuente.style.color = "#ff674d"
        botonADSR.style.backgroundColor = "rgb(25,25,25)";
        botonADSR.style.color = "rgb(75, 255, 165)";
        botonFiltros.style.backgroundColor = "rgb(25,25,25)";
        botonFiltros.style.color = "rgb(255, 73, 234)";
        botonEfectos.style.backgroundColor = "rgb(245, 246, 180)";
        botonEfectos.style.color = "rgb(0, 0, 0)";
    }

    return(
        <div id = "menuPrincipal">
            <div id = "menuModulos">
                <button id = "botonFuente" onClick={abrirFuenteSonora}>FuenteSonora</button>
                <button id = "botonADSR"onClick={abrirADSR}>ADSR</button>
                <button id = "botonFiltros"onClick={abrirFiltros}>Filtros</button>
                <button id = "botonEfectos"onClick={abrirEfectos}>Efectos</button>
                <button id = "botonAceptar"onClick={cerrarMenu}>Aceptar</button>
            </div>
            <DisplayMenu numeroMenu = {props.numeroMenu} pestaña = {pestaña}
            fuente1 = {props.fuente1} fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} 
            fuente5 = {props.fuente5} fuente6 = {props.fuente6} filtro1 = {props.filtro1} filtro2 = {props.filtro2} filtro3 = {props.filtro3} 
            filtro4 = {props.filtro4} filtro5 = {props.filtro5} filtro6 = {props.filtro6} bitcrusher1 = {props.bitcrusher1}  
            bitcrusher2 = {props.bitcrusher2} bitcrusher3 = {props.bitcrusher3}  bitcrusher4 = {props.bitcrusher4}  
            bitcrusher5 = {props.bitcrusher5}  bitcrusher6 = {props.bitcrusher6} reverb1 = {props.reverb1} reverb2 = {props.reverb2} 
            reverb3 = {props.reverb3} reverb4 = {props.reverb4} reverb5 = {props.reverb5} reverb6 = {props.reverb6}/>
        </div>)
}

// Módulo de lógica encargado de mostrar los distintos menús
function DisplayMenu(props) {
    
    if (props.pestaña === undefined){
        return(<p></p>)
    }
    if (props.pestaña === "FuenteSonora"){
        return(<MenuFuenteSonora numeroMenu = {props.numeroMenu} 
            fuente1 = {props.fuente1} fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} 
            fuente5 = {props.fuente5} fuente6 = {props.fuente6} filtro1 = {props.filtro1} filtro2 = {props.filtro2} filtro3 = {props.filtro3} 
            filtro4 = {props.filtro4} filtro5 = {props.filtro5} filtro6 = {props.filtro6} bitcrusher1 = {props.bitcrusher1}  
            bitcrusher2 = {props.bitcrusher2} bitcrusher3 = {props.bitcrusher3}  bitcrusher4 = {props.bitcrusher4}  
            bitcrusher5 = {props.bitcrusher5}  bitcrusher6 = {props.bitcrusher6} reverb1 = {props.reverb1} reverb2 = {props.reverb2} 
            reverb3 = {props.reverb3} reverb4 = {props.reverb4} reverb5 = {props.reverb5} reverb6 = {props.reverb6} />)
    }
    if (props.pestaña === "ADSR"){
        return(<MenuADSR numeroMenu = {props.numeroMenu} fuente1 = {props.fuente1} fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} 
            fuente5 = {props.fuente5} fuente6 = {props.fuente6} />)
    }
    if (props.pestaña === "Filtros"){
        return(<MenuFiltros numeroMenu = {props.numeroMenu} fuente1 = {props.fuente1} fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} 
            fuente5 = {props.fuente5} fuente6 = {props.fuente6} filtro1 = {props.filtro1} filtro2 = {props.filtro2} filtro3 = {props.filtro3} 
            filtro4 = {props.filtro4} filtro5 = {props.filtro5} filtro6 = {props.filtro6} />)
    }
    if (props.pestaña === "Efectos"){
        return(<MenuEfectos numeroMenu = {props.numeroMenu} fuente1 = {props.fuente1} fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} 
            fuente5 = {props.fuente5} fuente6 = {props.fuente6} bitcrusher1 = {props.bitcrusher1}  
            bitcrusher2 = {props.bitcrusher2} bitcrusher3 = {props.bitcrusher3}  bitcrusher4 = {props.bitcrusher4}  
            bitcrusher5 = {props.bitcrusher5}  bitcrusher6 = {props.bitcrusher6} reverb1 = {props.reverb1} reverb2 = {props.reverb2} 
            reverb3 = {props.reverb3} reverb4 = {props.reverb4} reverb5 = {props.reverb5} reverb6 = {props.reverb6}/>)
    }
}

// FuenteSonora
function MenuFuenteSonora(props) {
    let fuente
    let filtro
    let bitcrusher
    let reverb

    const [sinteSampler, setSinteSampler] = react.useState()

    if (props.numeroMenu === 1) {fuente = props.fuente1}
    if (props.numeroMenu === 2) {fuente = props.fuente2}
    if (props.numeroMenu === 3) {fuente = props.fuente3}
    if (props.numeroMenu === 4) {fuente = props.fuente4}
    if (props.numeroMenu === 5) {fuente = props.fuente5}
    if (props.numeroMenu === 6) {fuente = props.fuente6}

    if (props.numeroMenu === 1) {filtro = props.filtro1}
    if (props.numeroMenu === 2) {filtro = props.filtro2}
    if (props.numeroMenu === 3) {filtro = props.filtro3}
    if (props.numeroMenu === 4) {filtro = props.filtro4}
    if (props.numeroMenu === 5) {filtro = props.filtro5}
    if (props.numeroMenu === 6) {filtro = props.filtro6}

    if (props.numeroMenu === 1) {bitcrusher = props.bitcrusher1}
    if (props.numeroMenu === 2) {bitcrusher = props.bitcrusher2}
    if (props.numeroMenu === 3) {bitcrusher = props.bitcrusher3}
    if (props.numeroMenu === 4) {bitcrusher = props.bitcrusher4}
    if (props.numeroMenu === 5) {bitcrusher = props.bitcrusher5}
    if (props.numeroMenu === 6) {bitcrusher = props.bitcrusher6}

    if (props.numeroMenu === 1) {reverb = props.reverb1}
    if (props.numeroMenu === 2) {reverb = props.reverb2}
    if (props.numeroMenu === 3) {reverb = props.reverb3}
    if (props.numeroMenu === 4) {reverb = props.reverb4}
    if (props.numeroMenu === 5) {reverb = props.reverb5}
    if (props.numeroMenu === 6) {reverb = props.reverb6}
    
    function abrirSinte() {
        setSinteSampler("Sinte")
        fuente.current.dispose()
        fuente.current = new Tone.FMSynth({volume: -6, modulationEnvelope: {attack: 0.01}}).chain(filtro.current, bitcrusher.current, reverb.current, Tone.Destination)
    }

    function abrirSampler() {
        setSinteSampler("Sampler")
        
        
        
    }

    if (sinteSampler === "Sinte"){
        return (
            <div id = "menuFuenteSonora">
                <div id="menuSeleccionFuenteSonora">
                    <button id = "botonAbrirSintePulsado" onClick={abrirSinte}>Sinte</button>
                    <button id = "botonAbrirSampler" onClick={abrirSampler}>Sampler</button>
                </div>
                <MenuSinte numeroMenu = {props.numeroMenu}
            fuente1 = {props.fuente1} fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} 
            fuente5 = {props.fuente5} fuente6 = {props.fuente6} />
            </div>
        )
    }

    if (sinteSampler === "Sampler") {
        return (
            <div id = "menuFuenteSonora">
            <div id="menuSeleccionFuenteSonora">
                <button id = "botonAbrirSinte" onClick={abrirSinte}>Sinte</button>
                <button id = "botonAbrirSamplerPulsado" onClick={abrirSampler}>Sampler</button>
                </div>
                <MenuSampler numeroMenu = {props.numeroMenu}  fuente1 = {props.fuente1} fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} 
            fuente5 = {props.fuente5} fuente6 = {props.fuente6} filtro = {filtro} reverb = {reverb} bitcrusher={bitcrusher}/>
            </div>
        ) 
    } 

    else {
        return ((
            <div id = "menuFuenteSonora">
                <div id="menuSeleccionFuenteSonora">
                    <button id = "botonAbrirSinte" onClick={abrirSinte}>Sinte</button>
                    <button id = "botonAbrirSampler" onClick={abrirSampler}>Sampler</button>
                </div>
                
            </div>
        ) )
    }

    
}

// Si la fuente sonora es el sinteFM 
function MenuSinte(props) {
    // parámetros. Carrier f, Carrier wave, harm, Mod f, Mod wave, Mod Ind
    let fuente
    const [displayHarm, setDisplayHarm] = react.useState(0.5)
    const [displayModI, setDisplayModI] = react.useState(50)

    if (props.numeroMenu === 1) {fuente = props.fuente1}
    if (props.numeroMenu === 2) {fuente = props.fuente2}
    if (props.numeroMenu === 3) {fuente = props.fuente3}
    if (props.numeroMenu === 4) {fuente = props.fuente4}
    if (props.numeroMenu === 5) {fuente = props.fuente5}
    if (props.numeroMenu === 6) {fuente = props.fuente6}
    
    //fuente.dispose()
    //fuente.connect(Tone.Destination)
    
    
    function cambioNota(e) {
        
        window["nota" +  props.numeroMenu] = e.target.value
        
        
    }


    function cambioHarm(e) {
        let valor = e.target.value / 100
       
        fuente.current.set({harmonicity:valor})
        setDisplayHarm(valor)
       
    }

    function cambioModI(e) {
        let valor = e.target.value / 1
       
        fuente.current.set({modulationIndex: valor})
        setDisplayModI(valor)
    }

    function cambioOndaCarrier(e) {
      
        fuente.current.set({oscillator: {type: e.target.value}})
        
    }

    function cambioOndaMod(e) {
      
        fuente.current.set({modulation: {type: e.target.value}})
        
    }
    
   

    return(
        <div id="cuerpoMenuSinte">
            <div id = "sinteRow1">
                <div class = "label" id = "labelNotaCarrier">
                    <label for= "notaCarrier">Nota</label>
                    <input id= "notaCarrier" type='text' onChange={cambioNota}></input>
                </div>
                <div class = "label" id = "labelOndaCarrier">
                    <label for= "ondaCarrier">Onda Carrier</label>
                    <select id= "ondaCarrier" onChange={cambioOndaCarrier}>
                        <option value={"sine"}>Sinusoidal</option>
                        <option value={"square"}>Cuadrada</option>
                        <option value={"triangle"}>Triangular</option>
                        <option value={"sawtooth"}>Diente de sierra</option>
                    </select>
                </div>
                <div class = "label" id = "labelOndaMod">
                    <label for= "ondaMod" onChange={cambioOndaMod}>Onda Moduladora</label>
                    <select id= "ondaMod">
                        <option value={"sine"}>Sinusoidal</option>
                        <option value={"square"}>Cuadrada</option>
                        <option value={"triangle"}>Triangular</option>
                        <option value={"sawtooth"}>Diente de sierra</option>
                    </select>
                </div>
            </div>
            <div id = "sinteRow2">
                <div class = "label" id = "labelHarm">
                <label for= "harm">{"Harmonicidad = " + displayHarm}</label>
                <input id= "harm" type="range" min="0" max="1000" onChange= {cambioHarm}></input>
                </div>
                <div class = "label" id = "labelModI">
                <label for= "modI">{"Índice de modulación = " +  displayModI}</label>
                <input id= "modI" type="range" min="1" max="100" onChange={cambioModI}></input>
                </div>
            </div>
        </div>
    )
}

// Si la fuente sonora es el sampler

function MenuSampler(props) {

    let busqueda
    let resultados = react.useRef(null)
    const [seleccionSample, setSeleccionSample] = react.useState(false)

    function cambioBusqueda(e) {
        busqueda = e.target.value
    }
    
    function cambioNota(e) {
        
        window["nota" +  props.numeroMenu] = e.target.value
        
        
    }

    async function buscar () {

        let url = "https://freesound.org/apiv2/search/text/?query=" + busqueda + "&sort=score" + "&filter=duration:[* TO 10]"+ "&token="  + claveAPI 
        resultados.current = await (await fetch(url)).json()
        setSeleccionSample(true)
        
    }
    if (!seleccionSample) {
    return(
        <div id = "menuSampler">
            <div id = "busqueda">
                <div className='label' id = "labelBusqueda">
                    <label for = "buscadorSample">Búsqueda de Sonido</label>
                    <input id = "buscadorSample" type='text' onChange={cambioBusqueda}></input>
                </div>
                <button id= "botonBuscar" onClick={buscar} >Buscar</button>
            </div>
            <div className = "label" id = "labelSampler">
                    <label for= "notaSampler">Nota</label>
                    <input id= "notaSampler" type='text' onChange={cambioNota}></input>
            </div>
        </div>
    )} else {
        return (<ResultadosBusqueda resultados = {resultados} setSeleccionSample = {setSeleccionSample}  fuente1 = {props.fuente1} fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} 
            fuente5 = {props.fuente5} fuente6 = {props.fuente6} numeroMenu = {props.numeroMenu}
            filtro = {props.filtro} reverb = {props.reverb} bitcrusher={props.bitcrusher}/>)
    }
}

// ADSR
function MenuADSR(props) {
    let fuente
    const [displayAtaque, setDisplayAtaque] = react.useState(0.5)
    const [displayDecay, setDisplayDecay] = react.useState(0.5)
    const [displaySustain, setDisplaySustain] = react.useState(0.5)
    const [displayRelease, setDisplayRelease] = react.useState(0.5)

    if (props.numeroMenu === 1) {fuente = props.fuente1}
    if (props.numeroMenu === 2) {fuente = props.fuente2}
    if (props.numeroMenu === 3) {fuente = props.fuente3}
    if (props.numeroMenu === 4) {fuente = props.fuente4}
    if (props.numeroMenu === 5) {fuente = props.fuente5}
    if (props.numeroMenu === 6) {fuente = props.fuente6}

    function cambioAtaque(e) {
        let valor = e.target.value / 100
        fuente.current.set({envelope: {attack: valor}})
        setDisplayAtaque(valor)
    }

    function cambioDecay(e) {
        let valor = e.target.value / 100
        fuente.current.set({envelope: {decay: valor}})
        setDisplayDecay(valor)
    }

    function cambioSustain(e) {
        let valor = e.target.value / 100
        fuente.current.set({envelope: {sustain: valor}})
        setDisplaySustain(valor)
    }

    function cambioRelease(e) {
        let valor = e.target.value / 100
        fuente.current.set({envelope: {release:valor}})
        setDisplayRelease(valor)
    }
    return(
        <div id = "menuADSR">
           <div> 
                <div class = "label">
                    <label for= "attack">{"Ataque = " + displayAtaque}</label>
                    <input id= "attack" type="range" min="1" max="200" onChange={cambioAtaque}></input>
                </div>
                <div class = "label">
                    <label for= "decay">{"Decay = " + displayDecay}</label>
                    <input id= "decay" type="range" min="0" max="200" onChange={cambioDecay}></input>  
                </div>
            </div>
            <div>
                <div class = "label">
                    <label for= "sustain">{"Sustain = " + displaySustain}</label>
                    <input id= "sustain" type="range" min="0" max="100" onChange={cambioSustain}></input>  
                </div>
                <div class = "label">
                    <label for= "release">{"Release = " + displayRelease}</label>
                    <input id= "release" type="range" min="0" max="200" onChange={cambioRelease}></input>   
                </div> 
            </div>
        </div>
    )
}

// Filtros
function MenuFiltros(props) {
    let filtro
    const [displayF, setDisplayF] = react.useState(0)
    const [Q, setQ] = react.useState(50)


    if (props.numeroMenu === 1) {filtro = props.filtro1}
    if (props.numeroMenu === 2) {filtro = props.filtro2}
    if (props.numeroMenu === 3) {filtro = props.filtro3}
    if (props.numeroMenu === 4) {filtro = props.filtro4}
    if (props.numeroMenu === 5) {filtro = props.filtro5}
    if (props.numeroMenu === 6) {filtro = props.filtro6}

    function cambioQ(e) {
        filtro.current.set({
            Q: e.target.value
        })
        setQ(e.target.value)
    }

    function cambioTipo(e) {
        filtro.current.set({
            type: e.target.value,
            gain: 12
        })
        
        console.log(filtro.current.get())
    }

    function cambioFrecuencia(e) {
        filtro.current.set({
            frequency: e.target.value
        })
        setDisplayF(e.target.value) 
        
        console.log(filtro.current.get())
    }

    return(
    <div id = "menuFiltros">
        <div>
            <div class = "label">
                <label for = "Q">{"Q = " + Q}</label>
                <input id = "Q" type="range" min="0" max= "100" onChange={cambioQ}></input>
            </div>
            <div class = "label">
                <label for= "tipoDeFiltro">Tipo</label>
                <select id = "tipoDeFiltro" onChange={cambioTipo}>
                    <option value = "highpass">-</option>
                    <option value = "lowpass">Pasa-bajos</option>
                    <option value = "highpass">Pasa-altos</option>
                    <option value = "bandpass">Pasa-banda</option>
                    <option value = "peaking">Pico</option>
                    <option value = "notch">Notch</option>
                </select>
            </div>
        </div>
        <div class = "label">
            <label for = "frecuenciaFiltro" >{"Frecuencia = " + displayF}</label>
            <input id="frecuenciaFiltro" type = "range" min = "0" max = "20000" onChange={cambioFrecuencia}></input>
        </div>
    </div>)
}

// Efectos
function MenuEfectos(props) {

let bitcrusher
let reverb
let botonBitcrusher
let botonReverb

const [displayBits, setDisplayBits] = react.useState(16)
const [displayDecay, setDisplayDecay] = react.useState(0.5)
const [displayWet, setDisplayWet] = react.useState(50)

if (props.numeroMenu === 1) {bitcrusher = props.bitcrusher1}
if (props.numeroMenu === 2) {bitcrusher = props.bitcrusher2}
if (props.numeroMenu === 3) {bitcrusher = props.bitcrusher3}
if (props.numeroMenu === 4) {bitcrusher = props.bitcrusher4}
if (props.numeroMenu === 5) {bitcrusher = props.bitcrusher5}
if (props.numeroMenu === 6) {bitcrusher = props.bitcrusher6}

if (props.numeroMenu === 1) {reverb = props.reverb1}
if (props.numeroMenu === 2) {reverb = props.reverb2}
if (props.numeroMenu === 3) {reverb = props.reverb3}
if (props.numeroMenu === 4) {reverb = props.reverb4}
if (props.numeroMenu === 5) {reverb = props.reverb5}
if (props.numeroMenu === 6) {reverb = props.reverb6}

    react.useEffect(()=> {
        botonReverb = document.getElementById("reverb")
        botonBitcrusher = document.getElementById("bitcrusher")
        
    
    }, [])
  
    

    function interruptorBitcrusher(e) {
        if (botonBitcrusher.textContent === "Off") {
            botonBitcrusher.textContent = "On"
            botonBitcrusher.style.color = "green"
            botonBitcrusher.style.border = "1vh solid green"
            botonBitcrusher.style.backgroundColor = "rgb(25,25,25)"
            bitcrusher.current.set({wet:1})
        } else {
            botonBitcrusher.textContent = "Off"
            botonBitcrusher.style.color = "red"
            botonBitcrusher.style.border = "1vh solid red"
            botonBitcrusher.style.backgroundColor = "rgb(25,25,25)"
            bitcrusher.current.set({wet:0})
        }

    }

    function interruptorReverb(e) {
        if (botonReverb.textContent === "Off") {
            botonReverb.textContent = "On"
            botonReverb.style.color = "green"
            botonReverb.style.border = "1vh solid green"
            botonReverb.style.backgroundColor = "rgb(25,25,25)"
            reverb.current.set({wet:1})
        } else {
            botonReverb.textContent = "Off"
            botonReverb.style.color = "red"
            botonReverb.style.border = "1vh solid red"
            botonReverb.style.backgroundColor = "rgb(25,25,25)"
            reverb.current.set({wet:0})
        }
    }

    function cambioBitcrusher(e) {
        bitcrusher.current.set({bits: e.target.value})
        setDisplayBits(e.target.value)
    }

    function cambioDecay(e) {
        let valor = e.target.value/100
        reverb.current.set({decay:valor})
        setDisplayDecay(valor)
    }

    function cambioWet(e) {
        let valor = e.target.value/100
        reverb.current.set({wet: valor})
        setDisplayWet(e.target.value)
    }

    return(
    <div id= "efectos">
        <div id = "efectosRow1">
            <div class = "label">
                <label for = "bitcrusher" >Bitcrusher</label>
                <button id = "bitcrusher" onClick={interruptorBitcrusher}>Off</button>
            </div>
            <div class = "label" id = "labelBits">
                <label for= "bits">{displayBits + " bits"}</label>
                <input id = "bits" type= "range" min = "0" max = "16" onChange={cambioBitcrusher}></input>
            </div>
        </div>
        <div id = "efectosRow2">
            <div class = "label">
                <label for = "reverb">Reverb</label>
                <button id ="reverb" onClick={interruptorReverb}>Off</button>
            </div>
            <div class = "label" id = "labelDamp">
                <label for = "dampening">{"Tiempo = " + displayDecay + "s"}</label>
                <input id = "dampening" type= "range" min = "1" max = "1000" onChange={cambioDecay}></input>
            </div>
            <div class = "label" id = "labelRoom">    
                <label for = "room">{"Cantidad = " + displayWet + "%"}</label>
                <input id = "room" type= "range" min = "0" max = "100" onChange={cambioWet}></input>
            </div>
        </div>
        
    </div>
    )
}

function MenuXY (props) {
    console.log(props.numeroXY)
    let paramX
    let paramY

    

    if (props.numeroXY.current === 1) {
        paramX = props.paramX1
        paramY = props.paramY1
    }
    if (props.numeroXY.current === 2) {
        paramX = props.paramX2
        paramY = props.paramY2
    }
    if (props.numeroXY.current === 3) {
        paramX = props.paramX3
        paramY = props.paramY3
    }
    if (props.numeroXY.current === 4) {
        paramX = props.paramX4
        paramY = props.paramY4
    }
    if (props.numeroXY.current === 5) {
        paramX = props.paramX5
        paramY = props.paramY5
    }
    if (props.numeroXY.current === 6) {
        paramX = props.paramX6
        paramY = props.paramY6
    }

    console.log(paramX)

    function cerrarMenuXY2 () {
        props.setXY2(false)
    }

    function cambiarX (e) {
       paramX.current = e.target.value
       
    }

    function cambiarY (e) {
        paramY.current = e.target.value
    }

    return(
        <div>
            <div class = "label">
                <label for = "x" >X</label>
                <select id= "x" onChange={cambiarX}>
                    <option value = "">-</option>
                    <option value = "volumen">Volumen</option>
                    <option value = "harm">Harmonicidad</option>
                    <option value = "modI">Indice de modulación</option>
                    <option value = "cut-off">Frecuencia Filtro</option>
                    <option value = "bits">BitCrusher</option>
                    <option value = "tiempo">Tiempo de Reverb</option>
                    <option value = "wet">Cantidad de Reverb</option>
                </select>
            </div>
            <div class = "label">
                <label for = "y">Y</label>
                <select id= "y" onChange={cambiarY}>
                    <option value = "">-</option>
                    <option value = "volumen">Volumen</option>
                    <option value = "harm">Harmonicidad</option>
                    <option value = "modI">Indice de modulación</option>
                    <option value = "cut-off">Frecuencia Filtro</option>
                    <option value = "bits">BitCrusher</option>
                    <option value = "tiempo">Tiempo de Reverb</option>
                    <option value = "wet">Cantidad de Reverb</option>
                </select>
            </div>
            <div id = "divBotonAceptarXY2" >
                <button id = "botonAceptarXY2" onClick={cerrarMenuXY2}>Aceptar</button>
            </div>
            
        </div>)
}



function ResultadosBusqueda(props) {
    let nombres = []
    let id = []

    for (let i = 0; i < 15; i++) {
        nombres[i] = props.resultados.current.results[i].name 
        id[i] = props.resultados.current.results[i].id
    }

    console.log(nombres, id)
   
    return (
    <div id = "menuResultados">
        <div id = "resultadosRow1">
            <BotonBusqueda nombre = {nombres[0]} id = {id[0]} setSeleccionSample = {props.setSeleccionSample}  fuente1 = {props.fuente1} 
            fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} fuente5 = {props.fuente5} 
            fuente6 = {props.fuente6} numeroMenu = {props.numeroMenu} filtro = {props.filtro} reverb = {props.reverb} 
            bitcrusher={props.bitcrusher}/>
            <BotonBusqueda nombre = {nombres[1]} id = {id[1]} setSeleccionSample = {props.setSeleccionSample} fuente1 = {props.fuente1} 
            fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} fuente5 = {props.fuente5} 
            fuente6 = {props.fuente6} numeroMenu = {props.numeroMenu} filtro = {props.filtro} reverb = {props.reverb} 
            bitcrusher={props.bitcrusher}/>
            <BotonBusqueda nombre = {nombres[2]} id = {id[2]} setSeleccionSample = {props.setSeleccionSample} fuente1 = {props.fuente1} 
            fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} fuente5 = {props.fuente5} 
            fuente6 = {props.fuente6} numeroMenu = {props.numeroMenu} filtro = {props.filtro} reverb = {props.reverb} 
            bitcrusher={props.bitcrusher}/>
            <BotonBusqueda nombre = {nombres[3]} id = {id[3]} setSeleccionSample = {props.setSeleccionSample} fuente1 = {props.fuente1} 
            fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} fuente5 = {props.fuente5} 
            fuente6 = {props.fuente6} numeroMenu = {props.numeroMenu} filtro = {props.filtro} reverb = {props.reverb} 
            bitcrusher={props.bitcrusher}/>
        </div>
        <div id = "resultadosRow2">
            <BotonBusqueda nombre = {nombres[4]} id = {id[4]} setSeleccionSample = {props.setSeleccionSample} fuente1 = {props.fuente1} 
            fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} fuente5 = {props.fuente5} 
            fuente6 = {props.fuente6} numeroMenu = {props.numeroMenu} filtro = {props.filtro} reverb = {props.reverb} 
            bitcrusher={props.bitcrusher}/>
            <BotonBusqueda nombre = {nombres[5]} id = {id[5]} setSeleccionSample = {props.setSeleccionSample} fuente1 = {props.fuente1} 
            fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} fuente5 = {props.fuente5} 
            fuente6 = {props.fuente6} numeroMenu = {props.numeroMenu} filtro = {props.filtro} reverb = {props.reverb} 
            bitcrusher={props.bitcrusher}/>
            <BotonBusqueda nombre = {nombres[6]} id = {id[6]} setSeleccionSample = {props.setSeleccionSample} fuente1 = {props.fuente1} 
            fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} fuente5 = {props.fuente5} 
            fuente6 = {props.fuente6} numeroMenu = {props.numeroMenu} filtro = {props.filtro} reverb = {props.reverb} 
            bitcrusher={props.bitcrusher}/>
            <BotonBusqueda nombre = {nombres[7]} id = {id[7]} setSeleccionSample = {props.setSeleccionSample} fuente1 = {props.fuente1} 
            fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} fuente5 = {props.fuente5} 
            fuente6 = {props.fuente6} numeroMenu = {props.numeroMenu} filtro = {props.filtro} reverb = {props.reverb} 
            bitcrusher={props.bitcrusher}/>
        </div>
        <div id = "resultadosRow3">
            <BotonBusqueda nombre = {nombres[8]} id = {id[8]} setSeleccionSample = {props.setSeleccionSample} fuente1 = {props.fuente1} 
            fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} fuente5 = {props.fuente5} 
            fuente6 = {props.fuente6} numeroMenu = {props.numeroMenu} filtro = {props.filtro} reverb = {props.reverb} 
            bitcrusher={props.bitcrusher}/>
            <BotonBusqueda nombre = {nombres[9]} id = {id[9]} setSeleccionSample = {props.setSeleccionSample} fuente1 = {props.fuente1} 
            fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} fuente5 = {props.fuente5} 
            fuente6 = {props.fuente6} numeroMenu = {props.numeroMenu} filtro = {props.filtro} reverb = {props.reverb} 
            bitcrusher={props.bitcrusher}/>
            <BotonBusqueda nombre = {nombres[10]} id = {id[10]} setSeleccionSample = {props.setSeleccionSample} fuente1 = {props.fuente1} 
            fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} fuente5 = {props.fuente5} 
            fuente6 = {props.fuente6} numeroMenu = {props.numeroMenu} filtro = {props.filtro} reverb = {props.reverb} 
            bitcrusher={props.bitcrusher}/>
            <BotonBusqueda nombre = {nombres[11]} id = {id[11]} setSeleccionSample = {props.setSeleccionSample} fuente1 = {props.fuente1} 
            fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} fuente5 = {props.fuente5} 
            fuente6 = {props.fuente6} numeroMenu = {props.numeroMenu} filtro = {props.filtro} reverb = {props.reverb} 
            bitcrusher={props.bitcrusher}/>
        </div>
        <div id = "resultadosRow4">
            <BotonBusqueda nombre = {nombres[12]} id = {id[12]} setSeleccionSample = {props.setSeleccionSample} fuente1 = {props.fuente1} 
            fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} fuente5 = {props.fuente5} 
            fuente6 = {props.fuente6} numeroMenu = {props.numeroMenu} filtro = {props.filtro} reverb = {props.reverb} 
            bitcrusher={props.bitcrusher}/>
            <BotonBusqueda nombre = {nombres[13]} id = {id[13]} setSeleccionSample = {props.setSeleccionSample} fuente1 = {props.fuente1} 
            fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} fuente5 = {props.fuente5} 
            fuente6 = {props.fuente6} numeroMenu = {props.numeroMenu} filtro = {props.filtro} reverb = {props.reverb} 
            bitcrusher={props.bitcrusher}/>
            <BotonBusqueda nombre = {nombres[14]} id = {id[14]} setSeleccionSample = {props.setSeleccionSample} fuente1 = {props.fuente1} 
            fuente2 = {props.fuente2} fuente3 = {props.fuente3} fuente4 = {props.fuente4} fuente5 = {props.fuente5} 
            fuente6 = {props.fuente6} numeroMenu = {props.numeroMenu} filtro = {props.filtro} reverb = {props.reverb} 
            bitcrusher={props.bitcrusher}/>
            <button id = "invisible"></button>
        </div>
        
        
    </div>)
}

function BotonBusqueda(props) {
    let fuente 
    
    if (props.numeroMenu === 1) {fuente = props.fuente1}
    if (props.numeroMenu === 2) {fuente = props.fuente2}
    if (props.numeroMenu === 3) {fuente = props.fuente3}
    if (props.numeroMenu === 4) {fuente = props.fuente4}
    if (props.numeroMenu === 5) {fuente = props.fuente5}
    if (props.numeroMenu === 6) {fuente = props.fuente6}

    fuente.current.dispose()

    async function asignarSonido() {
        let url = "https://freesound.org/apiv2/sounds/" + props.id + "?token=" + claveAPI

        fetch(url).then((response) => response.json()).then((value)=> 
            fuente.current = new Tone.Sampler({volume: 0, urls: {C4: value.previews["preview-hq-mp3"]}, 
            onload: ()=> {console.log(props.setSeleccionSample(false))}}).chain(props.filtro.current, props.bitcrusher.current, 
                props.reverb.current, Tone.Destination))
              
    }
    

    return(
        <button id = "botonResultado" onClick={asignarSonido}>{props.nombre}</button>
    )
}



/// Pasar filtros y efectos como props para reconstruir la cadena. 