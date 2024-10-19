var num7 = document.getElementById("num7");
var num8 = document.getElementById("num8");
var num9 = document.getElementById("num9");
var numsum = document.getElementById("num+");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");
var numsub = document.getElementById("num-");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var nummul = document.getElementById("num*");
var numC = document.getElementById("numC");
var num0 = document.getElementById("num0");
var numequal = document.getElementById("num=");
var numdiv = document.getElementById("num/");
var inputbox =document.getElementById("calctext");
var value=null;
var s1="";
num7.addEventListener('click',function(){
    s=num7.id;
    inputbox.value= inputbox.value+ s[3];
    s1+=s[3]; 
});
num8.addEventListener('click',function(){
    s=num8.id;
    inputbox.value= inputbox.value+ s[3]; 
    s1+=s[3];
});
num9.addEventListener('click',function(){
    s=num9.id;
    inputbox.value= inputbox.value+ s[3];
    s1+=s[3]; 
});
num4.addEventListener('click',function(){
    s=num4.id;
    inputbox.value= inputbox.value+ s[3];
    s1+=s[3]; 
});
num5.addEventListener('click',function(){
    s=num5.id;
    inputbox.value= inputbox.value+ s[3];
    s1+=s[3]; 
});
num6.addEventListener('click',function(){
    s=num6.id;
    inputbox.value= inputbox.value+ s[3];
    s1+=s[3]; 
});
num1.addEventListener('click',function(){
    s=num1.id;
    inputbox.value= inputbox.value+ s[3];
    s1+=s[3]; 
});
num2.addEventListener('click',function(){
    s=num2.id;
    inputbox.value= inputbox.value+ s[3];
    s1+=s[3]; 
});
num3.addEventListener('click',function(){
    s=num3.id;
    inputbox.value= inputbox.value+ s[3]; 
    s1+=s[3];
});

num0.addEventListener('click',function(){
    s=num0.id;
    inputbox.value= inputbox.value+ s[3]; 
    s1+=s[3];
});
function VarOperator(op) { 
    this.operation = op;
    this.evaluate = function evaluate(param1, param2) {
        switch(this.operation) {
            case "+":
                return param1 + param2;
            case "-":
                return param1 - param2;
            case "*":
                return param1 * param2;
            case "/":
                return param1 / param2;
        }
    }
}
var vo = new VarOperator("+");
numsum.addEventListener('click',function(){
    s=numsum.id;
    if(value===null)
    {
        value=Number(inputbox.value);
        vo.operation = "+";
        console.log(value);
        s1="";
    }
    else
    {
        var value2=Number(s1);
        value=vo.evaluate(value,value2);
        vo.operation = "+";
        console.log(value);
        s1="";
    }
    inputbox.value= inputbox.value+ s[3]; 
});
numsub.addEventListener('click',function(){
    s=numsub.id;
    if(value===null)
    {
        value=Number(inputbox.value);
        vo.operation = "-";
        console.log(value);
        s1="";
    }
    else
    {
        var value2=Number(s1);
        value=vo.evaluate(value,value2);
        vo.operation = "-";
        console.log(value);
        s1="";
    }
    inputbox.value= inputbox.value+ s[3]; 
});
nummul.addEventListener('click',function(){
    s=nummul.id;
    if(value===null)
    {
        value=Number(inputbox.value);
        vo.operation = "*";
        console.log(value);
        s1="";
    }
    else
    {
        var value2=Number(s1);
        value=vo.evaluate(value,value2);
        vo.operation = "*";
        console.log(value);
        s1="";
    }
    inputbox.value= inputbox.value+ s[3]; 
});
numdiv.addEventListener('click',function(){
    s=numdiv.id;
    if(value===null)
    {
        value=Number(inputbox.value);
        vo.operation = "/";
        console.log(value);
        s1="";
    }
    else
    {
        var value2=Number(s1);
        value=vo.evaluate(value,value2);
        vo.operation = "/";
        console.log(value);
        s1="";
    }
    inputbox.value= inputbox.value+ s[3];  
});
numequal.addEventListener('click',function(){
    var value2=Number(s1);
    value=vo.evaluate(value,value2);
    console.log(value);
    inputbox.value= value; 
    s1="";    
});
numC.addEventListener('click',function(){
    inputbox.value= null; 
    value=null;
    s1="";
});

