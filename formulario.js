const $ = (id) => document.querySelector(id)

document.addEventListener('DOMContentLoaded', () => {
  const form = $('.prompt form');
  const name = $('#name');
  const card = $('.card');
  const prompt = $('.prompt');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validate()) {
      prompt.classList.add('vanish');
      const getData = new FormData(form);
      const data = Object.fromEntries(getData);
      const { name, lang } = data;
      
      alert(name)
      
      form.reset();
    }
  });


  function validate() {
    const visitorName = name.value.trim();
    if (!visitorName) {
      name.classList.add('error');
      name.previousElementSibling.classList.add('error');
      name.nextElementSibling.textContent = 'Por favor, adicione seu nome!';
      name.nextElementSibling.classList.add('error');
      return false;
    }
    return true;
  }
});
