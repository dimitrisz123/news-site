import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Article = () => {
	return (
		<Query
			query={gql`
				{
					articles {
						title
						image
						summary
						site
					}
				}
			`}
		>
			{({ loading, error, data }) => {
				if (loading) return <p>Loading...</p>;
				if (error) return <p>Error :(</p>;

				return data.articles.map(article => {
					console.log(data.articles);
					return (
						<div>
							<h1>{article.title}</h1>
							<p>{article.summary}</p>
							<img src={article.image} alt="article" height="auto" width="200"/>
							<a href={article.site}>View more</a>
						</div>
					);
				});
			}}
		</Query>
	);
};

export default Article;
