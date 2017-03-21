import axios from 'axios';

import {
    RecommendActicleListResource,
    ColumnArticleListResource,
    ColumnListResource,
    ArticleDetailResource,
    RecommendColumnsResource
} from './resource';

export default {
    getRecommendActicleList(size, offset) {
        return axios.get(RecommendActicleListResource, {
            params: {
                limit: size || 6,
                offset: offset || 0
            }
        });
    },

    getColumnArticleList(columnId, size, offset) {
        return axios.get(ColumnArticleListResource + columnId + '/posts', {
            params: {
                limit: size || 6,
                offset: offset || 0
            }
        });
    },

    getColumnList(columnId, size, offset) {
        return axios.get(ColumnListResource + columnId, {
                params: {
                    limit: size || 6,
                    offset: offset || 0
                }
            });
    },

    getArticleDetail(articleId) {
        return axios.get(ArticleDetailResource + articleId);
    },

    getRecommendationsColumns(size, offset) {
        return axios.get(RecommendColumnsResource, {
            params: {
                limit: size || 6,
                offset: offset || 0
            }
        });
    }
};
