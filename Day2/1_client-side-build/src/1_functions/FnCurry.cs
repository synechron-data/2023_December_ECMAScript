class Converter
{
    public static Func<double, strict> Create(string toUnit, double factor, double offset)
    {
        return (double input) => $"{((offset + input) * factor):F2}{toUnit}";
    }
}