const scriptURL ='https://script.google.com/macros/s/AKfycbxSgJW29b_i_Gk8VpDBmwYDPrnpE9n_wuZI_DcWi3HP-RMheIxE7x_YjMJVtgA2oVSHIQ/exec'
const form = document.forms['contact-form']
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => alert("Thank you! your form is submitted successfully." ))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message))
})