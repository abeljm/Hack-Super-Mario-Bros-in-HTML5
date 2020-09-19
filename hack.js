//'use strict';

var original_killMario = killMario;
killMario = function(me, big) {
	
	console.log("Kill mario has been called")
	console.log(me)
	console.log(big)
	original_killMario({alive: false}, big);
	console.log("Kill mario called")
};


var hack = {
	original_killMario: null,
	initialize: function(){
		play("Pause.wav");
		this.CreateMenu();
	},
	CreateMenu: function(){
		var menu = document.createElement("div");
		menu.style.position = "absolute";
		menu.style.bottom = "30px";
		menu.style.right = "30px";
		menu.style.padding = "20px";
		menu.style.backgroundColor = "rgb(255 255 255 / 82%)";
		menu.style.zIndex = "9999";
		
		var list = document.createElement("ul");
		list.style.listStyle = "none";
		list.style.padding = "0px";
		
		var li_invulnerable = document.createElement("li");
		var invulnerable = document.createElement("input");
		invulnerable.id = "invulnerable";
		invulnerable.type = "checkbox";
		var invulnerable_label = document.createElement("label");
		invulnerable_label.innerText = "Invulnerable";
		invulnerable_label.style.color = "black";
		invulnerable_label.setAttribute("for", "invulnerable");
		invulnerable.addEventListener("change", function(){
			/*if(hack.original_killMario==null){
				hack.original_killMario = killMario;				
			}
			if(invulnerable.checked){
				killMario = function(me, big){
					
				}
			}else{
				killMario = hack.original_killMario;
			}*/
		});
		
		var li_nofall = document.createElement("li");
		var nofall = document.createElement("input");
		nofall.id = "nofall";
		nofall.type = "checkbox";
		var nofall_label = document.createElement("label");
		nofall_label.innerText = "No fall";
		nofall_label.style.color = "black";
		nofall_label.setAttribute("for", "nofall");
		nofall.addEventListener("change", function(){			
			if(nofall.checked){
				mario.nofall = 1;
			}else{
				mario.nofall = 0;
			}
		});
		
		var li_lives = document.createElement("li");
		var lives = document.createElement("input");
		lives.type = "number";
		var lives_btn = document.createElement("button");
		lives_btn.innerText = "Set Lives";
		lives_btn.addEventListener("click", function(){
			setLives(lives.value);
		});
		
		menu.appendChild(list);
		//list.appendChild(li_invulnerable);
		list.appendChild(li_nofall);
		list.appendChild(li_lives);
		//li_invulnerable.appendChild(invulnerable);
		//li_invulnerable.appendChild(invulnerable_label);
		li_nofall.appendChild(nofall);
		li_nofall.appendChild(nofall_label);
		li_lives.appendChild(lives);
		li_lives.appendChild(lives_btn);
		document.body.appendChild(menu);
		
	},
	invulnerable: function(){
		
	}
};

hack.initialize();
