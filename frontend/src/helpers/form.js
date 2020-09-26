export const getFormData = (e) =>{
     const formData = new FormData(e.targer)
     const data = Object.fromEntries(formData)
     return data
}