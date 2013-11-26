function b(){var x=document.body.innerHTML.replace(/(\d\d\d\d\d\d\d\d)/g,"<a href='http://www.pivotaltracker.com/story/show/$1' window=_new>$&</a>"));document.body.innerHTML=x;}
b();


