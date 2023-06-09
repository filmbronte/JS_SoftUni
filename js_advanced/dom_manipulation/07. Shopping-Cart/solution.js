function solve() {
   const addBtn = Array.from(document.querySelectorAll('.add-product'));
   const checkoutBtn = document.querySelector('.checkout');
   const textArea = document.querySelector('textarea');

   let products = [];
   let total = 0;

   addBtn.forEach(btn => {
      btn.addEventListener('click', add);
   });
   checkoutBtn.addEventListener('click', checkout);

   function add(e) {
      const productName = e.target.parentNode.parentNode.querySelector('.product-title');
      const productPrice = e.target.parentNode.parentNode.querySelector('.product-line-price');

      if (!products.includes(productName.textContent)) {
         products.push(productName.textContent);
      }
      total += Number(productPrice.textContent);

      textArea.textContent += `Added ${productName.textContent} for ${Number(productPrice.textContent).toFixed(2)} to the cart.\n`;

   }

   function checkout(e) {
      textArea.textContent += `You bought ${products.join(', ')} for ${Number(total).toFixed(2)}.`;
      addBtn.forEach(btn => {
         btn.disabled = true;
      });
      checkoutBtn.disabled = true;
   }
}