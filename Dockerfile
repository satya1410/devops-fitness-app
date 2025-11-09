# Use Python base image
FROM python:3.9

# Set working directory in container
WORKDIR /app

# Copy app files
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port
EXPOSE 8080

# Run the flask app
CMD ["python", "app.py"]
