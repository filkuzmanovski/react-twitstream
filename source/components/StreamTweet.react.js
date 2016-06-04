var StreamTweet = React.createClass({

	getInitialState: function () {
		console.log('[react-twitstream] StreamTweet: 1. Running getInitialState()');

		return {
			numberOfCharactersIsIncreasing: null,
			headerText: null
		};
	},

	componentWillMount: function () {
		console.log('[react-twitstream] StreamTweet: 2. Running componentWillMount()');

		this.setState({
			numberOfCharactersIsIncreasing: true,
			headerText: 'Your latest photos from Twitter'
		});

		window.react-twitstream = {
			numberOfReceivedTweets: 1,
			numberOfDisplayedTweets: 1
		};
	},

	render: function () {
		console.log('[react-twitstream] StreamTweet: Running render()');

		return (
			<section>
			<Header text={this.state.headerText} />
			<Tweet
			 tweet={this.props.tweet}
			 onImageClick={this.props.onAddTweetToColleciton} />
			 </section>
			 );
	}
});

module.exports = StreamTweet;