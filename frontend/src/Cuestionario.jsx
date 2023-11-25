import { Box, Button, TextField } from "@mui/material"
import { useState } from "react";
import  axios  from "axios";

function Cuestionario(props) {
    const [Cargando, setCargando] = useState(false) //este es el hook para bloquear el boton 
    const [datosCuestionario, setDatosCuestionario] = useState( //guarda los datos
        {nombre: '', apellido: ''}
    )

    const hacerPeticion = async (method) => {
        
        try{
            let res;
            if (method === 'crear'){
                res = await axios.get('http://localhost:4567/crear', {params: datosCuestionario})
            }else if(method === 'leer'){
                res = await axios.get('http://localhost:4567/leer', {params: datosCuestionario})
            }else if (method === 'eliminar') {
                res = await axios.get('http://localhost:4567/eliminar', { params: datosCuestionario });
            }else if(method === 'editar'){
                res = await axios.get('http://localhost:4567/editar', { params: datosCuestionario});
            }
            return res.data 
        }catch (error){
            throw error
        }
    }

    const procesarCuestionario = async (e) => {
        e.preventDefault()
        setCargando(true) 
        try {
            const resCrear = await hacerPeticion('crear')
            console.log(resCrear)
            setCargando(false)
        } catch (error) {
            console.log('Ocurrio un error', error)
            setCargando(false)
        }
    };

    const leerDatos = async (e) => {
        e.preventDefault()
        console.log("datos recuperados del cuestionario: ", datosCuestionario)
        setCargando(true) 
        try {
          const resLeer = await hacerPeticion('leer');
          console.log(resLeer)
          setCargando(false)
        }catch (error) {
            console.log('Ocurrio un error', error)
            setCargando(false)
        }
    };

    const eliminarDatos = async (e) => {
        e.preventDefault();
        setCargando(true);
        try {
          const resEliminar = await hacerPeticion('eliminar');
          console.log(resEliminar);
          setDatosCuestionario({
            nombre: '',
            apellido: ''
          });

          setCargando(false);
        } catch (error) {
          console.log('Ocurrió un error al eliminar datos', error);
          setCargando(false);
        }
      };
    
    const editarDatos = async (e) => {
        e.preventDefault();
        setCargando(true);
        try {
            const resEditar = await hacerPeticion('editar');
            console.log(resEditar);
            setCargando(false);
        } catch (error) {
            console.log('Ocurrió un error al editar datos', error);
      setCargando(false);
    }
    };

    const cambiosCuestionario = (e) =>{
        const {name, value} = e.target
        setDatosCuestionario ({
            ...datosCuestionario,
            [name]: value
        })
    };

  return (
    <>
        <form onSubmit={procesarCuestionario}> 
        <h1>Inicio de Sesión</h1>
            <Box m={5}> 
                <TextField label="Nombre: " variant="outlined" fullWidth onChange={cambiosCuestionario} name="nombre" value={datosCuestionario.nombre}></TextField>
            </Box>
            <Box m={5}>
                <TextField label="Apellido: " variant="outlined" fullWidth onChange={cambiosCuestionario} name="apellido" value={datosCuestionario.apellido}></TextField>
            </Box>
            <Box m={5}> 
                <Button variant="contained" type= "submit" color="primary" fullWidth disabled={Cargando}>Crear</Button>
            </Box>
            <Box m={5}> 
                <Button variant="contained" onClick={leerDatos} color="primary" fullWidth disabled={Cargando}>Leer</Button>
            </Box>
            <Box m={5}> 
                <Button variant="contained" onClick={eliminarDatos} color="primary" fullWidth disabled={Cargando}>Eliminar</Button>
            </Box>
            <Box m={5}> 
                <Button variant="contained" onClick={editarDatos} color="primary" fullWidth disabled={Cargando}>Editar</Button>
            </Box>
        </form>
    </>
  )  
}

export default Cuestionario