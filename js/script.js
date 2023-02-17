const batteryLevel = document.querySelector('.battery-level');
const levelEl  = document.querySelector('.level');

navigator.getBattery().then(function(battery) {
    let level = `${battery.level * 100}`;

    function chaneColor(){
        if(level < 20){
            levelEl.style.background = 'linear-gradient(to right top, #fcb229, #f8b723, #f4bb1d, #f0c018, #ebc512)';
        } 
        if (level > 20){
            levelEl.style.background = 'linear-gradient(to right top, #45fc29, #33f84b, #21f462, #13f075, #12eb85)';
        }
        if (level >= 90){
            levelEl.style.background = '#fff';
        }        
    }

    if(battery.charging){
        levelEl.classList.add('active');
    }else {
        levelEl.classList.remove('active');
    }

    battery.addEventListener('chargingchange', function() {
        if(battery.charging){
            levelEl.classList.add('active');
        }else {
            levelEl.classList.remove('active');
        }
    });

    batteryLevel.textContent = (`${level}%`);
    levelEl.style.width = (`${level}%`);

    battery.addEventListener('levelchange', function() {
        let level = this.level * 100;
        batteryLevel.textContent = (`${level}%`);
        levelEl.style.width = (`${level}%`);
        chaneColor();
        
    });

    chaneColor();
});
