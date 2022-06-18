var myLocalStorage = window.localStorage;

let hero_id = myLocalStorage.getItem('showSuperHero');
console.log('hero_id', hero_id);
var apiRequest = new XMLHttpRequest();

var url = 'https://akabab.github.io/superhero-api/api/id/' + hero_id + '.json';

apiRequest.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    console.log(data);

    //the api has null values in some sections so here replacing all the null values with '-' if some powerstats/attribute of a super hero is not available
    if (data.powerstats.intelligence != 'null') {
      document.getElementById('intelligence_stats').innerHTML =
        data.powerstats.intelligence;
    } else {
      document.getElementById('intelligence_stats').innerHTML = '-';
    }

    if (data.powerstats.strength != 'null') {
      document.getElementById('strength_stats').innerHTML =
        data.powerstats.strength;
    } else {
      document.getElementById('strength_stats').innerHTML = '-';
    }

    if (data.powerstats.speed != 'null') {
      document.getElementById('speed_stats').innerHTML = data.powerstats.speed;
    } else {
      document.getElementById('speed_stats').innerHTML = '-';
    }

    if (data.powerstats.durability != 'null') {
      document.getElementById('durability_stats').innerHTML =
        data.powerstats.durability;
    } else {
      document.getElementById('durability_stats').innerHTML = '-';
    }

    if (data.powerstats.power != 'null') {
      document.getElementById('power_stats').innerHTML = data.powerstats.power;
    } else {
      document.getElementById('power_stats').innerHTML = '-';
    }

    if (data.powerstats.combat != 'null') {
      document.getElementById('combat_stats').innerHTML =
        data.powerstats.combat;
    } else {
      document.getElementById('combat_stats').innerHTML = '-';
    }

    //setting name and image of the hero
    document
      .getElementById('imageOfSuperHero')

      .setAttribute('src', data.images.lg ?? 'default-hero-image.jpeg');
    if (data?.images?.md) {
      document
        .getElementById('imageOfSuperHero')
        .setAttribute('src', data.images.md);
    } else {
      document
        .getElementById('imageOfSuperHero')
        .setAttribute('src', 'default-hero-image.jpeg');
    }

    document.getElementById('hero-name').innerText = data.name;

    document.getElementById('real-name').innerText = data.biography['fullName'];

    var gender = document.getElementById('gender-display');
    if (data.appearance.gender == 'Male') {
      gender.innerText = 'M';
    } else if (data.appearance.gender == 'Female') {
      gender.innerText = 'F';
    } else {
      gender.innerText = 'N/A';
    }

    if (data.appearance.race != 'null') {
      document.getElementById('race-display').innerText = data.appearance.race;
    } else {
      document.getElementById('race-display').innerText = '-';
    }

    if (data.appearance.height[0] != 'null') {
      document.getElementById('height-display').innerText =
        data.appearance.height[0];
    } else {
      document.getElementById('height-display').innerText = '-';
    }

    if (data.appearance.weight[1] != 'null') {
      document.getElementById('weight-display').innerText =
        data.appearance.weight[1];
    } else {
      document.getElementById('weight-display').innerText = '-';
    }

    if (data.appearance['eyeColor'] != 'null') {
      document.getElementById('eye-color-display').innerText =
        data.appearance['eyeColor'];
    } else {
      document.getElementById('eye-color-display').innerText = '-';
    }

    if (data.appearance['hairColor'] != 'null') {
      document.getElementById('hair-color-display').innerText =
        data.appearance['hairColor'];
    } else {
      document.getElementById('hair-color-display').innerText = '-';
    }
    console.log(data.work?.occupation);
    console.log(data.work?.occupation?.length);
    if (data.work?.occupation) {
      document.getElementById('work').innerText = data.work?.occupation;
    } else {
      document.getElementById('work').innerText = '-';
    }
    if (data.biography?.alignment) {
      document.getElementById('deeds').innerText = data.biography.alignment;
    } else {
      document.getElementById('deeds').innerText = '-';
    }
  }
};
apiRequest.open('get', url, true);
apiRequest.send();
