function bclick(val)
{
    document.getElementById("inp").value+=val;
}
function allclrdisp()
{
document.getElementById("inp").value=""
}
function eql()
{
    var text=document.getElementById("inp").value
var result=eval(text)
document.getElementById("inp").value=result
}
function clrdisp()
{
    var value = document.getElementById("inp").value;
    document.getElementById("inp").value = value.substr(0, value.length - 1);
}

$(document)