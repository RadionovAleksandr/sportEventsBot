const eventRoute = { command: '/event', description: 'Перейти в событие' };

const eventView = (msg) => `Тренировка (8/8) Трен-ка(B/C), в резерве 0
      Игроки: 
      1 - ${msg.from.first_name} ${msg.from.last_name} 
      2 - ${msg.from.first_name} ${msg.from.last_name} 
      3 - ${msg.from.first_name} ${msg.from.last_name} 
      4 - ${msg.from.first_name} ${msg.from.last_name} 
      5 - ${msg.from.first_name} ${msg.from.last_name} 
      6 - ${msg.from.first_name} ${msg.from.last_name} 
      7 - ${msg.from.first_name} ${msg.from.last_name} 
      8 - ${msg.from.first_name} ${msg.from.last_name} 
`;

module.exports = { eventRoute, eventView }
