function DatosEscolares() {
    return (
        <>
            <fieldset>
                <legend>Datos Escolares</legend>
                <label htmlFor="carrera">Carrera:</label>
                <input type="text" id="nombre"/>
                <label htmlFor="semestre">Semestre:</label>
                <input type="text" id="semestre"/>
                <label htmlFor="matricula">Matricula</label>
                <input type="text" id="matricula"/>
            </fieldset>
        </>
    )
    
}

export default DatosEscolares