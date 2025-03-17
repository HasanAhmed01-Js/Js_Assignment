# Assignment JS

### TaskOne : Tax Calculator

> function will take two inputs:
> Monthly Income - a positive number that represents monthly income.
> Monthly Expenses - a positive number that represents monthly expenses.
> The function will calculate 20% of the difference between income and expenses and return it as tax.

```
Input :
First input: A positive number which is the monthly income. (0<=income )
Second input: A positive number which is the monthly expenses. (0<=expense )
Income will always be equal to or greater than expense. (income >=expense)
```

> **Challenge** : If any input is not a positive number, or if the expense amount is greater than the income, the string **"Invalid Input"** will be returned.
<br/>

``` 
[ INPUT : 10000, 3000 ] [OUTPUT : 1400] 
[ INPUT : 5000, 1500 ] [OUTPUT : 700] 
[ INPUT : 7000, 7000 ] [OUTPUT : 0] 
[ INPUT : -5000, 2000 ] [OUTPUT : Invalid Input] 
[ INPUT : 6000, -1500] [OUTPUT : Invalid Input] 

```

<br/>
<br/>

### TaskTwo : Calculate Admission Final Score 

> An object will be taken as input. The object must have the properties name, testScore, schoolGrade, isFFamily. Where
> typeof name = string
> typeof testScore= number ( testScore <= 50)
> typeof schoolGrade = number ( schoolGrade <=30)
> typeof isFFamily = boolean
<br/>

> **Challenge** :If the input is not an object, an **"Invalid Input"** error message will be returned.

<br/>

``` 

INPUT : { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }
OUTPUT : true

INPUT : { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }
OUTPUT : false

INPUT : "hello" 
OUTPUT : Invalid Input

INPUT : { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }
OUTPUT : false

``` 
