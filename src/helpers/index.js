export const $http = async function (path) {
	const res = await fetch(path)
	const data = await res.json()
	return data
}

