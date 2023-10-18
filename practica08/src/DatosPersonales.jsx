function DatosPersonales() {
    return(
        <>
        <fieldset>
            <legend>Datos Personales</legend>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre"/>
            <label htmlFor="apellido">Apellido Paterno:</label>
            <input type="text" id="apellidoPaterno"/>
            <label htmlFor="apellido">Apellido Materno:</label>
            <input type="text" id="apellidoMaterno"/>
            <label htmlFor="matricula">Contraseña:</label>
            <input type="password" id="password"/>
        </fieldset>
        
        </>

    )
    
}

export default DatosPersonales