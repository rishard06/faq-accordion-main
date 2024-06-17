const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelector('.active')?.classList.remove('active');
    this.classList.add('active');
    console.log(this.classList);
    
    const parag = this.nextElementSibling;
    const plus = this.querySelector('.icon-plus');
    const minus = this.querySelector('.icon-minus');
    
    
    if(parag.style.maxHeight) {
      parag.style.maxHeight = null;
      plus.style.display = 'block';
      minus.style.display = 'none';
    }else{
      parag.style.maxHeight = "100%";
      plus.style.display = 'none';
      minus.style.display = 'block';  
    }
    //   parag.style.maxHeight = null;
    //   plus.style.display = 'block';
    //   minus.style.display = 'none';
    // }
  });
});
