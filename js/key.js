const keys = {
  d: false,
  f: false,
  j: false,
  k: false,
  s: false,
  l: false,
};
const holdKeys = {
  d: false,
  f: false,
  j: false,
  k: false,
  s: false,
  l: false,
};

document.addEventListener("keydown", (e) => {
  if (e.key == "d") {
    holdKeys.d = true;
    keys.d = true;
    setTimeout(() => {
      keys.d = false;
    }, 100);
  }
  if (e.key == "f") {
    holdKeys.f = true;
    keys.f = true;
    setTimeout(() => {
      keys.f = false;
    }, 100);
  }
  if (e.key == "j") {
    holdKeys.j = true;
    keys.j = true;
    setTimeout(() => {
      keys.j = false;
    }, 100);
  }
  if (e.key == "k") {
    holdKeys.k = true;
    keys.k = true;
    setTimeout(() => {
      keys.k = false;
    }, 100);
  }
  //  if(e.key == "l"){keys.l = true;setTimeout(() => {keys.l=false}, 100);}
  // if(e.key == "s"){keys.s = true;setTimeout(() => {keys.s=false}, 100);}
  var el = document.querySelector("#key-" + e.key);
  if (el != null) {
    el.style = "background:var(--touch-zone-touched-color)";
  }
});
document.addEventListener("keyup", (e) => {
  if (e.key == "d") {
    holdKeys.d = false;
  }
  if (e.key == "f") {
    holdKeys.f = false;
  }
  if (e.key == "j") {
    holdKeys.j = false;
  }
  if (e.key == "k") {
    holdKeys.k = false;
  }
  // if(e.key == "l"){keys.l = false}
  // if(e.key == "s"){keys.s = false}
  var el = document.querySelector("#key-" + e.key);
  if (el != null) {
    el.style = "background-color: var(--touch-zone-color);";
  }
});
