const {axiosInstance} = require(".");


export const LoginUser = async (value) => {
    try{
        const response = await axiosInstance.post("api/users/login",value);
        return response.data;
    }catch(err){
        console.log("Error occured: ", err);
    }
}