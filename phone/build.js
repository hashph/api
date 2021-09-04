const { writeFileSync } = require('fs');
const phones = require('./phones.json');

Object.keys(phones).map(countryCode => {
  const data = { country: countryCode, phone: phones[countryCode] };
  writeFileSync(`build/phone/${countryCode}.json`, JSON.stringify(data), { encoding: 'utf8' });
});