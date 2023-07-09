namespace MyNamespace
{
    public class Program
    {
        public static void Main()
        {
            while (true)
            {
                Console.Write("First Number: ");
                Double a = Convert.ToDouble(Console.ReadLine());
                Console.Write("Second Number: ");
                Double b = Convert.ToDouble(Console.ReadLine());
                Console.Write("Opration: ");
                string? input = Console.ReadLine();
                char? op = null;
                if (input?.Length == 1 && char.TryParse(input, out char parsedChar))
                {
                    op = parsedChar;
                }
                if (Equals(op, '+'))
                {
                    Console.WriteLine("The answer is: " + Add(a, b));
                }
                if (Equals(op, '-'))
                {
                    Console.WriteLine("The answer is: " + Sub(a, b));
                }
                if (Equals(op, '*'))
                {
                    Console.WriteLine("The answer is: " + Mul(a, b));
                }
                if (Equals(op, '/'))
                {
                    Console.WriteLine("The answer is: " + Div(a, b));
                }
                Console.WriteLine("");
            }

        }
        public static Double Add(Double a, Double b)
        {
            return a + b;
        }
        public static Double Sub(Double a, Double b)
        {
            return a - b;
        }
        public static Double Mul(Double a, Double b)
        {
            return a * b;
        }
        public static Double Div(Double a, Double b)
        {
            return a / b;
        }

    }
}