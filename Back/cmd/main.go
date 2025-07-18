package main

import (
	"database/sql"
	"log"

	"github.com/john-moura/langtest/cmd/api"
	_ "github.com/lib/pq"
)

func main() {

	// In Dev
	db, err := sql.Open("postgres", "host=127.0.0.1 port=5432 user=postgres password=root dbname=langtest sslmode=disable")

	//In Prod
	//psqlInfo := config.Envs.DATABASE_URL
	//log.Println(psqlInfo)
	//db, err := sql.Open("postgres", psqlInfo)

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
