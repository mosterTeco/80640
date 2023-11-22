import { Box, Button, TextField } from "@mui/material"
import { useState } from "react";
import  axios  from "axios";

function Formulario(props) {
    const [Cargando, setCargando] = useState(false) //este es el hook para bloquear el boton 
    const [datosFormulario, setDatosFormulario] = useState( //guarda los datos
        {nombre: '', password: ''}
    )

    const hacerPeticion = async () => {
        try{
            //const res = await axios.post('http://localhost:4567/r2', datosFormulario)
            const res = await axios.get('http://localhost:4567/r2', {params: datosFormulario})
            console.log(res.data)
            return res.data //data es un objeto
        }catch (error){
            throw error
        }
    }

    const procesarFormulario = async (e) => {
        e.preventDefault()
        console.log("datos recuperados del formulario: ", datosFormulario)
        setCargando(true) //se bloque el boton de envio despues de enviarlo
        try {
            const res = await hacerPeticion()
            console.log(res)
            setCargando(false)
            // validar los datos formulario contra lo del backend
            if(datosFormulario.nombre == res.alumno){
                console.log('El usuario es correcto')
            }else{
                console.log('El usuario no es correcto')
            }
        } catch (error) {
            console.log('Ocurrio un error', error)
            setCargando(false)
        }
    }

    const cambiosFormulario = (e) =>{
        //console.log(e.target)
        const {name, value} = e.target
        setDatosFormulario ({
            ...datosFormulario,
            [name]: value
        })
    }

  return (
    <>
        <form onSubmit={procesarFormulario}> 
        <h1>Inicio de Sesión</h1>
            <Box m={5}> 
                <TextField label="Nombre: " variant="outlined" fullWidth onChange={cambiosFormulario} name="nombre" value={datosFormulario.nombre}></TextField>
            </Box>
            <Box m={5}> 
                <TextField label="Contraseña: " variant="outlined" type="password" fullWidth onChange={cambiosFormulario} name="password" value={datosFormulario.password}></TextField>
            </Box>
            <Box m={5}> 
                <Button variant="contained" type= "submit" color="primary" fullWidth disabled={Cargando}>Iniciar Sesión</Button>
            </Box>

        </form>
    </>
  )  
}

export default Formulario

