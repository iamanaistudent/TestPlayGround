document.addEventListener('DOMContentLoaded', function(){
  // Home show message
  const showBtn = document.getElementById('show-message');
  const homeMsg = document.getElementById('home-message');
  if(showBtn){
    showBtn.addEventListener('click', function(){
      if(homeMsg) homeMsg.textContent = 'Button clicked successfully!';
    });
  }

  // Form validation
  const form = document.getElementById('test-form');
  const formMsg = document.getElementById('form-message');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      if(!name || !email){
        if(formMsg) formMsg.textContent = 'Please fill all fields.';
        return;
      }
      if(formMsg) formMsg.textContent = 'Form submitted!';
      form.reset();
    });
  }

  // Custom right-click context menu
  const contextBox = document.getElementById('context-box');
  const customMenu = document.getElementById('custom-menu');

  function hideMenu(){
    if(customMenu){
      customMenu.style.display = 'none';
      customMenu.setAttribute('aria-hidden','true');
    }
  }

  if(contextBox && customMenu){
    contextBox.addEventListener('contextmenu', function(e){
      e.preventDefault();
      const x = e.clientX;
      const y = e.clientY;
      customMenu.style.left = x + 'px';
      customMenu.style.top = y + 'px';
      customMenu.style.display = 'block';
      customMenu.setAttribute('aria-hidden','false');
    });

    // hide on click elsewhere
    document.addEventListener('click', function(e){
      if(!customMenu.contains(e.target)) hideMenu();
    });

    // hide on escape
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') hideMenu();
    });
  }

  // Prevent browser menu when clicking on the custom menu
  if(customMenu){
    customMenu.addEventListener('contextmenu', function(e){ e.preventDefault(); });
  }
});
