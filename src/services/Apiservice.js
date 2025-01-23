import { toast } from 'react-toastify';
import axiosInstance from './Axiosinstance';

class ApiService {
  // GET request
  async getData(endpoint) {
    try {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('API GET Error: ', error);
      if (!error.response) {
        // If there is no response, it might be a server crash or network issue
        toast.error("Server is down or there is a network issue. Please try again later.");
      } else {
        // Handle specific HTTP errors
        toast.error(`Error: ${error.response.status} - ${error.response.data.message || error.message}`);
      }
      throw error;  
    }
  }

  // POST request
  async postData(endpoint, data) {
    try {
      const response = await axiosInstance.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('API POST Error: ', error);
      if (!error.response) {
        // If there is no response, it might be a server crash or network issue
        toast.error("Server is down or there is a network issue. Please try again later.");
      } else {
        // Handle specific HTTP errors
        toast.error(`Error: ${error.response.status} - ${error.response.data.message || error.message}`);
      }
      throw error;
    }
  }

  // PUT request
  async putData(endpoint, data) {
    try {
      const response = await axiosInstance.put(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('API PUT Error: ', error);
      if (!error.response) {
        toast.error("Server is down or there is a network issue. Please try again later.");
      } else {
        toast.error(`Error: ${error.response.status} - ${error.response.data.message || error.message}`);
      }
      throw error;
    }
  }

  // DELETE request
  async deleteData(endpoint) {
    try {
      const response = await axiosInstance.delete(endpoint);
      return response.data;
    } catch (error) {
      console.error('API DELETE Error: ', error);
      if (!error.response) {
        toast.error("Server is down or there is a network issue. Please try again later.");
      } else {
        toast.error(`Error: ${error.response.status} - ${error.response.data.message || error.message}`);
      }
      throw error;
    }
  }
}

export const apiService = new ApiService();
