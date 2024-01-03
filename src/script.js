const temp = document.createElement("div");
temp.innerHTML = `<div class="action">
  <button>+</button>
  <ul>
    <li><a href="https://support.portal.megaone.com/servicedesk/customer/portal/66/create/824">General Support</a></li>
	<li><a href="https://support.portal.megaone.com/servicedesk/customer/portal/66/create/826">Billing Support</a></li>
	<li><a href="https://support.portal.megaone.com/servicedesk/customer/portal/66/create/825">Technical Support</a></li>
  </ul>
</div>`;
document.body.appendChild(temp);

const action = document.querySelector('.action');
action.addEventListener('click', ()=> {
  action.classList.toggle('active')
})
