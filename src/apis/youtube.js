import axios from 'axios';

const KEY = 'AIzaSyA-M6gLGbBlQ_xVVhhQ5woHT4zv9DAVsTQ';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY
	}
});
