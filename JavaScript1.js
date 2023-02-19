document.title="Расчет Прямоугольника"
document.bgColor="blue"

function AreaTraingle() {
    var  a = document.forma1.t1.value;
    var  b = document.forma1.t2.value;
    var  S = a * b;
    document.forma1.res.value = S;
}
function AreaTraingle1() {
    var  c = document.forma2.t1.value;
    var  v = document.forma2.t2.value;
    var  S1 = c * (v*v);
    document.forma2.res.value = S1;
}
function AreaTraingle2() {
    var  n = document.forma3.t1.value;
    var  m = document.forma3.t2.value;
    var  P = 2 * n * m;
    document.forma3.res.value = P;
}