import { createStore } from 'redux';

// Action generator - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy,
});

const setCount = ({ count }) => ({
	type: 'SET',
	count,
});

const resetCount = () => ({
	type: 'RESET',
});

// Reducers
// Key attributes
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = createStore((state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy,
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy,
			};
		case 'SET':
			return {
				count: action.count,
			};
		case 'RESET':
			return {
				count: 0,
			};
		default:
			return state;
	}
});

// Redux state container - this is how we will manage state over time
// argument will be the default state object
const store = createStore(countReducer);

// Change listener - It will be called any time an action is dispatched
const unsubscribe = store.subscribe(() => {
	// Return current state object
	console.log(store.getState());
});

// If we call unsubscribe (line 41), then all of the other below dispatches will not print to the console
// Note: the state still changes, but we won't be notified b/c we've already unsubscribed so the other dispatch calls will be ignored.

// Actions - an object that gets sent to the store

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// unsubscribe();

// I'd like to reset the count
store.dispatch(resetCount());

// I'd like to decrement the count
store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
