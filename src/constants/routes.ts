export const routes = {
	home: () => '/',
	apartmentDetail: (id: string | number = ':id') => `/apartments/${id}`,
}
