// small script: set year, handle simple client feedback
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('bookingForm');
const msg = document.getElementById('message');
if(form){
  form.addEventListener('submit', (e)=>{
    // let Formspree handle the POST; provide immediate user feedback
    msg.textContent = 'Mèsi! Nou resevwa demann ou. N ap kontakte w byento.';
    // keep default behavior so form posts to Formspree and redirects if configured
    setTimeout(()=>{ msg.textContent=''; }, 8000);
  });
}