var x  = 36
var y  = 8
var yn  = 0
function euclid (a,b){
  var mod = a%b
while (mod>0)
{
 a = b 
 b = mod
 mod = a % b
 console.log('a = '+a+' b ='+b)
} 
return b
}
console.log ( 'ค่าหรม ของ'+ x + 'และ' +y+ ' คือ '+euclid(x,y))


var x = 10
var sum = 1
while(x>0)
{
    sum = x*sum
    x=x-1
    console.log(sum)
}


var array = [1,2,3,4,5]
for (var data of array)
{
    console.log(data)
}



var array = [10,20,30,40]
var sum = 0
for (var i = 0;i<array.length;i++ )
{
    sum=sum+array[i]
}
sum=sum/array.length
console.log(sum)


var x =
{
    ' name ' : 'Bee',
    ' age '  : '19'
}
console.log(x)


var pm = 
{
    'fname ': 'ประยุทธ์',
    'lname' : 'รัฐประหาร',
    ' age ' : '72',
}
var vicepm = 
{
    'fname ': 'ลุงป้อม',
    'lname' : 'ป่ารอยต่อ',
    ' age ' : '36',
}
var newpm = 
{
    'fname ': 'ป๊อก',
    ' age ' : '78',
}
console.log(vicepm['lname'])

var ourPM =
[
    {
        'fname ': 'ประยุทธ์',
        'lname' : 'รัฐประหาร',
        ' age ' : '72',
    },
    {
        'fname ': 'ลุงป้อม',
        'lname' : 'ป่ารอยต่อ',
        ' age ' : '36',
    }
    ,
    {
        'fname ': 'ป๊อก',
        ' age ' : '78',
    }
]
console.log(ourPM[1]['lname'])