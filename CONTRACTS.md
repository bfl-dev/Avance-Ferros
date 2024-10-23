![image](https://hackmd.io/_uploads/SyvLHWIeyg.png)

# Nodes

- Node object
    ```
    {
        id: integer,
        location: {
            "lat": float,
            "lng": float
        }
    }
    ```

## GET /nodes
Returns all nodes in the system.

- URL Params
    None
- Data Params
    None
- Headers
    Content-Type: application/json
- Code: 200
    Content:
    ```
    {
        nodes:[
        {<node_object>},
        {<node_object>},
        {<node_object>},
        ]
    }
    ```

## GET /nodes/:id
Returns the specified node.
- URL Params
    Required: id=[integer]
- Data Params
    None
- Headers
    Content-Type: application/json
- Code: 200
    Content:```{ <node_object> }```
    
# Stations
- Station object
    ```
    {
       id:integer,
       name:string,
       location:integer
    }
    ```
## GET /stations
Returns all stations in the system

- URL Params
    None
- Data Params
    None
- Headers
    Content-Type: application/json
- Code: 200
    Content:
    ```
    {
        stations:[
        {<station_object>},
        {<station_object>},
        {<station_object>},
        ]
    }
    ```

## GET /stations/:id
Returns the specified node.
- URL Params
    Required: id=[integer]
- Data Params
    None
- Headers
    Content-Type: application/json
- Code: 200
    Content:```{ <station_object> }```
    

# Travels
<!-- Asientos Endpoint (faltante)-->
- Travel Object 
    ```
    {
        id:integer,
        status:string,
        origin:string,
        destination:string,
        departure:string,
        arrival:string,
        date:string
    }
    ```
## GET /travels/:id
Returns the specified travel.
- URL Params
    Required: id=[integer]
- Data Params
    None
- Headers
    Content-Type: application/json
- Code: 200
    Content:```{ <travel_object> }```



# userTrip

# profile
# userHead
# userRewards


# user
- User Object
 ```
    {
        user: String,
        names: String,
        lastNames: String,
        rut: String,
        email: String,
        birthday: String,
        trait: String,
        city: String,
        comunne,
    }
  ```



# admin
- Admin Object 
    ```
    {
        username: String
        imageUrl: String
    }
    ```
- Credentials
    ```
    {
        username: String
        pass: String
    }
    ```
    
## Get /admin/login/:credentials
Returns the admin JWT.
- URL Params
    Required: credentials=[Object]
- Data Params
    None
- Headers
    Content-Type: application/json
- Code: 200
    Content:```{ JWT }```


## Get /admin/users
Returns all the Users.
- URL Params
None
- Data Params
    None
- Headers
    Content-Type: application/json
    Authorization: Token

- Code: 200
    Content: 
    ```
    {
    users: 
      [ 
        {<user_object>},
        {<user_object>},
        {<user_object>}, ...
      ]
    }
    ```
    
## Get /admin/baq/get/user/:id
Returns the user requested

- URL Params
Required: id=[Integer]

- Data Params
    None
- Headers
    Content-Type: application/json
    Authorization: Token
- Code: 200
    Content: `{ <user_object>}` 
    
## GET /admin/baq/travel/id

Returns the travel requested.

- URL Params
Required: id=[Integer]

- Data Params
    None
- Headers
    Content-Type: application/json
    Authorization: Token
- Code: 200
    Content: `{ <travel_object>}` 
    
## put /admin/baq/travel/


