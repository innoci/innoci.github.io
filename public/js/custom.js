document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const solarToday = Lunar.Solar.fromDate(today);
    const lunarToday = Lunar.Lunar.fromSolar(solarToday);
    const currentLunarYear = lunarToday.getYear();
    const cnyLunar = Lunar.Lunar.fromYmd(currentLunarYear, 1, 1);
    const cnySolar = cnyLunar.toSolar();
    const cnyDate = cnySolar.toDate();
    const daysUntilCny = Math.ceil((cnyDate - today) / (1000 * 60 * 60 * 24));
    document.getElementById('days-until-cny').innerText = `距离春节还有 ${daysUntilCny} 天`;
});