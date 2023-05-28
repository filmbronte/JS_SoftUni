function create(words) {
   const content = document.getElementById('content');
   content.addEventListener('click', onClick);

   for (const word of words) {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);

      content.appendChild(div);
   }

   function onClick(e) {
      if (e.target.tagName == 'DIV' && e.target != content) {
         e.target.children[0].style.display = 'block';
      }
      // const p = e.currentTarget.children[0];
      // p.style.display = 'block';
   }
}
