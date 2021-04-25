Part 1a
1. values added: 20
2. final result: 20
3. values added: 20
4. Error. Because result is not defined outside of if block.
5. Error. Because we have assignment to constant value result.
6. Error. Even if we comment out line 9, it still is not defined outside of if block.

Part 1b
1. 3. Because the for loop will stop when i == length of prices = 3
2. 150. Because this var is 300 discount 50% when the loop stops.
3. 150. Same, because 150 after rounding is still 150.
4. It will return an array [50. 100, 150], because 100, 200, 300 discounted 50% are 50, 100, 150.
5. Error. Because i is not defined here.
6. Error. Because discontedPrice is not defined here.
7. 150. Because finalPrice is defined in the same scope.
8. It will return an array [50. 100, 150], because 100, 200, 300 discounted 50% are 50, 100, 150 and the returned variable discounted IS defined.
9. Error. Because i is not defined.
10. 3. Because length is 3 and we didn't assign new value to any constant variable.
11. It will return an array [50. 100, 150], because 100, 200, 300 discounted 50% are 50, 100, 150 and we haven't changed any constant value.
12. 
A. student.name  
B. student["Grad Year"]  
C. student.greeting();  
D. student["Favorite Teacher"].name  
E. student.courseLoad[0]  
13.   
A. 32, because 2 will be cast to string  
B. 1, because 3 will be casted to int, since there is no - operand for strings  
C. 3, null will be cast to int 0  
D. 3null, because null will be cast to string "null"  
E. 4, because true will be cast to int 1 (false to 0)  
F. 3undefined, because undefined will be cast to string "undefined"  
E. NaN, because there isn't a valid cast available.  
14.  
A. true. Because string '2' will be cast as int 2.  
B. false. Because first char 2 > 1 using string comparison  
C. true. Because string '2' will be cast as int 2.  
D. false. Because triple equal sign does strict comparison, so different data types will always get a false.  
E. false. Because true will be cast as 1 and 1 != 2  
F. true. Because Boolean(2) will be true.  
15. === (triple equal) is strict comparison, which means 2 things to be compared must be exactly the same. == is normal comparison, and can be used to compare different types (as in question 14) with a set of rules.   
16. JS code in another file.  
17. The result is an array [2,4,6]. When i < array.length == 3, the numbers in array will be selected and put into doSomething(), which double this number passed in and return. So each number is doubled and pushed into newArr and finally returned, and we get this result.  
18. JS code in another file.  
19.  
1  
4  
3  
2  
