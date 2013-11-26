function b() {
    var RE = new RegExp('/(\d\d\d\d\d\d\d\d)','g');
    var x=document.body.innerHTML.replace(RE,"<a href='http://www.pivotaltracker.com/story/show/$1' window=_new>$&</a>");
    document.body.innerHTML=x;
}
b();



