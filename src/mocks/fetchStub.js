function setupFetchStub(data) {
  return function fetchStub() {
    return new Promise((resolve) => {
      resolve({
        json: () => Promise.resolve(data),
      })
    })
  }
}
export default setupFetchStub
