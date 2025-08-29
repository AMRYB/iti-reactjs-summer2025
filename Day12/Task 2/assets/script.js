document.body.onload = function (){

    var l1 = document.createElement('label');
    l1.innerText = 'c';
    l1.style.position = 'absolute';
    l1.style.left = '60px';
    l1.style.top = `145px`;

    var l2 = document.createElement('label');
    l2.innerText = 'b';
    l2.style.position = 'absolute';
    l2.style.left = '170px';
    l2.style.top = `145px`;

    var l3 = document.createElement('label');
    l3.innerText = 'a';
    l3.style.position = 'absolute';
    l3.style.left = `90px`;
    l3.style.top = '290px';

    document.body.appendChild(l1);
    document.body.appendChild(l2);
    document.body.appendChild(l3);
}