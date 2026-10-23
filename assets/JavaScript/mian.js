const trackDesktop = document.getElementById('track');
const marker = document.getElementById("marker");
const progressValue = document.getElementById("progress-value");

const trackMobile = document.getElementById('track-mobile');
const markerMobile = document.getElementById("marker-mobile");

const totalDesktop = trackDesktop.getTotalLength();
trackDesktop.style.strokeDasharray = totalDesktop;
trackDesktop.style.strokeDashoffset = totalDesktop;

const totalMobile = trackMobile.getTotalLength();
trackMobile.style.strokeDasharray = totalMobile;
trackMobile.style.strokeDashoffset = totalMobile;

const fullHeight = document.documentElement.scrollHeight - innerHeight;

addEventListener("scroll", () => {
    const progress = Math.min(scrollY / fullHeight, 1);

    // ===== Desktop zigzag =====
    trackDesktop.style.strokeDashoffset = totalDesktop * (1 - progress);
    const point = trackDesktop.getPointAtLength(totalDesktop * progress);
    marker.setAttribute('cx', point.x);
    marker.setAttribute('cy', point.y);

    // ===== Mobile thin line =====
    trackMobile.style.strokeDashoffset = totalMobile * (1 - progress);
    const pointMobile = trackMobile.getPointAtLength(totalMobile * progress);
    markerMobile.setAttribute('cx', pointMobile.x);
    markerMobile.setAttribute('cy', pointMobile.y);

    // Progress text
    if (progressValue) {
        progressValue.textContent = Math.round(progress * 100) + '%';
    }
});