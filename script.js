const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}

/* Force the actual Ecom Supporter logo image into every brand-mark placeholder. */
document.querySelectorAll('.brand-mark').forEach(mark=>{const img=document.createElement('img');img.src='ecom-supporter-icon.png';img.alt='Ecom Supporter logo';img.width=58;img.height=58;img.className='brand-logo';mark.replaceWith(img);});

const enquiryForm=document.getElementById('enquiryForm');
if(enquiryForm){
  enquiryForm.addEventListener('submit',function(e){
    e.preventDefault();
    if(!enquiryForm.checkValidity()){enquiryForm.reportValidity();return;}
    const data=new FormData(enquiryForm);
    const message=`Hello Ecom Supporter, I would like to make an enquiry.\n\n*Customer Details*\nName: ${data.get('name')}\nMobile: ${data.get('phone')}\nEmail: ${data.get('email')||'Not provided'}\nBusiness Name: ${data.get('business')||'Not provided'}\nMarketplace: ${data.get('marketplace')}\nServices Required: ${data.get('service')}\nMessage: ${data.get('message')}`;
    const url='https://wa.me/917870463224?text='+encodeURIComponent(message);
    const win=window.open(url,'_blank','noopener,noreferrer');
    const status=document.getElementById('formStatus');
    if(!win){status.textContent='WhatsApp could not be opened automatically. Please allow pop-ups and try again.';}
    else{status.textContent='Your enquiry has been prepared in WhatsApp. Please press Send there to submit it.';}
  });
}