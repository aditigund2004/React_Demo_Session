# Employee CRUD REST API

Django REST Framework API for employee CRUD operations using MySQL.

## Setup

```powershell
cd C:\Users\JBK\Desktop\Python\crudApp
..\.venv\Scripts\python.exe -m pip install -r requirements.txt
```

Create a MySQL database:

```sql
CREATE DATABASE employee_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

The project defaults to MySQL username `root` and password `root`. Configure credentials only if your local MySQL is different:

```powershell
$env:MYSQL_DATABASE="employee_db"
$env:MYSQL_USER="root"
$env:MYSQL_PASSWORD="root"
$env:MYSQL_HOST="127.0.0.1"
$env:MYSQL_PORT="3306"
```

Run migrations and start the API:

```powershell
..\.venv\Scripts\python.exe manage.py migrate
..\.venv\Scripts\python.exe manage.py runserver
```

## Endpoints

- `GET /api/employees/` - list employees
- `POST /api/employees/` - create employee
- `GET /api/employees/{id}/` - retrieve employee
- `PUT /api/employees/{id}/` - replace employee
- `PATCH /api/employees/{id}/` - update employee fields
- `DELETE /api/employees/{id}/` - delete employee
- `POST /api/employees/bulk-create/` - create multiple employees

Example create request:

```json
{
  "name": "Anita Sharma",
  "role": "Software Engineer",
  "salary": "75000.00"
}
```

Example bulk create request:

```json
[
  {
    "name": "Raj Kumar",
    "role": "Developer",
    "salary": "50000.00"
  },
  {
    "name": "Priya Mehta",
    "role": "Tester",
    "salary": "45000.00"
  }
]
```
