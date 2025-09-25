function calculadora(
  valor1: number | string,
  valor2: number | string,
  operacao: string
): number | null {
  const num1 = parseFloat(valor1 as string);
  const num2 = parseFloat(valor2 as string);

  if (isNaN(num1) || isNaN(num2)) {
    return null;
  }

  switch (operacao) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : null;
    case '^':
      return Math.pow(num1, num2);
    default:
      return null;
  }
}