// sample data for workouts & trainers (client-side demo; integrate backend later)
const workouts = [
  { id: 'w1', title: 'Yoga Flow', desc: 'Flexibility & calm', img: 'https://source.unsplash.com/featured/?yoga' },
  { id: 'w2', title: 'HIIT Blast', desc: 'High intensity fat burn', img: 'https://source.unsplash.com/featured/?hiit' },
  { id: 'w3', title: 'Strength', desc: 'Build muscle & strength', img: 'https://source.unsplash.com/featured/?strength' },
  { id: 'w4', title: 'Cardio', desc: 'Endurance and stamina', img: 'https://source.unsplash.com/featured/?cardio' },
];

const trainers = [
  { name: 'Ayesha', spec: 'Yoga & Mobility', img: 'https://source.unsplash.com/featured/?trainer,woman' },
  { name: 'Ravi', spec: 'Strength Coach', img: 'https://source.unsplash.com/featured/?trainer,man' },
  { name: 'Nina', spec: 'HIIT Specialist', img: 'https://source.unsplash.com/featured/?coach' },
];

function populateWorkouts(){
  const grid = document.getElementById('workouts-grid');
  grid.innerHTML = '';
  workouts.forEach(w=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${w.img}" alt="${w.title}">
      <h3>${w.title}</h3>
      <p class="muted">${w.desc}</p>
      <div style="display:flex;gap:8px;margin-top:12px">
        <button class="btn btn-primary" onclick="startWorkout('${w.id}')">Start</button>
        <button class="btn btn-ghost" onclick="addToPlan('${w.id}')">Add</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function populateTrainers(){
  const grid = document.getElementById('trainers-grid');
  grid.innerHTML = '';
  trainers.forEach(t=>{
    const node = document.createElement('div');
    node.className = 'trainer';
    node.innerHTML = `<img src="${t.img}" alt="${t.name}"><div><strong>${t.name}</strong><div class="muted">${t.spec}</div></div>`;
    grid.appendChild(node);
  });
}

function startWorkout(id){
  alert('Starting workout: ' + id + '\n(Integrate real playback with backend)');
}

function addToPlan(id){
  alert('Added to your plan: ' + id);
}

function calculateBMI(){
  const w = parseFloat(document.getElementById('weight').value);
  const h = parseFloat(document.getElementById('height').value)/100;
  if(!w || !h){ document.getElementById('bmi-result').innerText = 'Please enter weight and height'; return; }
  const bmi = (w / (h*h)).toFixed(1);
  document.getElementById('bmi-result').innerText = `BMI: ${bmi}`;
}

function openLogin(){ document.getElementById('loginModal').style.display = 'flex'; }
function closeLogin(){ document.getElementById('loginModal').style.display = 'none'; }

function scrollToSection(id){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth'});
}

function toggleMobileMenu(){
  const nav = document.querySelector('.nav');
  if(nav.style.display === 'block') nav.style.display = 'none';
  else nav.style.display = 'block';
}

// init
document.addEventListener('DOMContentLoaded', ()=>{
  populateWorkouts();
  populateTrainers();
});
