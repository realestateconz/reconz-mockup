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
    .map((word) => capitaliseFirstLetter(word))
    .join(' ')
);

export const capitaliseFirstLetter = (string) => (
  string.length > 0
    ? string[0].toUpperCase() + string.substring(1)
    : ''
);

export const sharedElementIdForKey = (prefix,key) => (
  `${prefix}${key}`
);
