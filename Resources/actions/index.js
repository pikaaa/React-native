//action_creator
export const loadData = (count, events) =>
	({
		type: 'load_movies',
		payload: events,
		total: count
	});

export const nav = (navigationstate) =>
({
	type: 'navigation',
	payload: navigationstate
});
