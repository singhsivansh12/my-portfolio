// header
window.onscroll=function(){
	const docScrollTop=document.documentElement.scrollTop;

	if(window.innerWidth>991){
		if(documentElement > 100){
			document.querySelector("header").classList.add("fixed")
		}
		else{
			document.querySelector("header".classList.add("fixed"))
		}
	}
}

const hamBurger=document.querySelector(".ham-burger");
hamBurger.addEventListner("click", function(){
	document.querySelector(".navbar").classList.toggle("show");
})