import axiosApi from '../api';

async function load(offset=0, limit=10) {
    return axiosApi.get(`/api/menu/load?offset=${offset}&limit=${limit}`)
}

async function tree() {
    return axiosApi.get(`/api/menu/tree`)
}

async function root() {
    return axiosApi.get(`/api/menu/root`)
}


async function loadAll() {
    return load(0, 100000000000)
}

async function getById(id) {
    return axiosApi.get('/api/menu/'+id)
}

async function delById(id) {
    return axiosApi.delete(`/api/menu/${id}`)
}

async function create(data) {
    return axiosApi.post(`/api/menu/create`, data)
}

async function update(data) {
    return axiosApi.put(`/api/menu/${data.id}`, data)
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
    // excelDownload:`${process.env.REACT_APP_API_SERVER}/api/media/download/`
}
