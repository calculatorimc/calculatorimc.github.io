function sendForm(width,height,formular,url)
{window.open('about:blank','Popup','width='+width+',height= '+height+',scrollbars=yes,resizable=yes');window.setTimeout(function(){document.getElementsByName(formular)[0].submit();},1);;if(url){window.location.href=url;};}
