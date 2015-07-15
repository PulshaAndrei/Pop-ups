function add(arg){
	var li = document.createElement("li");
	li.classList.add(arg);
	li.innerHTML="<b>"+arg+":</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua."
	document.querySelector("#list").appendChild(li);
	setTimeout(function(){
		setTimeout(li.classList.add("hide"));
		setTimeout(function(){ li.parentNode.removeChild(li); },1000);		
	},3000);
}