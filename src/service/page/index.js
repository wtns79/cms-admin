import axiosApi from '../api';

async function load(offset=0, limit=10) {
    return axiosApi.get(`/api/page/load?offset=${offset}&limit=${limit}`)
}

async function tree() {
    return axiosApi.get(`/api/page/tree`)
}

async function root() {
    return axiosApi.get(`/api/page/root`)
}


async function loadAll() {
    return load(0, 100000000000)
}

async function getById(id) {
    return axiosApi.get('/api/page/'+id)
}

async function delById(id) {
    return axiosApi.delete(`/api/page/${id}`)
}

async function create(data) {
    return axiosApi.post(`/api/page/create`, data)
}

async function update(data) {
    return axiosApi.put(`/api/page/${data.id}`, data)
}

export default {
    create:create,
    load:load,
    tree:tree,
    root:root,
    update:update,
    getById:getById,
    delById:delById,
    loadAll:loadAll,
    showPage:`${process.env.REACT_APP_API_SERVER}/page/`
}
