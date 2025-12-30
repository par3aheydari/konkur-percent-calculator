function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
  }
  
  function calculatePercent() {
    const total = +document.getElementById('total').value;
    const correct = +document.getElementById('correct').value;
    const wrong = +document.getElementById('wrong').value;
  
    if (total === 0) return;
  
    const percent = ((correct - wrong / 3) / total) * 100;
    document.getElementById('percentResult').innerText =
      `درصد شما: ${percent.toFixed(2)}٪`;
  }
  
  function calculateGPA() {
    const scores = document.querySelectorAll('.score');
    let sum = 0, count = 0;
  
    scores.forEach(s => {
      if (s.value !== '') {
        sum += +s.value;
        count++;
      }
    });
  
    if (count === 0) return;
  
    const gpa = sum / count;
    document.getElementById('gpaResult').innerText =
      `معدل شما: ${gpa.toFixed(2)}`;
  }
  