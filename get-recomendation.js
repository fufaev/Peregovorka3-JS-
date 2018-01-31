/**
 * @typedef {Object} Person
 * @property {String} login ������������� ����������.
 * @property {Number} floor "��������" ���� ����������.
 * @property {String} avatar ������ �� ������.
 */

/**
 * @typedef {Object} Room
 * @property {Number} id ������������� �����������.
 * @property {String} title �������� �����������.
 * @property {Number} capacity ����������� (���������� �������).
 * @property {Number} floor ����, �� ������� ����������� �����������.
 */

/**
 * @typedef {Object} EventDate
 * @property {Number} start Timestamp ������ �������.
 * @property {Number} end Timestamp ��������� �������.
 */

/**
 * @typedef {Object} Event
 * @property {String} id ������������� �������.
 * @property {String} title �������� �������.
 * @property {String[]} members ������ ���������� �������.
 * @property {EventDate} date ���� � ����� ���������� �������.
 * @property {Number} room ������������� �����������.
 */

/**
 * @typedef {Object} RoomsSwap
 * @property {string} event ������������� �������.
 * @property {String} room ����� ������������� �����������.
 */ 

/**
 * @typedef {Object} Recommendation
 * @property {EventDate} date ���� � ����� ���������� �������.
 * @property {String} room ������������� �����������.
 * @property {RoomsSwap[]} [swap] ����������� ������ ���������� ��� ���������� ������������.
 */

/**
 * @param {EventDate} date ���� ����������� �������.
 * @param {Person[]} members ��������� ����������� �������.
 * @param {Object} db 
 * @param {Event[]} db.events ������ ��� ������.
 * @param {Room[]} db.rooms ������ ���� �����������.
 * @param {Person[]} db.persons ������ ���� �����������.
 * @returns {Recommendation[]}
 */
function getRecommendation(date, members, db) {}