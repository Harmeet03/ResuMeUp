import api from './api'

export const healthStatus = async () => {
    const response = await api.get('/health')
    return response.data
}