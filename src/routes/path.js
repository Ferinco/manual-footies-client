const JOIN = (root, sublink) => {
    return `${root}/${sublink}`;
  };
  
const ROOT_CLIENT = "/customer";
const ROOT_ADMIN = "/admin";
const ROOT_AUTH = "/auth";

export const PATH_DASHBOARD ={
    client: {
        index: ROOT_CLIENT,
        
    },
    admin: {
        index: ROOT_ADMIN,
       stores: JOIN(ROOT_ADMIN, "stores" ),
       particularStore: JOIN(ROOT_ADMIN, "stores/:storeId" ),
       createStore: JOIN(ROOT_ADMIN, "stores/create-store" )

    }
}

export const PATH_AUTH ={
client: JOIN(ROOT_AUTH, "login")
}