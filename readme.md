# In depth Javascript Learning

This is a collection of resources to learn Javascript in depth. It is a work in progress and will be updated regularly.

## Language Basics

### Operator precedence
| Operator | precedence |associativity|operator type|
|----------|------------|-------------|-------------|
|`()`|20|left|grouping|
|`[]`|20|left|member access|
|`.`|20|left|member access|
|`new`|20|left|member access|
|`++`|20|right|postfix|
|`--`|20|right|postfix|
|`!`|19|right|unary|
|`~`|19|right|unary|
|`+`|19|right|unary|
|`-`|19|right|unary|
|`typeof`|19|right|unary|
|`void`|19|right|unary|
|`delete`|19|right|unary|
|`*`|18|left|multiplicative|
|`/`|18|left|multiplicative|
|`%`|18|left|multiplicative|
|`+`|17|left|additive|
|`-`|17|left|additive|
|`<<`|16|left|shift|
|`>>`|16|left|shift|
|`>>>`|16|left|shift|
|`<`|15|left|relational|
|`<=`|15|left|relational|
|`>`|15|left|relational|
|`>=`|15|left|relational|
|`in`|15|left|relational|
|`instanceof`|15|left|relational|
|`==`|14|left|equality|
|`!=`|14|left|equality|
|`===`|14|left|equality|
|`!==`|14|left|equality|
|`&`|13|left|bitwise AND|
|`^`|12|left|bitwise XOR|
|`\|`|11|left|bitwise OR|
|`&&`|10|left|logical AND|
|`\|\|`|9|left|logical OR|
|`?:`|8|right|conditional|
|`=`|3|right|assignment|
|`+=`|3|right|assignment|
|`-=`|3|right|assignment|
|`*=`|3|right|assignment|
|`/=`|3|right|assignment|
|`%=`|3|right|assignment|
|`<<=`|3|right|assignment|
|`>>=`|3|right|assignment|
|`>>>=`|3|right|assignment|
|`&=`|3|right|assignment|
|`\|=`|3|right|assignment|
|`^=`|3|right|assignment|
|`,`|2|left|comma|

### Function declearation vs function expression

Function declaration:

    function foo() {
        // ...
    }

Function expression:
    
        var foo = function() {
            // ...
        }



