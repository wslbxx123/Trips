module.exports = {
  post: () => {
    return Promise.resolve({
        "code": 200,
        "data": {}
    })
  },
  get: () => {
    return Promise.resolve({
        "code": 200, 
        "data": [{
            "id":1,
            "name":"Vienna, Austria",
            "description":"Vienna, is one the most beautiful cities in Austria and in Europe as well. Other than the Operas for which it is well known, Vienna also has many beautiful parks...",
            "dateStarted":"2017-01-20T00:00:00",
            "dateCompleted":null
        },
        {
            "id":2,
            "name":"Carpinteria, CA, USA",
            "description":"Carpinteria is a city located on the central coast of California, just south of Santa Barbara. It has many beautiful beaches as well as a popular Avocado Festival which takes place every year in October...",
            "dateStarted":"2019-02-22T00:00:00",
            "dateCompleted":"2019-01-30T00:00:00"
        }]
      });
  },
  delete: () => {
      return Promise.resolve({
          "code": 200,
          "data": {}
      })
  },
  put: () => {
    return Promise.resolve({
        "code": 200,
        "data": {}
    })
  }
};