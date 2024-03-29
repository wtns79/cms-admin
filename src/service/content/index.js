import axiosApi from '../api';

async function load(offset=0, limit=10) {
    return axiosApi.get(`/api/content/load?offset=${offset}&limit=${limit}`)
}

async function tree(page) {
    return axiosApi.get(`/api/content/tree/${page}`)
}

async function loadAll() {
    return load(0, 100000000000)
}

async function getById(id) {
    return axiosApi.get('/api/content/'+id)
}

async function delById(id) {
    return axiosApi.delete(`/api/content/${id}`)
}

async function create(data) {
    return axiosApi.post(`/api/content/create`, data)
}

async function update(data) {
    return axiosApi.put(`/api/content/${data.id}`, data)
}

export default {
    create:create,
    tree:tree,
    load:load,
    update:update,
    getById:getById,
    delById:delById,
    loadAll:loadAll,
    // excelDownload:`${process.env.REACT_APP_API_SERVER}/api/media/download/`
}
