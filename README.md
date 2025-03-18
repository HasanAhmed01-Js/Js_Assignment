# Assignment JS

<br/>
<br/>
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
<br/>

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

<br/>
<br/>

### TaskThree : Predict Avarage Waiting Time 

> **Input**: The function will take 2 inputs,
> One is an Array of The time of those who have been viva, the other is main user's serial number. *Serial Number > length of array*

> **Ouput** : Find the rounded average of those who have been viva. Find how many are left before the main user. And using these two things, find the *waiting time* of main user's and return it.

> **Example** : Example: array = [ 3, 5, 7, 11, 6 ] , serial Number = 10
*So the average interview time of 5 people here is 6 minutes (rounded). The serial number of the main user is 10, which means that there are 10-1 = 9 people before him. Since there are 5 people, there are 4 people left before the main user. Now you tell me how much time the main user will take?*

> **Challenge** : If the first input is not an Array and the second input is not a number, **Invalid Input** will be returned.

``` 
Input : [ 3, 5, 7, 11, 6 ], 10
Output : 24

Input : [13, 2], 6
Output : 24

Input : [13, 2, 6, 7, 10], 6
Output : 0

Input : [6], 4
Output : 12

Input : 7 , 10
Output : Invalid Input

Input : "[6,2]", 9
Output : Invalid Input

Input : [7, 8, 3, 4, 5], "9"
Output : Invalid Input

``` 