FROM golang:1.24.4

WORKDIR /app

# Copy go.mod and go.sum and download dependencies first for caching
COPY go.mod .
COPY go.sum .
RUN go mod download

# Copy the rest of the application
COPY . .

# Build the app
RUN go build -o langtest ./cmd

EXPOSE 8080

CMD ["./langtest"]