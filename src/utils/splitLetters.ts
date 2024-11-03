export function splitLetters(): void {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.js-splitLetters'));
    elements.forEach((cycleEl) => {
      const letters = cycleEl.innerText.split('');
      cycleEl.innerHTML = ''; // Clear existing text
      letters.forEach((letter) => {
        cycleEl.innerHTML += `<span>${letter}</span>`;
      });
    });
  }
  