function tampilkanhasil(){
    var variable1 = parseInt(document.getElementById('variable1').value);
    var variable2 = document.getElementById('variable2').value;
    var variable3 = parseInt(document.getElementById('variable3').value);
    if(variable2 == '+'){
      var hasil = variable1 + variable3;
    }else if(variable2 == '*'){
      var hasil = variable1 * variable3;
    }else if(variable2 == '/'){
      var hasil = variable1 / variable3;
    }else if(variable2 == '-'){
      var hasil = variable1 - variable3;
    }
    
    document.getElementById('hasiljumlah').innerHTML = "hasil = "+hasil;
}