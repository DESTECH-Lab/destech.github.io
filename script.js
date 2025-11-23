// Simple JS for menu toggle and smooth scrolling
document.addEventListener('DOMContentLoaded', function(){
  const menu = document.getElementById('menuToggle');
  const nav = document.querySelector('.nav');
  menu.addEventListener('click', function(){
    if(nav.style.display === 'flex') nav.style.display = '';
    else nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '8px';
    nav.style.background = 'white';
    nav.style.padding = '12px';
    nav.style.position = 'absolute';
    nav.style.right = '20px';
    nav.style.top = '64px';
    nav.style.borderRadius = '8px';
    nav.style.boxShadow = '0 10px 30px rgba(15,23,32,0.08)';
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
      // hide nav on mobile after click
      if(window.innerWidth < 860 && nav) nav.style.display = '';
    });
  });
});