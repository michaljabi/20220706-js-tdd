/**
 * W Jest.js możesz zaplanować wykonanie testu za pomocą .todo
 *
 * Po uruchomieniu testu otrzymasz informację w raporcie, że m.in.:
 * 3 skipped, 6 do todo, 48 passed, 57 total
 *
 * Więc możesz zobaczyć, ile testów to testy .todo
 * */

function makeAnAnimalFactory(type, name = '') {}

describe('makeAnAnimalFactory [a007]', () => {

	it.todo('should throw error when no type given');

	it.todo('should handle mammal type with ....');

	it.todo('should handle bird type with ....');


	it.each([
			[1, 1, 2],
			[1, 2, 3],
			[2, 2, 4],
	  ])('when %i + %i it should be %i', (a, b, expected) => {
		expect(a + b).toBe(expected);
	  });

})


