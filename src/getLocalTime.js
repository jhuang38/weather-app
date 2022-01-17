export default function getLocalTime(timezoneOffset) {
    let d = new Date();
    let dateSeconds = d.getUTCSeconds() + 60 * d.getUTCMinutes() + 3600 * d.getUTCHours();
    let localTimeSeconds = dateSeconds + timezoneOffset;
    let dateDisplay = new Date(localTimeSeconds * 1000).toISOString()
    return dateDisplay.slice(11, 16);
}