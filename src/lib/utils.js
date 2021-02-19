import { getHours } from 'date-fns';

export const timeOfDayGreeting = (hour = getHours(new Date())) => {
  if (hour < 12) {
    return 'Good morning';
  } else if (hour < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
};

export const capitaliseWords = (sentence) => (
  sentence.split(' ')
    .map((word) => (
      word[0].toUpperCase() + word.substring(1)
    ))
    .join(' ')
);
