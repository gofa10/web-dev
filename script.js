    // Filter Logic
    const filterOptions = document.getElementById('filter-options');
    const items = document.querySelectorAll('.info-card');
    const loader = document.getElementById('loader');

    filterOptions.addEventListener('change', (event) => {
      const filterValue = event.target.value;

      // Show loader during processing
      loader.style.display = 'block';
      setTimeout(() => {
        items.forEach((item) => {
          const priceText = item.querySelector('h2').textContent;
          const price = parseInt(priceText.replace(/\D/g, ''), 10);

          if (filterValue === 'default') {
            item.style.display = 'block';
          } else if (filterValue === 'available' && price <= 20000) {
            item.style.display = 'block';
          } else if (filterValue === 'expensive' && price > 20000) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });

        // Hide loader after processing
        loader.style.display = 'none';
      }, 500); // Simulate delay
    });

    // Button Click Actions
    document.getElementById('settings-button').addEventListener('click', (e) => {
      e.preventDefault();
      alert('Settings clicked!');
    });

    document.getElementById('basket-button').addEventListener('click', (e) => {
      e.preventDefault();
      alert('Basket clicked!');
    });

    document.getElementById('user-button').addEventListener('click', (e) => {
      e.preventDefault();
      alert('User clicked!');
    });