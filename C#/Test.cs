namespace Idk
{
    public class Test
    {
        public static void Main(string[] args)
        {
            Console.Write("First value: ");
            double a = Convert.ToDouble(Console.ReadLine());
            Console.Write("Second value: ");
            double b = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine(Math.Sqrt(a * a + b * b));
        }

    }
}