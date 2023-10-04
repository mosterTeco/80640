const formulario = document.getElementById("formulario");
    let comp = (titulo, label, textField) => {
        return`
        <fieldset>
            <legend>${titulo}</legend>
            <label for="name">${label} </label>
            <input type="text" name="label" id="label">
            <label for="name">${textField} </label>
            <input type="text" name="textFiedl" id="textField">
        </fieldset>`
        }

        let env = (boton) => {
        return `
            <input type="submit"${boton} value="Enviar" id="botn"></input>
        `
        }

        formulario.innerHTML = comp("Informacion Personal","Nombre:","Correo electrónico:")
        formulario.innerHTML += comp("Informacion de Dirección","Direccion:","Ciudad:")

        //formulario.insertAdjacentHTML("afterbegin",env())
        //formulario.insertAdjacentHTML("afterbegin", comp("Informacionn Personal","Nombre:","Correo electrónico:"))
        //formulario.insertAdjacentHTML("afterbegin", comp("Informacion de Dirección","Direccion:","Ciudad:"))