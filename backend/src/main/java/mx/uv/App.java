package mx.uv;
import static spark.Spark.*;
import com.google.gson.*;

/**
 * Hello world!
 *
 */
public class App 
{
    static String parametrouno = "";
    static String parametrodos = "";

    public static void main( String[] args )
    {
        options("/*",(request,response)->{

        String accessControlRequestHeaders=request.headers("Access-Control-Request-Headers");

        if(accessControlRequestHeaders!=null){

        response.header("Access-Control-Allow-Headers",accessControlRequestHeaders);

        }

        String accessControlRequestMethod=request.headers("Access-Control-Request-Method");

        if(accessControlRequestMethod!=null){

        response.header("Access-Control-Allow-Methods",accessControlRequestMethod);

        }

        return "OK";

        });

        before((request,response)->response.header("Access-Control-Allow-Origin","*"));
        System.out.println( "Hello World!" );

        get("/crear", 
            (request, response) -> {
            parametrouno = request.queryParams("nombre");
            parametrodos = request.queryParams("apellido");

            return "¡Creación con éxito " + parametrouno + "! Que tengas bonito día.";
            
        });

        get("/leer", 
            (request, response) -> {
                if(parametrouno == "" || parametrodos ==""){
                    return "Los campos (o alguno de ellos) están vacios";
                }else{
                    return "Hola " + parametrouno + " " + parametrodos + ". Lectura con éxito, Nos vemos.";
                }
        });

        get("/eliminar", 
            (request, response) -> {
                parametrouno = "";
                parametrodos = "";
                return "Eliminación con exito";
        });

        get("/editar", 
            (request, response) -> {
                String nuevoNombre = request.queryParams("nombre");
                String nuevoApellido = request.queryParams("apellido");

                if (nuevoNombre != null) {
                    parametrouno = nuevoNombre;
                }

                if (nuevoApellido != null) {
                    parametrodos = nuevoApellido;
                }
                
                return "Datos editados con éxito";
        });
    }
}
