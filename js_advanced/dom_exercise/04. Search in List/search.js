function search() {
   let input = document.getElementById('searchText');
   let elems = Array.from(document.getElementsByTagName('li'));
   let counter = 0;

   for (const el of elems) {
      if (el.textContent.includes(input.value) && input.value != '') {
         counter++;
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
      } else {
         el.style.fontWeight = 'normal';
         el.style.textDecoration = 'none';
      }
   }

   let result = document.getElementById('result');
   result.textContent = `${counter} matches found`;
}
