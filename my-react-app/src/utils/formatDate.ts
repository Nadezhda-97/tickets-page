// src/utils/dateFormatter.ts
const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short', // Сокращенное название месяца
      day: 'numeric',
      weekday: 'short', // Сокращенное название дня недели
    };
    
    return date.toLocaleDateString('ru-RU', options);
};

export default formatDate;
  