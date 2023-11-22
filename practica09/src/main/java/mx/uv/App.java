package mx.uv;
import static spark.Spark.*;
import com.google.gson.*;

/**
 * Hello world!
 *
 */
public class App 
{
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

        System.out.println( "Hola Mundo!" );
        get("/index.html", 
            (request, response)-> "<h1>Hola Mundo!</h1>"
        );

        post("/",
        (request, response) -> "<h1>Soy el post</h1>"
        );

        get("/r1", 
            (request, response)-> {
                String parametro = request.queryParams("apellido");
                System.out.println("Tipo de contenido ruta1: " + request.contentType());
                System.out.println(parametro);
                System.out.println("Esto es el request: " + request.contentType());
                return "<h1>Adios mundo! "+parametro+"</h1>";
            }
        );

        post("/r1", 
            (request, response)-> {
                String parametro = request.queryParams("apellido");
                System.out.println("Tipo de contenido ruta1: " + request.contentType());
                System.out.println(parametro);
                System.out.println("Esto es el request: " + request.contentType());
                return "<h1>Adios mundo! "+parametro+"</h1>";
            }
        );

        get("/r2", 
            (request, response)-> {
                //String parametro = request.queryParams("nombre");
                String parametro = request.body();
                System.out.println("Tipo de contenido: " + request.contentType());
                JsonObject respuesta = new JsonObject();
                respuesta.addProperty("msj", "hola");
                respuesta.addProperty("apellido", parametro);
                response.type("application/json");
                return respuesta;
            }
        );

        post("/r2", 
            (request, response)-> {
                //String parametro = request.queryParams("nombre");
                String parametro = request.body();
                System.out.println("Tipo de contenido: " + request.contentType());
                System.out.println("El body tiene: " + parametro);

                //Este objeto sirve para acceder a los elementos de la petición 
                JsonParser parser = new JsonParser();
                JsonElement arbol = parser.parse(parametro);
   
   
                //Este objeto sirve para construir la respuesta en Json
                JsonObject respuesta = new JsonObject();
                respuesta.addProperty("msj", "hola");
                respuesta.addProperty("apellido", arbol.getAsJsonObject().get("nombre").toString());

                response.type("application/json");
                return respuesta;
            }
        );


        get("/r3", 
            (request, response)-> "<h1>Ok Mundo!</h1>"
        );

        /*
        get("/r4", 
            (request, response)-> "{\"alumno\":\"john\",\"matricula\":\"s21\",\"carerra\":\"tecnologias\"}"
        );*/

         get("/r4", 
            (request, response)-> {
                System.out.println("Esto es el request: " + request.contentType());
                response.type("application/json");
                return "{\"alumno\":\"john\",\"matricula\":\"s21\",\"carerra\":\"tecnologias\"}";
            });
            
    }
}
