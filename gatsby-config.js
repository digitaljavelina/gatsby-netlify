module.exports = {
	siteMetadata: {
		title: 'Gatsby Default Starter',
		desc: 'A new blog',
	},
	plugins:[
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: 'hzzso42l9ejp',
				accessToken: '7e05075be5e4e71e2fe8c2d20cf0eed4664fc370ac164284c6774030702be94f',
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'img',
				path: `${__dirname}/src/images`
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'img',
				path: `${__dirname}/static/assets`
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
	],
};

// pathPrefix: '/levelup-blog',
