import api from './api'

export const profile = async () => {
    const response = await api.get('/profile/user')
    return response.data
}
