const moment = require('moment-timezone');

const citiesArray = [
    { city: 'New York', timezone: 'America/New_York' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo' },
    { city: 'Paris', timezone: 'Europe/Paris' },
    { city: 'London', timezone: 'Europe/London' },
    { city: 'Sydney', timezone: 'Australia/Sydney' }
];

export const getDayOfWeek = (city: string) => {
  try {
    const timezone = citiesArray.find((item) => item.city === city)?.timezone;
    const date = moment.tz(timezone);

    return date.format('dddd');
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export const reshuffleDays = (currentDay: string, days: any) => {
  
    // Find the index of the current day in the array
    const currentItem = days.find((item: any) => item.dayOfWeek === currentDay);
    const currentIndex = days.indexOf(currentItem);
  
    if (currentIndex !== -1) {
      // Move the current day to the first index
      const reshuffledDays = [
        days[currentIndex],
        ...days.slice(currentIndex + 1),
        ...days.slice(0, currentIndex),
      ];
  
      return reshuffledDays;
    } else {
      console.error('Invalid day provided');
      return null;
    }
  }