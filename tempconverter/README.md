Built using Vite

Vite install:
----------------

npm create vite@latest tempconverter -- --template react

After that,

cd tempconverter
npm install
npm run dev

Run http://localhost:5173/ in browser

For test setup refer to this link: works great
--------------------------------------------------

https://www.robinwieruch.de/vitest-react-testing-library/


------------------------------------------------------------------
Write a component called App which accepts the temperature input in Celsius and converts it to Kelvin and Fahrenheit. Your component should have one input JSX element of type number that accepts input from the user.

Your component should return the following string in the p JSX element, as indicated in the starting code:

{X}°C is {Y}°F and {Z}K.

Remember that X, Y and Z represent the temperature in Celsius, Fahrenheit and Kelvin respectively.

Use the formulas below for the conversions.

Celsius to Kelvin: K = C + 273.15

Celsius to Fahrenheit: F = (C * 9/5) + 32