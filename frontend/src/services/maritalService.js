import axios from 'axios'

const baseUrl = '/api/family'

const maritalService = {

  getByYearAndStatus: async (year, status) => {
    const result = await axios.get(`${baseUrl}/${year}/${status}`)
    return result.data
  }
}


export default maritalService