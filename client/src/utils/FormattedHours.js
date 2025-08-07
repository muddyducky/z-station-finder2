const allDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const weekends = ["Sat", "Sun"];

export default function GetFormattedHours(openHoursData = []) {
  const isOpen24Hours = openHoursData.find((entry) => entry.open24Hours);
  const dailyEntry = openHoursData.find((entry) => entry.day === "Daily");
  const weekdaysEntry = openHoursData.find((entry) => entry.day === "Weekdays");
  const weekendsEntry = openHoursData.find((entry) => entry.day === "Weekends");

  let combinedHours = {};

  if (isOpen24Hours) {
    allDays.forEach((day) => {
      combinedHours[day] = "Open 24 Hours";
    });
    return allDays.map((day) => combinedHours[day]);
  }

  if (dailyEntry) {
    allDays.forEach((day) => {
      combinedHours[day] = `${dailyEntry.open} - ${dailyEntry.close}`;
    });
    return allDays.map((day) => combinedHours[day])
  }

  if (weekdaysEntry) {
    weekdays.forEach((day) => {
        combinedHours[day] = `${weekdaysEntry.open} - ${weekdaysEntry.close}`
    });
  }
  if (weekendsEntry) {
    weekends.forEach((day) => {
      combinedHours[day] = `${weekendsEntry.open} - ${weekendsEntry.close}`;
    });
  }

  return allDays.map(day => combinedHours[day])


}
