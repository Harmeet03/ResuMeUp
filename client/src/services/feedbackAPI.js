import api from './api'

export const feedback = async (message) => {
    const response = await api.post('/feedback/user', message)
    return response.data
}

export const getFeedback = async () => {
    const response = await api.get('/feedback/admin')
    return response.data
}