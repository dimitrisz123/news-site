import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import InfiniteScroll from "react-infinite-scroller";

const Article = ({ site }) => {
	const GET_ARTICLES = gql`
		query Article($site: String, $first: Int, $skip: Int) {
			articles(query: $site, first: $first, skip: $skip) {
				title
				image
				summary
				site
			}
		}
	`;
	return (
		<Query query={GET_ARTICLES} variables={{ site, first: 20, skip: 0 }}>
			{({ loading, error, data, fetchMore }) => {
				if (loading) return <p>Loading...</p>;
				if (error) return <p>Error :(</p>;

				const loadMoreFunc = () => {
					fetchMore({
						variables: {
							skip: data.articles.length
						},
						updateQuery: (prev, { fetchMoreResult }) => {
							if (!fetchMoreResult) return prev;
							return Object.assign({}, prev, {
								articles: [
									...prev.articles,
									...fetchMoreResult.articles
								]
							});
						}
					});
				};
				return (
					<InfiniteScroll
						pageStart={0}
						loadMore={() => loadMoreFunc()}
						hasMore={true || false}
						loader={
							<div className="loader" key={0}>
								Loading ...
							</div>
						}
					>
						{data.articles.map((article, i) => {
							return (
								<div key={i}>
									<h1>{article.title}</h1>
									<p>{article.summary}</p>
									<img
										src={article.image}
										alt="article"
										height="auto"
										width="200"
									/>
									<a href={article.site}>View more</a>
								</div>
							);
						})}
					</InfiniteScroll>
				);
			}}
		</Query>
	);
};

export default Article;
