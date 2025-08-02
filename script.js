function c() {
  var k = document.getElementById('d').value;
  var l = document.getElementById('e').value;
  var h = document.getElementById('h');
  if (k === '' || l === '') {
    h.style.opacity = '1';
    h.style.visibility = 'visible';
    setTimeout(function() {
      h.style.opacity = '0';
      setTimeout(function() {
        h.style.visibility = 'hidden';
      }, 300);
    }, 3000);
    return false;
  }
  var u = "334d704c40435254";
  var p = "64304337436833436b";
  var x = '', y = '';
  for (var i = 0; i < u.length; i += 2) {
    x += String.fromCharCode(parseInt(u.substr(i, 2), 16));
  }
  for (var i = 0; i < p.length; i += 2) {
    y += String.fromCharCode(parseInt(p.substr(i, 2), 16));
  }
  if (k === x && l === y) {
    document.cookie = 'CRT_session=active; path=/';
    return true;
  }
  h.style.opacity = '1';
  h.style.visibility = 'visible';
  setTimeout(function() {
    h.style.opacity = '0';
    setTimeout(function() {
      h.style.visibility = 'hidden';
    }, 300);
  }, 3000);
  return false;
}

window.onload = function() {
  var h = document.getElementById('h');
  h.style.opacity = '0';
  h.style.visibility = 'hidden';
};
