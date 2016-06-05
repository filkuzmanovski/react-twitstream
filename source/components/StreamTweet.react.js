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

	componentDidMount: function () {
  		console.log('[react-twitstream] StreamTweet: 3. Running componentDidMount()');

  		var componentDOMRepresentation = ReactDOM.findDOMNode(this);

  		window.react-twitstream.headerHtml = componentDOMRepresentation.children[0].outerHTML;
  		window.react-twitstream.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
	},

	componentWillReceiveProps: function (nextProps) {
  		console.log('[react-twitstream] StreamTweet: 4. Running componentWillReceiveProps()');

  		var currentTweetLength = this.props.tweet.text.length;
  		var nextTweetLength = nextProps.tweet.text.length;
  		var isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
  		var headerText;

  		this.setState({
    	numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
  	});

  		if (isNumberOfCharactersIncreasing) {
    		headerText = 'Number of characters is increasing';
  		} else {
    		headerText = 'Latest public photo from Twitter';
  	}

  		this.setState({
    	headerText: headerText
  	});

  		window.react-twitstream.numberOfReceivedTweets++;
	},

	shouldComponentUpdate: function (nextProps, nextState) {
  		console.log('[react-twitstream] StreamTweet: 5. Running shouldComponentUpdate()');

  		return (nextProps.tweet.text.length > 1);
	},

	componentWillUpdate: function (nextProps, nextState) {
		console.log('[react-twitstream] StreamTweet: 6. Running componentWillUpdate()');
	},

	componentDidUpdate: function (prevProps, prevState) {
		console.log('[react-twitstream] StreamTweet: 7. Running componentDidUpdate()');

		window.react-twitstream.numberOfDisplayedTweets++;
	},

	componentWillUnmount: function () {
		console.log('[react-twitstream] StreamTweet: 8. Running componentWillUnmount()');

		delete window.react-twitstream;
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