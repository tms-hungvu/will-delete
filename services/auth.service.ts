import { axiosClient } from "@/api/axios.config";

class AuthService {
    async SignUp(payload : IUser){
        return await axiosClient.post('users', payload);
    }
}
export default new AuthService();