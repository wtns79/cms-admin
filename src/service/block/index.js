import axiosApi from '../api';

async function load(offset=0, limit=10) {
    return axiosApi.get(`/api/block/load?offset=${offset}&limit=${limit}`)
}

async function loadAll() {
    return load(0, 100000000000)
}

async function getById(id) {
    return axiosApi.get('/api/block/'+id)
}

async function delById(id) {
    return axiosApi.delete(`/api/block/${id}`)
}

async function create(data) {
    return axiosApi.post(`/api/block/create`, data)
}

async function update(data) {
    return axiosApi.put(`/api/block/${data.id}`, data)
}

export default {
    create:create,
    load:load,
    update:update,
    getById:getById,
    delById:delById,
    loadAll:loadAll,
    // excelDownload:`${process.env.REACT_APP_API_SERVER}/api/media/download/`
}
