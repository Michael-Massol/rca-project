FROM python:3.11-slim
WORKDIR /app

# Installation du client PostgreSQL
RUN apt-get update && apt-get install -y postgresql-client && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
COPY wait-for-db.sh /app/
RUN chmod +x /app/wait-for-db.sh

EXPOSE 8000
CMD ["/app/wait-for-db.sh", "db", "5432", "gunicorn", "--bind", "0.0.0.0:8000", "--workers", "2", "app:app"]
