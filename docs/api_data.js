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
    "description": "<p>Mounts company routes at /company</p>",
    "group": "Company",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/index.route.js",
    "groupTitle": "Company",
    "name": ""
  },
  {
    "type": "delete",
    "url": "/api/company/:companyId",
    "title": "Delete Company",
    "name": "Delete_Company",
    "group": "Company",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>_id of company</p>"
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
            "field": "company",
            "description": "<p>Deleted company details</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Companies unique Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>Name of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyAddress",
            "description": "<p>Address of company</p>"
          },
          {
            "group": "Success 200",
            "type": "enum",
            "optional": false,
            "field": "companySector",
            "description": "<p>Secotor of company , like in which secotr company works</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyDescription",
            "description": "<p>Description of company , like what company does</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "numberofEmpoyees",
            "description": "<p>Number of employees of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "numberOfLocation",
            "description": "<p>Number of location of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pointOfContactName",
            "description": "<p>Point of contact name of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pointOfContactEmailAddress",
            "description": "<p>Point of contact email address of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pointOfContactPhoneNumber",
            "description": "<p>Point of contact phone number of company</p>"
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
    "filename": "src/api/company/company.route.js",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/api/company/:companyId",
    "title": "Get Company",
    "name": "Get_Company",
    "group": "Company",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>id of company</p>"
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
            "field": "company",
            "description": "<p>Details of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company.id",
            "description": "<p>Companys unique Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company.companyName",
            "description": "<p>Name of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company.companyAddress",
            "description": "<p>Address of company</p>"
          },
          {
            "group": "Success 200",
            "type": "enum",
            "optional": false,
            "field": "company.companySector",
            "description": "<p>Secotor of company , like in which secotr company works</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company.companyDescription",
            "description": "<p>Description of company , like what company does</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company.numberofEmpoyees",
            "description": "<p>Number of employees of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company.numberOfLocation",
            "description": "<p>Number of location of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company.pointOfContactName",
            "description": "<p>Point of contact name of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company.pointOfContactEmailAddress",
            "description": "<p>Point of contact email address of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company.pointOfContactPhoneNumber",
            "description": "<p>Point of contact phone number of company</p>"
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
    "filename": "src/api/company/company.route.js",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/api/company",
    "title": "List Companies",
    "name": "List_Companies",
    "group": "Company",
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
            "field": "companies",
            "description": "<p>List of companies</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.id",
            "description": "<p>Companies unique Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.companyName",
            "description": "<p>Name of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.companyAddress",
            "description": "<p>Address of company</p>"
          },
          {
            "group": "Success 200",
            "type": "enum",
            "optional": false,
            "field": "companies.companySector",
            "description": "<p>Secotor of company , like in which secotr company works</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.companyDescription",
            "description": "<p>Description of company , like what company does</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.numberofEmpoyees",
            "description": "<p>Number of employees of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.numberOfLocation",
            "description": "<p>Number of location of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.pointOfContactName",
            "description": "<p>Point of contact name of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.pointOfContactEmailAddress",
            "description": "<p>Point of contact email address of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.pointOfContactPhoneNumber",
            "description": "<p>Point of contact phone number of company</p>"
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
    "filename": "src/api/company/company.route.js",
    "groupTitle": "Company"
  },
  {
    "type": "post",
    "url": "/api/company",
    "title": "Register Company",
    "name": "Register_Company",
    "group": "Company",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>Name of company</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "companyAddress",
            "description": "<p>Address of company</p>"
          },
          {
            "group": "body",
            "type": "enum",
            "allowedValues": [
              "'Academic'",
              "'Associations-Professional Services'",
              "'Critical Infrastructure'",
              "'Entertainment'",
              "'Faith-based'",
              "'Finance'",
              "'Government'",
              "'Healthcare'",
              "'Hospitality'",
              "'Information Technology'",
              "'Manufacturing'",
              "'Nonprofits'",
              "'Retail Commodities'",
              "'Transportation'"
            ],
            "optional": false,
            "field": "companySector",
            "description": "<p>Secotor of company , like in which secotr company works</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "companyDescription",
            "description": "<p>Description of company , like what company does</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "numberofEmpoyees",
            "description": "<p>Number of employees of company</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "numberOfLocation",
            "description": "<p>Number of location of company</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "pointOfContactName",
            "description": "<p>Point of contact name of company</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "pointOfContactEmailAddress",
            "description": "<p>Point of contact email address of company</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "pointOfContactPhoneNumber",
            "description": "<p>Point of contact phone number of company</p>"
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
            "field": "company",
            "description": "<p>Newly created company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Companies unique Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>Name of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyAddress",
            "description": "<p>Address of company</p>"
          },
          {
            "group": "Success 200",
            "type": "enum",
            "optional": false,
            "field": "companySector",
            "description": "<p>Secotor of company , like in which secotr company works</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyDescription",
            "description": "<p>Description of company , like what company does</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "numberofEmpoyees",
            "description": "<p>Number of employees of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "numberOfLocation",
            "description": "<p>Number of location of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pointOfContactName",
            "description": "<p>Point of contact name of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pointOfContactEmailAddress",
            "description": "<p>Point of contact email address of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pointOfContactPhoneNumber",
            "description": "<p>Point of contact phone number of company</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"companyName\":\"Natashi\",\n   \"companyAddress\":\"Hello @123, Bangladesh\",\n   \"companySector\":\"Government\",\n   \"companyDescription\":\"No description\",\n   \"numberofEmpoyees\":\"12\",\n   \"numberOfLocation\": \"5\",\n   \"pointOfContactName\":\"Halum Mama\",\n   \"pointOfContactEmailAddress\":\"halum@gmail.com\",\n   \"pointOfContactPhoneNumber\":\"01754552453\"\n}",
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
    "filename": "src/api/company/company.route.js",
    "groupTitle": "Company"
  },
  {
    "type": "put",
    "url": "/api/company/:companyId",
    "title": "Update Company",
    "name": "Update_Company",
    "group": "Company",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>id of company</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>Name of company</p>"
          },
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "companyAddress",
            "description": "<p>Address of company</p>"
          },
          {
            "group": "Login",
            "type": "enum",
            "allowedValues": [
              "'Academic'",
              "'Associations-Professional Services'",
              "'Critical Infrastructure'",
              "'Entertainment'",
              "'Faith-based'",
              "'Finance'",
              "'Government'",
              "'Healthcare'",
              "'Hospitality'",
              "'Information Technology'",
              "'Manufacturing'",
              "'Nonprofits'",
              "'Retail Commodities'",
              "'Transportation'"
            ],
            "optional": false,
            "field": "companySector",
            "description": "<p>Secotor of company , like in which secotr company works</p>"
          },
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "companyDescription",
            "description": "<p>Description of company , like what company does</p>"
          },
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "numberofEmpoyees",
            "description": "<p>Number of employees of company</p>"
          },
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "numberOfLocation",
            "description": "<p>Number of location of company</p>"
          },
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pointOfContactName",
            "description": "<p>Point of contact name of company</p>"
          },
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pointOfContactEmailAddress",
            "description": "<p>Point of contact email address of company</p>"
          },
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pointOfContactPhoneNumber",
            "description": "<p>Point of contact phone number of company</p>"
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
            "field": "company",
            "description": "<p>Newly created company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Companies unique Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>Name of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyAddress",
            "description": "<p>Address of company</p>"
          },
          {
            "group": "Success 200",
            "type": "enum",
            "optional": false,
            "field": "companySector",
            "description": "<p>Secotor of company , like in which secotr company works</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyDescription",
            "description": "<p>Description of company , like what company does</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "numberofEmpoyees",
            "description": "<p>Number of employees of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "numberOfLocation",
            "description": "<p>Number of location of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pointOfContactName",
            "description": "<p>Point of contact name of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pointOfContactEmailAddress",
            "description": "<p>Point of contact email address of company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pointOfContactPhoneNumber",
            "description": "<p>Point of contact phone number of company</p>"
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
    "filename": "src/api/company/company.route.js",
    "groupTitle": "Company"
  },
  {
    "type": "post",
    "url": "/api/employees",
    "title": "Create Employee",
    "name": "Create_Employee",
    "group": "Employee",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Username of employee</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Fullname  of employee</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile number of employee</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of employee</p>"
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
            "field": "employee",
            "description": "<p>Newly created employee details</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employee.id",
            "description": "<p>Newly created employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employee.userName",
            "description": "<p>Newly created employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employee.fullName",
            "description": "<p>Newly created employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employee.mobileNumber",
            "description": "<p>Newly created employee</p>"
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
    "filename": "src/api/employee/employee.route.js",
    "groupTitle": "Employee"
  },
  {
    "type": "delete",
    "url": "/api/employees/:employeeId",
    "title": "Delete Employee",
    "name": "Delete_Employee",
    "group": "Employee",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "String",
            "optional": false,
            "field": "employeeId",
            "description": "<p>_id of employee</p>"
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
            "field": "employee",
            "description": "<p>Deleted employee details</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employee.userName",
            "description": "<p>Username of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employee.fullName",
            "description": "<p>Fullname of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employee.mobileNumber",
            "description": "<p>Mobile number of employee</p>"
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
    "filename": "src/api/employee/employee.route.js",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/api/employees/:employeeId",
    "title": "Get Employee",
    "name": "Get_Employee",
    "group": "Employee",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "String",
            "optional": false,
            "field": "employeeId",
            "description": "<p>id of employee</p>"
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
            "field": "employee",
            "description": "<p>Details of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employee.userName",
            "description": "<p>Username of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employee.fullName",
            "description": "<p>Fullname of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employee.mobileNumber",
            "description": "<p>Mobile number of employee</p>"
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
    "filename": "src/api/employee/employee.route.js",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/api/employees",
    "title": "List Employees",
    "name": "List_Employees",
    "group": "Employee",
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
            "field": "employees",
            "description": "<p>List of employees</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employees.id",
            "description": "<p>Employees unique Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employees.userName",
            "description": "<p>Username of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employees.fullName",
            "description": "<p>Username of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employees.mobileNumber",
            "description": "<p>Username of employee</p>"
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
    "filename": "src/api/employee/employee.route.js",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "/api/employees/:employeeId",
    "title": "Update Employee",
    "name": "Update_Employee",
    "group": "Employee",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "String",
            "optional": false,
            "field": "employeeId",
            "description": "<p>id of employee</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Username of employee</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Fullname of employee</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile number of employee</p>"
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
            "field": "employee",
            "description": "<p>Details of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employee.userName",
            "description": "<p>Username of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employee.fullName",
            "description": "<p>Fullname of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employee.mobileNumber",
            "description": "<p>Mobile number of employee</p>"
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
    "filename": "src/api/employee/employee.route.js",
    "groupTitle": "Employee"
  }
] });
