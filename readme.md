# ORM DEMO
## Usage



## How to use

- Clone the project 
- change directory and npm install
- Create a folder named config
- Create a file named default.json
- Add the following json in the default.json file and replace the credentials according to your database configuration

```sh
{
	"DB": {
		"HOST": "localhost",
		"USER": "root",
		"PASSWORD": "",
		"DBNAME": "",
		"dialect": "mysql",
		"pool": {
			"max": 5,
			"min": 0,
			"acquire": 30000,
			"idle": 10000
		}
	}
}
```