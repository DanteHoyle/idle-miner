function swing_pick_axe() {
    start_animation("pickaxe", "swing", 1000);
}

function start_animation(id, animation_name, duration) {
    var object = document.getElementById(id);
    object.classList.add(animation_name);
    setTimeout(() => {end_animation(object, animation_name);}, duration);
}

function end_animation(object, animation_name) {
    object.classList.remove(animation_name);
    console.log("Yo!")

}