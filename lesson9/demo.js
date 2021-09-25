export const generateConfig = () => {
  return {
    server: 'http://localhost',
    port: 8000,
    domain: 'localhost1',
    time: new Date()
  }
}

export const generateAnotherConfig = () => {
  return {
    server: 'http://localhost2',
    port: 8000,
    domain: 'localhost',
    time: new Date()
  }
}