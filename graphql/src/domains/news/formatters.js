const formatUTCDate = (utcDate) => {
  const date = new Date(utcDate);
  return new Intl.DateTimeFormat('fr-FR').format(date);
};

const formatQueryParams = (params, page, limit) => ({
  q: params.keyword,
  pageSize: limit,
  page,
  language: params.language,
  sources: params.source,
});

const formatArticles = (response) => ({
  totalResults: response.totalResults,
  articles: response.articles && response.articles
    .map(({ publishedAt, ...rest }) => ({
      ...rest,
      publishedAt: formatUTCDate(publishedAt),
    })),
});

export {
  formatArticles,
  formatQueryParams,
};
