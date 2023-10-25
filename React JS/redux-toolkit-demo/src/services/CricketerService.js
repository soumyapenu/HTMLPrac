import http from "../http-common";

const getAll = () => {
  return http.get("/cricketers");;
};

const create = data => {
  return http.post("/cricketers", data);
};

const update = (id, data) => {
  return http.put(`/cricketers/${id}`, data);
};

const remove = id => {
  return http.delete(`/cricketers/${id}`);
};

const CricketerService = {
  getAll,
  create,
  update,
  remove,
};

export default CricketerService;