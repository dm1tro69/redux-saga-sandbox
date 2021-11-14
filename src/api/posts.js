
export const getUserPosts = (userId) => {
    return fetch(`https://jsonplaceholder.typicode.com/${userId}`).then(response => response.json())
}