/*
В этом задании необходимо написать библиотеку, которая упростит работу с коллекцией однотипных объектов.

Для управления коллекцией нужно реализовать три функции:

query — функция, выполняющая запрос с заданными операциями;
select— операция выбора необходимых полей объектов;
filterIn— операция фильтрации объектов коллекции.
*/

/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection, ...operations) {
  let result = collection.map(obj => ({ ...obj }));
  operations.forEach(operation => {
    result = operation(result);
  });

  return result.map(obj => {
    const filtered = {};
    Object.entries(obj).forEach(([key, value]) => {
      if (!/^☻/.test(key)) {
        filtered[key] = value;
      }
    });
    return filtered;
  });
}

/**
 * @params {String[]}
 */
function select(...fieldNames) {
  return function(collection) {
    return collection.map(obj => {
      const mapped = {};
      Object.entries(obj).forEach(([key, value]) => {
        if (fieldNames.indexOf(key) + 1) {
          mapped[key] = value;
        } else {
          mapped["☻" + key] = value;
        }
      });
      return mapped;
    });
  };
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
  return function(collection) {
    return collection.filter(obj => {
      const value = obj[property] || obj["☻" + property];
      return !!(values.indexOf(value) + 1);
    });
  };
}

module.exports = {
  query: query,
  select: select,
  filterIn: filterIn
};
