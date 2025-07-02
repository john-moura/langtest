package main

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/john-moura/langtest/cmd/api"
	_ "github.com/lib/pq"
	//"github.com/john-moura/langtest/db"
	//"github.com/john-moura/langtest/config"
	//"github.com/go-sql-driver/mysql"
)

func main() {

	const (
		host     = "127.0.0.1"
		port     = 5432
		user     = "postgres"
		password = "root"
		dbname   = "Langtest"
	)

	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	//db, err := sql.Open("postgres", "host=127.0.0.1 port=5432 user=postgres password=root dbname=Langtest sslmode=disable")
	db, err := sql.Open("postgres", psqlInfo)

	if err != nil {
		log.Fatal(err)
	}

	initStorage(db)

	server := api.NewAPIServer(":8080", db)
	if err := server.Run(); err != nil {
		log.Fatal(err)
	}

}

func initStorage(db *sql.DB) {
	err := db.Ping() // starts DB connection
	if err != nil {
		log.Fatal(err)
	}

	log.Println("DB: successfully connected")
}
