 
  function submitChoice() { 
    const coffeeResponse = document.getElementById('coffee').checked;
    const teaResponse = document.getElementById('tea').checked; 
    if (coffeeResponse||teaResponse) {
      alert("Çok sevindim! Öyleyse hazır olunca mekanı söyle. 🌟");
    } else {
      alert("Lütfen sadece bir seçeneği işaretle. 💫");
    }
    proposalCard.submit();
  } 