
function headingSize(str, size)
{
    var elem = document.querySelectorAll(str);
    
    for(var i = 0; i < elem.length; i++)
    {
        elem[i].style.fontSize = size + 'px';
    }
}

function fullwidthimg(str)
{
    var elem = document.querySelectorAll('.' + str);
    for(var i = 0; i < elem.length; i++)
    {
        elem[i].style.maxWidth = '100%';
        elem[i].parentElement.style.marginBottom = '8px';

    }
}

function paddingTopBottom(elemid, top, bottom)
{
   var elem = document.querySelectorAll('#' + elemid);
   for(var i = 0; i < elem.length; i++)
   {
       elem[i].style.paddingTop = top + 'px';
       elem[i].style.paddingBottom = bottom + 'px';
   }
}

function minHeight(str, height)
{
    var elem = document.querySelectorAll('.' + str);
    for(var i = 0; i < elem.length; i++)
    {
        elem[i].style.minHeight = height + 'px';
    }
}

function removeElementAndChildrenByClassName(elem)
{
    $('.' + elem).remove();
}

function removeElementAndChildrenByTagName(elem)
{
    $(elem).remove();
}

