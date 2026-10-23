const track = document.getElementById('track');
const marker = document.getElementById("marker");
const progressValue = document.getElementById("progress-value");

const total = track.getTotalLength();
track.style.strokeDasharray = total;
track.style.strokeDashoffset = total;

const fullHeight = document.documentElement.scrollHeight - innerHeight;

addEventListener("scroll", () => {

    // ------- Calculate the progress
    const progress = Math.min(scrollY / fullHeight, 1);
    track.style.strokeDashoffset = total * (1 - progress);

    // ------- calculate the position of the marker
    const point = track.getPointAtLength(total * progress);
    marker.setAttribute('cx', point.x);
    marker.setAttribute('cy', point.y);

    progressValue.textContent = Math.round(progress * 100) + '%';
});