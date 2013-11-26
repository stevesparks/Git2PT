function b() {
    var RE = /Fixes #(\d\d\d\d\d\d\d\d)/g;
    var x=document.body.innerHTML.replace(RE,"<a href='http://www.pivotaltracker.com/story/show/$1' window=_new>$&</a>");
    document.body.innerHTML=x;
    console.log(x);
    alert('Replaced');
}
b();



