let a = document.getElementsByTagName('div')[0];

// a.innerHTML = a.innerHTML+ '<h1>Hello World! </h1>';

let div = document.createElement("div");
div.innerHTML = '<h1>Hello Roushan</h1>'
// a.appendChild(div)
// a.prepend(div)

// a.before(div)//one step outside the container
// a.after(div)

a.replaceWith(div);

