/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc 主题
*/

import initData from '../store/initdata';

export const home = (state = initData.home, action) => {
    switch (action.type) {
        case 'GET_TOPICS':
            return {
                ...state,
                topics: action.payload.topics
            }
        default:
            return state
    }
}