/*
В этом задании необходимо написать библиотеку, которая упростит работу с коллекцией однотипных объектов.

Для управления коллекцией нужно реализовать три функции:

query — функция, выполняющая запрос с заданными операциями;
select— операция выбора необходимых полей объектов;
filterIn— операция фильтрации объектов коллекции.
*/


function getArraysIntersection(...aArrays) {
  aArrays.sort( (a, b) => b.length - a.length );
  let shortestArray = aArrays.pop();
  let result = [];

  // debugger;
  for (let i = 0; i < shortestArray.length; i++) {
    let k = shortestArray[i];
    if (aArrays.every( e => e.includes(k) ) && !result.includes(k) ) {
      result.push(k)
    }
  }

  return result
}

// ----------------------------------------------------------------------------

function getPreparedOperationsArrays(aOpetarionName, aOperations) {
  let result = aOperations
    .filter( e => e[0] === aOpetarionName )
    .map( e => e.slice(1) );

  return result
}

// ----------------------------------------------------------------------------

/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(aCollection, ...aOperations) { // [['select', 'smth'], ['filterIn', 'smth']]
  let collection = aCollection.map( e => JSON.parse(JSON.stringify(e)) ) ;

  if (aOperations.length === 0) {
    return collection;
  }

  let fieldsListsArrayToSelect = getPreparedOperationsArrays('select', aOperations);
  let fieldsArrayToSelect = getArraysIntersection(...fieldsListsArrayToSelect); // [['smth'], ['smth']] -> ['smth']

  let dataArraysToFilter = getPreparedOperationsArrays('filterIn', aOperations);

  // сначала фильтрация (если требуется)
  if (dataArraysToFilter.length > 0) {
    dataArraysToFilter.forEach(aFilterArray => {
      let fieldName = aFilterArray[0];
      let valuesArray = aFilterArray.slice(1);

      collection = collection.filter(e => valuesArray.includes(e[fieldName]));
    })
  }

  // выборка
  collection = collection.map(e => {
    let objectKeys = Object.keys(e);
    objectKeys.forEach(aKey => {
      if (!fieldsArrayToSelect.includes(aKey)) {
        delete e[aKey];
      }
    })

    return e;

  })

  return collection;
}

// ----------------------------------------------------------------------------

/**
 * @params {String[]}
 */
function select(...aFields) {
  return ['select'].concat(aFields);
}

// ----------------------------------------------------------------------------

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
  return ['filterIn', property].concat(values);
}

// ----------------------------------------------------------------------------

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};