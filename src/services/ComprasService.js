import api from './AxiosConfig';

class ComprasService {
  crearCompra(items) {
    return api.post('/compras', { items });
  }

  getMisCompras() {
    return api.get('/boletas/mias');
  }

  getTodasLasCompras() {
    return api.get('/boletas');
  }

  editarBoleta(id, data) {
    return api.put(`/boletas/${id}`, data);
  }

  eliminarBoleta(id) {
    return api.delete(`/boletas/${id}`);
  }

  getDetalleBoleta(id) {
    return api.get(`/boletas/${id}`);
  }
}

export default new ComprasService();
