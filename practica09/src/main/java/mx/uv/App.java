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
            (request, response)-> "{'alumno':'john','matricula':'s21','carerra':'tecnologias'}"
        );
    }
}
