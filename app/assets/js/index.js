import enterView from 'enter-view'
import ProgressBar from 'progressbar.js'

import './clients.js'
import './auth.js'


const bars = [
  '.counterCircle1',
  '.counterCircle2',
  '.counterCircle3',
  '.counterCircle4'].map(item => new ProgressBar.Circle(item, {
  color: '#282A35',
  duration: document.querySelector(item).getAttribute('data-value') * 50,
  strokeWidth: 4,
  trailWidth: 3,
  easing: 'easeInOut',
  from: {color: '#aaa'},
  to: {color: '#018567'},
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    const value = Math.round(circle.value() * document.querySelector(item).getAttribute('data-value'));
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }
  }
}))


enterView({
  selector: '.statistic-landing',
  enter: function (el) {
    bars.forEach(bar => bar.animate(1))
  }
})


