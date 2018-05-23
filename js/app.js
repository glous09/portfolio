  $(function() {
    setTimeout(function(){
      $('.text-animation').removeClass('hidden');
    }, 500);
  })()

 //Navbar
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });
