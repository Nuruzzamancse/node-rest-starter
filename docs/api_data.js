define({ "api": [
  {
    "type": "get",
    "url": "/api",
    "title": "Health Check",
    "name": "Health_Check",
    "group": "API",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "OK",
            "description": "<p>Success Response</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error Response</p>"
          }
        ]
      }
    },
    "filename": "src/index.route.js",
    "groupTitle": "API"
  },
  {
    "description": "<p>Mounts auth routes at /auth</p>",
    "group": "Auth",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/index.route.js",
    "groupTitle": "Auth",
    "name": ""
  },
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "User Login",
    "name": "User_Login",
    "group": "Auth",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile number of user</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT token</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Details of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.userName",
            "description": "<p>Username of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.fullName",
            "description": "<p>Fullname of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.mobileNumber",
            "description": "<p>Mobile number of user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "src/api/auth/auth.route.js",
    "groupTitle": "Auth"
  },
  {
    "description": "<p>Mounts user routes at /users</p>",
    "group": "User",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/index.route.js",
    "groupTitle": "User",
    "name": ""
  },
  {
    "type": "post",
    "url": "/api/users",
    "title": "Create User",
    "name": "Create_User",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Username of user</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Fullname  of user</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile number of user</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Newly created user details</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.id",
            "description": "<p>Newly created user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.userName",
            "description": "<p>Newly created user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.fullName",
            "description": "<p>Newly created user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.mobileNumber",
            "description": "<p>Newly created user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"userName\": \"John\",\n  \"fullName\": \"Doe\",\n  \"mobileNumber\": \"+8801754556589\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "src/api/user/user.route.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/api/users/:userId",
    "title": "Delete User",
    "name": "Delete_User",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>_id of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Deleted user details</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.userName",
            "description": "<p>Username of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.fullName",
            "description": "<p>Fullname of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.mobileNumber",
            "description": "<p>Mobile number of user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "src/api/user/user.route.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:userId",
    "title": "Get User",
    "name": "Get_User",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>id of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Details of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.userName",
            "description": "<p>Username of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.fullName",
            "description": "<p>Fullname of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.mobileNumber",
            "description": "<p>Mobile number of user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "src/api/user/user.route.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users",
    "title": "List Users",
    "name": "List_Users",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.id",
            "description": "<p>Users unique Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.userName",
            "description": "<p>Username of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.fullName",
            "description": "<p>Username of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.mobileNumber",
            "description": "<p>Username of user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "src/api/user/user.route.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/users/:userId",
    "title": "Update User",
    "name": "Update_User",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>id of user</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Username of user</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Fullname of user</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile number of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Details of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.userName",
            "description": "<p>Username of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.fullName",
            "description": "<p>Fullname of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.mobileNumber",
            "description": "<p>Mobile number of user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "src/api/user/user.route.js",
    "groupTitle": "User"
  }
] });
