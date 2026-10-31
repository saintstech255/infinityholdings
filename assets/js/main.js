(function(){
  "use strict";

  /* ---------------- Sticky nav ---------------- */
  var nav = document.querySelector('.navbar');
  function onScroll(){
    if(!nav) return;
    if(window.scrollY > 24){ nav.classList.add('is-scrolled'); }
    else{ nav.classList.remove('is-scrolled'); }
  }
  document.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* ---------------- Mobile menu ---------------- */
  var burger = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  if(burger && mobileMenu){
    burger.addEventListener('click', function(){
      burger.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-open');
      document.body.style.overflow = mobileMenu.classList.contains('is-open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        burger.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------------- Active nav link ---------------- */
  var here = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('[data-nav-link]').forEach(function(a){
    var target = a.getAttribute('href').split('/').pop();
    if(target === here || (here === '' && target === 'index.html')){
      a.classList.add('active');
    }
  });

  /* ---------------- Scroll reveal ---------------- */
  var revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && revealEls.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('is-visible'); });
  }

  /* ---------------- Icons ---------------- */
  var ICONS = {
    technology:'<path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3M7 7h10v10H7z"/>',
    logistics:'<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7zM6.5 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>',
    tourism:'<path d="M12 2s6 5.5 6 11a6 6 0 01-12 0c0-5.5 6-11 6-11z"/><path d="M12 8v6M9 12h6"/>',
    realestate:'<path d="M4 21V9l8-6 8 6v12"/><path d="M9 21v-7h6v7"/>',
    energy:'<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/>',
    security:'<path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/>',
    media:'<path d="M4 5h16v12H4z"/><path d="M8 21h8M9 5V3h6v2"/>'
  };
  function iconSvg(key){
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">'+(ICONS[key]||ICONS.technology)+'</svg>';
  }
  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  var DATA = window.SITE_DATA || {industries:[],companies:[],news:[],jobs:[]};

  /* ---------------- Render: Industries grid ---------------- */
  document.querySelectorAll('[data-render="industries"]').forEach(function(container){
    var limit = parseInt(container.getAttribute('data-limit') || '99', 10);
    var html = DATA.industries.slice(0, limit).map(function(ind, i){
      return '' +
      '<article class="card industry-card reveal">' +
        '<div class="num">0'+(i+1)+'</div>' +
        '<div class="icon">'+iconSvg(ind.icon)+'</div>' +
        '<h3>'+ind.name+'</h3>' +
        '<p>'+ind.short+'</p>' +
        '<a class="card-link" href="companies.html?industry='+ind.slug+'">Explore Sector '+ARROW+'</a>' +
      '</article>';
    }).join('');
    container.innerHTML = html;
  });

  /* ---------------- Render: Companies grid ---------------- */
  document.querySelectorAll('[data-render="companies"]').forEach(function(container){
    var limit = parseInt(container.getAttribute('data-limit') || '99', 10);
    var list = DATA.companies.slice(0, limit);
    var html = list.map(function(c){
      var statusClass = c.status === 'Emerging' ? ' emerging' : (c.status === 'Developing' ? ' emerging' : '');
      return '' +
      '<article class="card company-card reveal">' +
        '<div class="status-pill'+statusClass+'">'+c.status+'</div>' +
        '<div class="logo-mark">'+c.initials+'</div>' +
        '<div class="sector">'+c.industry+'</div>' +
        '<h3>'+c.name+'</h3>' +
        '<p>'+c.short+'</p>' +
        '<a class="card-link" href="companies/'+c.slug+'.html">Visit Company '+ARROW+'</a>' +
      '</article>';
    }).join('');
    container.innerHTML = html;
  });

  /* ---------------- Render: Footer portfolio list ---------------- */
  document.querySelectorAll('[data-render="footer-companies"]').forEach(function(container){
    container.innerHTML = DATA.companies.map(function(c){
      return '<a href="'+(container.getAttribute('data-prefix')||'')+'companies/'+c.slug+'.html">'+c.name+'</a>';
    }).join('');
  });

  /* ---------------- Render: News grid ---------------- */
  document.querySelectorAll('[data-render="news"]').forEach(function(container){
    if(!DATA.news.length){
      container.innerHTML = '<div class="placeholder-box"><b>No articles published yet</b>Check back soon for company updates, industry insights and press releases.</div>';
      return;
    }
    var opts = { year:'numeric', month:'long', day:'numeric' };
    container.innerHTML = DATA.news.map(function(n){
      var d = new Date(n.date);
      var dateStr = isNaN(d) ? n.date : d.toLocaleDateString('en-US', opts);
      return '' +
      '<article class="card news-card reveal">' +
        '<div class="thumb"></div>' +
        '<div class="cat">'+n.category+'</div>' +
        '<h3>'+n.title+'</h3>' +
        '<p class="text-mute" style="font-size:14px;">'+n.excerpt+'</p>' +
        '<div class="meta">'+dateStr+' &middot; '+(n.related||[]).join(', ')+'</div>' +
      '</article>';
    }).join('');
  });

  /* ---------------- Render: Jobs list ---------------- */
  document.querySelectorAll('[data-render="jobs"]').forEach(function(container){
    if(!DATA.jobs.length){
      container.innerHTML = '<div class="placeholder-box"><b>No current vacancies</b>Check back soon, or send us a general application below.</div>';
      return;
    }
    container.innerHTML = DATA.jobs.map(function(j){
      return '<div class="job-row"><div><div class="jr-title">'+j.title+'</div><div class="jr-meta">'+j.location+' &middot; '+j.type+'</div></div><a class="btn btn-outline btn-sm" href="contact.html">Apply '+ARROW+'</a></div>';
    }).join('');
  });

  /* ---------------- Forms (no backend yet — placeholder submit) ---------------- */
  document.querySelectorAll('form[data-form]').forEach(function(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var success = form.querySelector('.form-success');
      if(success){ success.classList.add('is-visible'); }
      form.reset();
    });
  });

  /* ---------------- Footer year ---------------- */
  document.querySelectorAll('[data-year]').forEach(function(el){ el.textContent = new Date().getFullYear(); });

})();
