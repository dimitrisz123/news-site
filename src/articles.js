import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import InfiniteScroll from "react-infinite-scroller";
import Cell from "./cell/cell";

const Article = ({ site, search }) => {
	const GET_ARTICLES = gql`
		query Article(
			$site: String
			$search: String
			$first: Int
			$skip: Int
			$orderBy: ArticleOrderByInput
		) {
			articles(
				query: $site
				search: $search
				first: $first
				skip: $skip
				orderBy: $orderBy
			) {
				title
				image
				summary
				site
				time
			}
		}
	`;
	return (
		<Query
			query={GET_ARTICLES}
			variables={{
				site,
				search,
				first: 20,
				skip: 0,
				orderBy: "time_DESC"
			}}
		>
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
						hasMore={data.articles.length ? true : false}
						loader={
							<div className="loader" key={0}>
								Loading ...
							</div>
						}
					>
						{data.articles ? (
							data.articles.map((article, i) => {
								return <Cell key={i} info={article} />;
							})
						) : (
							<p>No results</p>
						)}
					</InfiniteScroll>
				);
			}}
		</Query>
	);
};

export default Article;
