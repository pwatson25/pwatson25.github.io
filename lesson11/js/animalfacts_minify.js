fetch("https://some-random-api.ml/animal/panda").then(t=>t.json()).then(t=>{let e=t.fact;document.getElementById("panda").textContent=e;const o=t.image;document.getElementById("pandaPhoto").setAttribute("src",o),document.getElementById("pandaPhoto").setAttribute("alt","Panda Photo"),document.getElementById("pandaPhoto").setAttribute("loading","lazy")}),fetch("https://some-random-api.ml/animal/racoon").then(t=>t.json()).then(t=>{let e=t.fact;document.getElementById("racoon").textContent=e;const o=t.image;document.getElementById("racoonPhoto").setAttribute("src",o),document.getElementById("racoonPhoto").setAttribute("alt","Racoon Photo"),document.getElementById("racoonPhoto").setAttribute("loading","lazy")}),fetch("https://some-random-api.ml/animal/kangaroo").then(t=>t.json()).then(t=>{let e=t.fact;document.getElementById("kangaroo").textContent=e;const o=t.image;document.getElementById("kangarooPhoto").setAttribute("src",o),document.getElementById("kangarooPhoto").setAttribute("alt","Kangaroo Photo"),document.getElementById("kangarooPhoto").setAttribute("loading","lazy")}),fetch("https://some-random-api.ml/animal/koala").then(t=>t.json()).then(t=>{let e=t.fact;document.getElementById("koala").textContent=e;const o=t.image;document.getElementById("koalaPhoto").setAttribute("src",o),document.getElementById("koalaPhoto").setAttribute("alt","Koala Photo"),document.getElementById("koalaPhoto").setAttribute("loading","lazy")}),fetch("https://some-random-api.ml/animal/fox").then(t=>t.json()).then(t=>{let e=t.fact;document.getElementById("fox").textContent=e;const o=t.image;document.getElementById("foxPhoto").setAttribute("src",o),document.getElementById("foxPhoto").setAttribute("alt","Fox Photo"),document.getElementById("foxPhoto").setAttribute("loading","lazy")});