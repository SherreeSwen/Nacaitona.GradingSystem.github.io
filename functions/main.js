function buttonPress(){
    let average, sum;
    let i, w, e, p, n, s, r;

    i = Number(document.getElementById('Info Management').value);
    w = Number(document.getElementById('Web System').value);
    e = Number(document.getElementById('Ethics').value);
    p = Number(document.getElementById('PathFit4').value);
    n = Number(document.getElementById('Networking 1').value);
    s = Number(document.getElementById('System Integ').value);
    r = Number(document.getElementById('Rizal').value);

    sum = i + w + e + p + n + s + r;
    average =  sum / 7;

    document.getElementById('ave').innerHTML = 'Average - ' + parseFloat(average).toFixed(2);

if (average > 89 && average < 101){
    document.getElementById('rem').innerHTML = 'Remark - PASSED';
    document.getElementById('desc').innerHTML = 'Descriptor - OUTSTANDING';
} else if (average > 84 && average < 90){
    document.getElementById('rem').innerHTML = 'Remark - PASSED';
    document.getElementById('desc').innerHTML = 'Descriptor - VERY SATISFACTORY';
} else if (average > 79 && average < 85){
    document.getElementById('rem').innerHTML = 'Remark - PASSED';
    document.getElementById('desc').innerHTML = 'Descriptor - SATISFACTORY';
} else if (average > 74 && average < 80){
    document.getElementById('rem').innerHTML = 'Remark - PASSED';
    document.getElementById('desc').innerHTML = 'Descriptor - FAIRLY SATISFACTORY';
} else if (average < 75){
    document.getElementById('rem').innerHTML = 'Remark - FAILED';
    document.getElementById('desc').innerHTML = 'Descriptor - DID NOT MEET EXPECTATIONS';
} else {
    window.alert('----W A R N I N G----\nDescriptor - DOES NOT EXIST');
    document.getElementById('rem').innerHTML = 'Remark - ERROR!';
    document.getElementById('desc').innerHTML = 'Descriptor - DOES NOT EXIST';
} }
function reset(){
    sum = 0;
    average = 0;
    document.getElementById('ave').innerHTML = 'Average - ';
    document.getElementById('rem').innerHTML = 'Remark - ';
    document.getElementById('desc').innerHTML = 'Descriptor - ';
    document.getElementById('Info Management').value = '';
    document.getElementById('Web System').value = '';
    document.getElementById('Ethics').value = '';
    document.getElementById('PathFit4').value = '';
    document.getElementById('Networking 1').value = '';
    document.getElementById('System Integ').value = '';
    document.getElementById('Rizal').value = '';
}