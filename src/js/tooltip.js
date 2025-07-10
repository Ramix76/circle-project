document.addEventListener('DOMContentLoaded', () => {
  const tooltip = document.getElementById('floatingTooltip');

  document.querySelectorAll('.chat-icon').forEach(icon => {
    setupTooltipForIcon(icon, tooltip);
  });
});

function setupTooltipForIcon(icon, tooltip) {
  const wrapper = icon.closest('.input-wrapper');
  if (!wrapper) return;

  const input = wrapper.querySelector('input') || wrapper.querySelector('textarea');
  if (!input) return;

  const tooltipText = icon.getAttribute('data-tooltip');
  let tooltipVisible = false;

  icon.addEventListener('mouseenter', () => {
    if (shouldShowTooltip(input)) {
      showTooltip(tooltip, tooltipText);
      tooltipVisible = true;
    }
  });

  icon.addEventListener('mousemove', (e) => {
    if (tooltipVisible) positionTooltip(tooltip, e);
  });

  icon.addEventListener('mouseleave', () => {
    hideTooltip(tooltip);
    tooltipVisible = false;
  });

  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      hideTooltip(tooltip);
      tooltipVisible = false;
      icon.style.display = 'none';
    } else {
      icon.style.display = 'block';
    }
  });
}

function shouldShowTooltip(input) {
  return input.value.trim() === '';
}

function showTooltip(tooltip, text) {
  tooltip.textContent = text;
  tooltip.classList.remove('hidden');
}

function hideTooltip(tooltip) {
  tooltip.classList.add('hidden');
}

function positionTooltip(tooltip, event) {
  tooltip.style.left = `${event.pageX + 10}px`;
  tooltip.style.top = `${event.pageY + 10}px`;
}