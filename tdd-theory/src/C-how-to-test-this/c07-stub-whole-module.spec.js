/**
 * Podobnie jak c05, możemy "zalepiać" (stub) moduły.
 *
 * Rozważ przykład, w którym zawsze dostajemy aktualny czas (hh:mm:ss)
 *
 * Jednak nie mamy żadnej zewnętrznej zależności `shoutBannerFor`.
 * Pobiera on logikę działania time() z innego modułu.
 *
 * W tym przykładzie — nie zmieniajmy tej implementacji, dalej próbując przetestować ten kod.
 * */

jest.mock('./c07-time-module', () => ({
	// mock'ujemy implementację .time():
	time: jest.fn(() => '11:02:56')
}));
const { shoutBannerFor } = require( './c07-to-test-module' )

describe('[c007] - how to stub any module', () => {

	it('should present banner with proper text', () => {
		const product = 'tomatoes';
		const price = .99;

		const banner = shoutBannerFor(product, price)

		// Możemy do tego użyć tylko toMatch, prawda?
		// Zmienia się tylko czas — więc to zadziała:
		expect(banner).toMatch(/Welcome, today's (.*) promotion is: tomatoes for 0.99/)

		// Jednak nie mamy w ten sposób możliwości sprawdzenia całości danych generowanych przez shoutBannerFor!
	})

	it('should work with outer dependency', () => {
		const product = 'apples';
		const price = 3.99;

		const banner = shoutBannerFor(product, price, '12:33:23')

		// Możemy do tego użyć tylko toMatch, prawda?
		// Zmienia się tylko czas — więc to zadziała:
		expect(banner).toBe('Welcome, today\'s (12:33:23) promotion is: apples for 3.99')

		// Jednak nie mamy w ten sposób możliwości sprawdzenia całości danych generowanych przez shoutBannerFor!
	})

	// A co jeśli chcemy mockować implementację .time() i zobaczyć cały ciąg znaków?
	it('should present banner with proper text', () => {
		const product = 'bananas';
		const price = 2.65;

		const banner = shoutBannerFor(product, price)

		expect(banner).toBe('Welcome, today\'s (11:02:56) promotion is: bananas for 2.65')
	})


	// Możemy zmieniać implementacje mocka dla każdego testu, co jest świetne.
	// Jednak musisz uważać na kolejność testów lub umieścić beforeEach()
	// aby zapewnić implementację dla każdego testu.

	/*
		const { time } = require('./c07-time-module');
		it('should be able to mock some other value for other test', () => {

			time.mockImplementation(() => '08:23:11')

			const product = 'bananas';
			const price = 2.65;

			const banner = shoutBannerFor(product, price)

			expect(banner).toBe('Welcome, today\'s (08:23:11) promotion is: bananas for 2.65')
		})
	 */
})
