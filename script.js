//your JS code here. If required.
let submit = document.getElementById('btn');
let msg="",delay=0;
let output = document.createElement('div');
let form = document.getElementsByTagName('form')[0];

document.addEventListener('change',(e)=>{
	if(e.target.id=='text')
		msg=e.target.value;
	if(e.target.id=='delay')
		delay=parseInt(e.target.value);
})
submit.addEventListener('click',(e)=>{
	output.remove();
	setTimeout(()=>{
		output.innerHTML=msg;
		form.append(output);
	},delay);
})



