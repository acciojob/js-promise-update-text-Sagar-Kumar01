//your JS code here. If required.
let output = document.getElementById("output");

function setting() {
	return new Promise((res)=>{
		setTimeout(()=>{
			res("Hello, world!");
		},1000)
	});
}
setting().then((data)=> output.textContent = data);
