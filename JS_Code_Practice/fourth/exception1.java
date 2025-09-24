public class exception1
{
    public static void main(String args[])
    {
        int a=10;
        int b=15;

        try{
             System.out.println(a/b);
             System.out.println(a*b);
        }
        catch(ArithmeticException e)
        {
            System.out.println(e);
        }

    }
}