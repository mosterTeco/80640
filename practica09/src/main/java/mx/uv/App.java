package mx.uv;
import static spark.Spark.*;

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
        get("/", 
            (request, response)-> "<h1>Hola Mundo!</h1>"
        );
        get("/r1", 
            (request, response)-> "<h1>Adios Mundo!</h1>"
        );
        get("/r2", 
            (request, response)-> "<h1>Que tal Mundo!</h1>"
        );
        get("/r3", 
            (request, response)-> "<h1>Ok Mundo!</h1>"
        );
        get("/r4", 
            (request, response)-> "{\"alumno\":\"john\",\"matricula\":\"s21\",\"carerra\":\"tecnologias\"}"
        );
    }
}
