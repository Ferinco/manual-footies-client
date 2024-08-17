const JOIN = (root, sublink) => {
    return `${root}/${sublink}`;
  };
  
const ROOT_CLIENT = "/customer";
const ROOT_ADMIN = "/admin";

export const PATH_DASHBOARD ={
    client: {
        index: ROOT_CLIENT,
        
    }
}