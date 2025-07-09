document.addEventListener('DOMContentLoaded', () => {
  const tooltip = document.getElementById('floatingTooltip');

  document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('mouseenter', (e) => {
      if (input.value.trim() === '') {
        tooltip.textContent = "Please fill in this field.";
        tooltip.classList.remove('hidden');
      }
    });

    input.addEventListener('mousemove', (e) => {
      tooltip.style.left = `${e.pageX + 10}px`;
      tooltip.style.top = `${e.pageY + 10}px`;
    });

    input.addEventListener('mouseleave', () => {
      tooltip.classList.add('hidden');
    });

    input.addEventListener('input', () => {
      if (input.value.trim() !== '') {
        tooltip.classList.add('hidden');
      }
    });
  });
});
