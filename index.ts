let pri = 0.7;
let duo = 0.5;
let tri = 0.4;
let tet = 0.3;
let pen = 0.13;
let cron_protection = 0.6;

let pri_accessorie_avg = [];
let duo_accessorie_avg = [];
let tri_accessorie_avg = [];
let tet_accessorie_avg = [];
let pen_accessorie_avg = [];

let succeeded_pri = false;
let succeeded_duo = false;
let succeeded_tri = false;
let succeeded_tet = false;
let succeeded_pen = false;

let enhancement_level = 0;
let accessorie_count = 1;
let rng = 0;
let sample_size = 1000000;
let i = 0;
while (i < sample_size) {
    pri_attempt();
}

function pri_attempt(){
    rng = (Math.floor(Math.random() * 10000) + 1) / 10000;
    accessorie_count++;
    if (rng < pri){
        if(succeeded_pri == false){
            pri_accessorie_avg.push(accessorie_count);
        }
        enhancement_level++;
        succeeded_pri = true;
        duo_attempt();
    } else{
        if(apply_crons()){
            pri_attempt();
        } else{
            accessorie_count++;
        }
    }
}

function duo_attempt(){
    rng = (Math.floor(Math.random() * 10000) + 1) / 10000;
    accessorie_count++;
    if (rng < duo){
        if(succeeded_duo == false){
            duo_accessorie_avg.push(accessorie_count);
        }
        enhancement_level++;
        succeeded_duo = true;
        tri_attempt();
    } else{
        if(apply_crons()){
            duo_attempt();
        } else{
            pri_attempt();
        }
    }
}

function tri_attempt(){
    rng = (Math.floor(Math.random() * 10000) + 1) / 10000;
    accessorie_count++;
    if (rng < tri) {
        if(succeeded_tri == false){
            tri_accessorie_avg.push(accessorie_count);
        }
        enhancement_level++;
        succeeded_tri = true;
        tet_attempt();
    } else{
        if(apply_crons()){
            tri_attempt();
        } else{
            duo_attempt();
        }
    }
}

function tet_attempt(){
    rng = (Math.floor(Math.random() * 10000) + 1) / 10000;
    accessorie_count++;
    if (rng < tet) {
        if(succeeded_tet == false){
            tet_accessorie_avg.push(accessorie_count);
        }
        enhancement_level++;
        succeeded_tet = true;
        pen_attempt();
    } else{
        if(apply_crons()){
            tet_attempt();
        } else{
            tri_attempt();
        }
    }
}

function pen_attempt(){
    rng = (Math.floor(Math.random() * 10000) + 1) / 10000;
    accessorie_count++;
    if (rng < pen) {
        succeeded_pen = true;
        pen_accessorie_avg.push(accessorie_count);
        enhancement_level++;
        i++;
        accessorie_count = 1;
        enhancement_level = 0;
        reset_sucesses();
    } else{
        if(apply_crons()) {
            pen_attempt();
        } else{
            tet_attempt();
        }
    }
}

function apply_crons(){
    rng = (Math.floor(Math.random() * 10000) + 1) / 10000;
    if (rng > cron_protection){
        if (enhancement_level > 0) {
            enhancement_level--;
        } else{
            accessorie_count++;
        }
        return false;
    } else{
        return true;
    }
}

function reset_sucesses(){
    succeeded_pri = false;
    succeeded_duo = false;
    succeeded_tri = false;
    succeeded_tet = false;
    succeeded_pen = false;
}

function calculate_average(sample_array){
    const sum = sample_array.reduce((a, b) => a + b, 0);
    const avg = (sum / sample_array.length) || 0;
    return avg;
}

console.log("sample size: (", i, " pen enhances)");
console.log("average accessories for pri is : ", calculate_average(pri_accessorie_avg).toFixed(8), " with ", pri*100, "%  success chance")
console.log("average accessories for duo is : ", calculate_average(duo_accessorie_avg).toFixed(8), " with ", duo*100, "%  success chance")
console.log("average accessories for tri is : ", calculate_average(tri_accessorie_avg).toFixed(8), " with ", tri*100, "%  success chance")
console.log("average accessories for tet is : ", calculate_average(tet_accessorie_avg).toFixed(8), " with ", tet*100, "%  success chance")
console.log("average accessories for pen is : ", calculate_average(pen_accessorie_avg).toFixed(8), " with ", pen*100, "%  success chance")

// console.log("average accessories for pri is : ", pri_accessorie_avg)
// console.log("average accessories for duo is : ", duo_accessorie_avg)
// console.log("average accessories for tri is : ", tri_accessorie_avg)
// console.log("average accessories for tet is : ", tet_accessorie_avg)
// console.log("average accessories for pen is : ", pen_accessorie_avg)
