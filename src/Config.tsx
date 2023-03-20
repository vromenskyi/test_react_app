const ApiBaseUrl = "https://reqres.in";

export type EndpointInfo = {
    description: string,
    path: string,
    method: string,
    body?: object
}

export const Endpoints: EndpointInfo[] = [
    { description: "List users",                    path: "/api/users?page=2",  method: "GET"},
    { description: "Single user",                   path: "/api/users/2",       method: "GET"},
    { description: "Single user not found",         path: "/api/users/23",      method: "GET"},
    { description: "List <resource>",               path: "/api/unknown",       method: "GET"},
    { description: "Single <resource>",             path: "/api/unknown/2",     method: "GET"},
    { description: "Single <resource> not found",   path: "/api/unknown/23",    method: "GET"},
    { description: "Create user",                   path: "/api/users",         method: "POST",     body: { name: "morpheus", job: "leader" } },
    { description: "Update user",                   path: "/api/users/2",       method: "PUT",      body: { name: "morpheus", job: "zion resident" } },
    { description: "Update user",                   path: "/api/users/2",       method: "PATCH",    body: { name: "morpheus", job: "zion resident" } },
    { description: "Delete user",                   path: "/api/users/2",       method: "DELETE"},
    { description: "Register successful",           path: "/api/register",      method: "POST",     body: { email: "eve.holt@reqres.in", password: "pistol" } },
    { description: "Register unsuccessful",         path: "/api/register",      method: "POST",     body: { email: "sydney@fife" } },
    { description: "Login successful",              path: "/api/login",         method: "POST",     body: { email: "eve.holt@reqres.in", password: "cityslicka" } },
    { description: "Login unsuccessful",            path: "/api/login",         method: "POST",     body: { email: "peter@klaven" } },
    { description: "Delayed response",              path: "/api/users?delay=3", method: "GET"},
];


export default ApiBaseUrl;