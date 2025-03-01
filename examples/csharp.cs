using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace VscodeSyntaxHighlightDemo
{
    // Enum declaration
    public enum LogLevel
    {
        Debug,
        Info,
        Warning,
        Error,
        Critical
    }

    // Interface declaration
    public interface ILogger
    {
        void Log(LogLevel level, string message);
    }

    // Class declaration
    public class ConsoleLogger : ILogger
    {
        // Constant and static field
        private const string Prefix = "[LOG]";
        private static int logCount = 0;

        // Property with getter and setter
        public string Name { get; set; }

        // Constructor
        public ConsoleLogger(string name)
        {
            Name = name;
        }

        // Method with parameters and exception handling
        public void Log(LogLevel level, string message)
        {
            try
            {
                logCount++;
                Console.WriteLine($"{Prefix} {level}: {message}");
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Logging error: {ex.Message}");
            }
        }

        // Async method with Task
        public async Task DelayedLog(LogLevel level, string message)
        {
            await Task.Delay(1000);
            Log(level, message);
        }
    }

    // Struct declaration
    public struct Point
    {
        public int X { get; }
        public int Y { get; }

        public Point(int x, int y)
        {
            X = x;
            Y = y;
        }

        public override string ToString() => $"({X}, {Y})";
    }

    // Delegate declaration
    public delegate void LogDelegate(LogLevel level, string message);

    // Main program class
    class Program
    {
        // Main method
        static void Main(string[] args)
        {
            ConsoleLogger logger = new ConsoleLogger("MainLogger");

            // Debugging breakpoint
            System.Diagnostics.Debugger.Break();

            // Using enum, method calls
            logger.Log(LogLevel.Info, "Application started");

            // List and LINQ usage
            List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
            var evens = numbers.Where(n => n % 2 == 0).ToList();
            Console.WriteLine($"Even numbers: {string.Join(", ", evens)}");

            // Anonymous method and lambda expression
            LogDelegate logDelegate = (level, message) => logger.Log(level, message);
            logDelegate(LogLevel.Warning, "This is a warning message");

            // Using struct
            Point p = new Point(10, 20);
            Console.WriteLine($"Point: {p}");

            // Await async method
            Task.Run(async () => await logger.DelayedLog(LogLevel.Critical, "Delayed critical log")).Wait();

            // Using reflection
            Type type = typeof(ConsoleLogger);
            Console.WriteLine($"Class name: {type.Name}");
        }
    }
}
